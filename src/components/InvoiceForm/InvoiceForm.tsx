import { InvoiceFormDateField } from 'components/InvoiceFormDateField';
import { InvoiceFormInputField } from 'components/InvoiceFormInputField';
import { InvoiceFormItemDelBtn } from 'components/InvoiceFormItemDelBtn';
import { InvoiceFormSelectField } from 'components/InvoiceFormSelectField';
import { InvoiceFormTotalField } from 'components/InvoiceFormTotalField';
import { FieldArray, Form, Formik } from 'formik';
import { transformFormDataToInvoice } from 'src/helpers/transformFormDataToInvoice.ts';
import {
  addNewInvoice,
  changeInvoice,
} from 'src/store/features/Invoice/InvoiceSlice.ts';
import { useAppDispatch } from 'src/store/redux-hooks.ts';
import {
  Invoice,
  InvoiceFormPayloadAction,
  InvoiceFormValues,
} from 'src/types';
import * as Yup from 'yup';
import { object } from 'yup';
import styles from './InvoiceForm.module.scss';

interface InvoiceFormProps {
  invoice?: Invoice;
  cancelChangesHandler: () => void;
}

const validationSchema: Yup.ObjectSchema<InvoiceFormValues> =
  Yup.object().shape({
    senderStreetAddress: Yup.string().required('can’t be empty'),
    senderCity: Yup.string().required('can’t be empty'),
    senderPostCode: Yup.string().required('can’t be empty'),
    senderCountry: Yup.string().required('can’t be empty'),
    clientName: Yup.string().required('can’t be empty'),
    clientEmail: Yup.string().email().required('not valid email'),
    clientStreet: Yup.string().required('can’t be empty'),
    clientCity: Yup.string().required('can’t be empty'),
    clientPostCode: Yup.string().required('can’t be empty'),
    clientCountry: Yup.string().required('can’t be empty'),
    invoiceDate: Yup.date().required(),
    invoicePaymentPeriod: Yup.number().required(),
    projectDescription: Yup.string().required('can’t be empty'),
    invoiceItems: Yup.array()
      .of(
        object({
          name: Yup.string().required('can’t be empty'),
          quantity: Yup.number().required('empty'),
          price: Yup.number().required('can’t be empty'),
          total: Yup.number().required(),
        }),
      )
      .required(),
  });

export const InvoiceForm = ({
  invoice,
  cancelChangesHandler,
}: InvoiceFormProps) => {
  const initialValues: InvoiceFormValues = {
    senderStreetAddress: invoice?.senderAddress.street ?? '',
    senderCity: invoice?.senderAddress.city ?? '',
    senderPostCode: invoice?.senderAddress.postCode ?? '',
    senderCountry: invoice?.senderAddress.country ?? '',
    clientName: invoice?.clientName ?? '',
    clientEmail: invoice?.clientEmail ?? '',
    clientStreet: invoice?.clientAddress.street ?? '',
    clientCity: invoice?.clientAddress.city ?? '',
    clientPostCode: invoice?.clientAddress.postCode ?? '',
    clientCountry: invoice?.clientAddress.country ?? '',
    invoiceDate: new Date(invoice?.createdAt ?? Date.now()),
    invoicePaymentPeriod: invoice?.paymentTerms ?? 0,
    projectDescription: invoice?.description ?? '',
    invoiceItems: invoice?.items ?? [
      { name: '', quantity: 0, price: 0, total: 0 },
    ],
  };
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        const preparedValues: InvoiceFormPayloadAction = {
          ...values,
          invoiceDate: values.invoiceDate.toISOString().split('T')[0],
          invoiceItems: values.invoiceItems.map((item) => {
            return { ...item, price: Number(item.price) };
          }),
        };
        if (invoice) {
          dispatch(changeInvoice(preparedValues, invoice.id));
        }
        if (!invoice) {
          dispatch(addNewInvoice(transformFormDataToInvoice(preparedValues)));
        }
        cancelChangesHandler();
      }}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {({ values, setValues, errors }) => (
        <Form className={styles.invoiceForm}>
          <div className={styles.invoiceForm__senderBlock}>
            <h3 className={styles.invoiceForm__sectionHeading}>Bill From</h3>
            <div className={styles.invoiceForm__labelStrretAdr}>
              <InvoiceFormInputField
                type="text"
                name="senderStreetAddress"
                placeholder=""
                labelText="Street Address"
              />
            </div>
            <div className={styles.invoiceForm__labelCity}>
              <InvoiceFormInputField
                type="text"
                name="senderCity"
                placeholder=""
                labelText="City"
              />
            </div>
            <div className={styles.invoiceForm__labelpostCode}>
              <InvoiceFormInputField
                type="text"
                name="senderPostCode"
                placeholder=""
                labelText="Post Code"
              />
            </div>
            <div className={styles.invoiceForm__labelCountry}>
              <InvoiceFormInputField
                type="text"
                name="senderCountry"
                placeholder=""
                labelText="Country"
              />
            </div>
          </div>
          <div className={styles.invoiceForm__receiverBlock}>
            <h3 className={styles.invoiceForm__sectionHeading}>Bill To</h3>
            <div className={styles.invoiceForm__labelclientName}>
              <InvoiceFormInputField
                type="text"
                name="clientName"
                placeholder=""
                labelText="Client’s Name"
              />
            </div>
            <div className={styles.invoiceForm__labelclientMail}>
              <InvoiceFormInputField
                type="email"
                name="clientEmail"
                placeholder=""
                labelText="Client’s Email"
              />
            </div>
            <div className={styles.invoiceForm__labelclientStreet}>
              <InvoiceFormInputField
                type="text"
                name="clientStreet"
                placeholder=""
                labelText="Street Address"
              />
            </div>
            <div className={styles.invoiceForm__labelclientCity}>
              <InvoiceFormInputField
                type="text"
                name="clientCity"
                placeholder=""
                labelText="City"
              />
            </div>
            <div className={styles.invoiceForm__labelClientPostCode}>
              <InvoiceFormInputField
                type="text"
                name="clientPostCode"
                placeholder=""
                labelText="Post Code"
              />
            </div>
            <div className={styles.invoiceForm__labelClientCountry}>
              <InvoiceFormInputField
                type="text"
                name="clientCountry"
                placeholder=""
                labelText="Country"
              />
            </div>
            <div className={styles.invoiceForm__invoiceDateAndTermsBlock}>
              <div className={styles.invoiceForm__invoiceDateBlock}>
                <InvoiceFormDateField
                  labelText="Invoice Date"
                  name="invoiceDate"
                />
              </div>
              <div className={styles.invoiceForm__invoiceSelectDateBlock}>
                <InvoiceFormSelectField
                  labelText="Payment Terms"
                  name="invoicePaymentPeriod"
                />
              </div>
            </div>
            <div className={styles.invoiceForm__labelProjectDescription}>
              <InvoiceFormInputField
                type="text"
                name="projectDescription"
                placeholder=""
                labelText="Project Description"
              />
            </div>
          </div>
          <div className={styles.invoiceForm__itemsBlock}>
            <h2 className={styles.invoiceForm__itemsBlockHeading}>Item List</h2>
            <div className={styles.invoiceForm__itemsBlockItems}>
              <FieldArray
                name="invoiceItems"
                render={(_) => {
                  return values.invoiceItems.map((_, index) => {
                    return (
                      <div
                        className={styles.invoiceForm__itemsBlockItemsFields}
                        key={index}
                      >
                        <div
                          className={styles.invoiceForm__itemsBlockItemsName}
                        >
                          <InvoiceFormInputField
                            name={`invoiceItems[${index}]["name"]`}
                            labelText="Item Name"
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <div className={styles.invoiceForm__itemsBlockItemsQTY}>
                          <InvoiceFormInputField
                            name={`invoiceItems[${index}]["quantity"]`}
                            labelText="Qty"
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <div
                          className={styles.invoiceForm__itemsBlockItemsPrice}
                        >
                          <InvoiceFormInputField
                            name={`invoiceItems[${index}]["price"]`}
                            labelText="Price"
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <div
                          className={styles.invoiceForm__itemsBlockItemsTotal}
                        >
                          <InvoiceFormTotalField
                            name={`invoiceItems[${index}]["total"]`}
                            labelText="Total"
                            type="text"
                            placeholder=""
                            index={index}
                          />
                        </div>
                        <div
                          className={styles.invoiceForm__itemsBlockItemsDelBtn}
                        >
                          <InvoiceFormItemDelBtn
                            type="button"
                            clickHandler={function () {
                              setValues({
                                ...values,
                                invoiceItems: values.invoiceItems.filter(
                                  (_, i) => i !== index,
                                ),
                              });
                            }}
                          />
                        </div>
                      </div>
                    );
                  });
                }}
              />
              <button
                className={styles.invoiceForm__itemsBlockItemsAddBtn}
                type="button"
                onClick={function () {
                  setValues({
                    ...values,
                    invoiceItems: [
                      ...values.invoiceItems,
                      { name: '', quantity: 0, price: 0, total: 0 },
                    ],
                  });
                }}
              >
                + Add New Item
              </button>
            </div>
          </div>
          {Object.keys(errors).some((item, index) => !!item[index]) && (
            <div className={styles.invoiceForm__errorBlock}>
              - All fields must be added
            </div>
          )}
          <div className={styles.invoiceForm__buttonsBar}>
            {invoice && (
              <button
                type="button"
                className={styles.invoiceForm__btnCanceChanges}
                onClick={cancelChangesHandler}
              >
                Cancel
              </button>
            )}
            {invoice && (
              <button
                type="submit"
                className={styles.invoiceForm__btnSaveChanges}
              >
                Save Changes
              </button>
            )}
            {!invoice && (
              <button
                type="button"
                className={styles.invoiceForm__btnCancelNewInvoice}
                onClick={cancelChangesHandler}
              >
                Cancel
              </button>
            )}
            {!invoice && (
              <button
                type="button"
                className={styles.invoiceForm__btnSaveDraft}
                onClick={() => {
                  const preparedValues: InvoiceFormPayloadAction = {
                    ...values,
                    invoiceDate: values.invoiceDate.toISOString().split('T')[0],
                    invoiceItems:
                      values.invoiceItems.length > 0
                        ? values.invoiceItems.map((item) => {
                            return { ...item, price: Number(item.price) };
                          })
                        : [],
                  };
                  dispatch(
                    addNewInvoice(
                      transformFormDataToInvoice(preparedValues, 'draft'),
                    ),
                  );
                  cancelChangesHandler();
                }}
              >
                Save as Draft
              </button>
            )}
            {!invoice && (
              <button
                type="submit"
                className={styles.invoiceForm__btnNewInvoiceSave}
              >
                Save & Send
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};
