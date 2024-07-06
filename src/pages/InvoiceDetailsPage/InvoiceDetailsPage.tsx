import { ConfirmModal } from 'components/ConfirmModal';
import { AnimatePresence } from 'framer-motion';
import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import arrowLeftIconUrl from 'src/assets/icon-arrow-left.svg';
import { Container } from 'src/components/Container';
import { DetailsStatusBar } from 'src/components/DetailsStatusBar';
import { Header } from 'src/components/Header';
import { InvoiceDeleteBtn } from 'src/components/InvoiceDeleteBtn';
import { InvoiceEditBtn } from 'src/components/InvoiceEditBtn';
import { InvoiceItemLine } from 'src/components/InvoiceItemLine';
import { InvoiceMakePaidBtn } from 'src/components/InvoiceMakePaidBtn';
import { InvoiceIdIsString } from 'src/helpers/invoiceId.ts';
import { InvoiceEditPage } from 'src/pages/InvoiceEditPage';
import {
  deleteInvoice,
  markInvoiceAsPaid,
} from 'src/store/features/Invoice/InvoiceSlice.ts';
import { selectInvoiceById } from 'src/store/features/Invoice/invoiceSelectors';
import { useAppDispatch, useAppSelector } from 'src/store/redux-hooks';
import { Page404 } from '../Page404';
import styles from './InvoiceDetailsPage.module.scss';

export const InvoiceDetailsPage = () => {
  const [showEditPage, setShowEditPage] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { invoiceId } = useParams();
  const navigate = useNavigate();
  const invoice = useAppSelector((state) =>
    selectInvoiceById(state, invoiceId as string),
  );
  const dispatch = useAppDispatch();

  const editPageHandler = useCallback(() => {
    setShowEditPage((prev) => !prev);
  }, []);

  const cancelDeleteModalHandler = useCallback(() => {
    setShowDeleteModal((prev) => !prev);
  }, []);

  const deleteInvoiceHandler = useCallback(() => {
    if (invoice) {
      dispatch(deleteInvoice(invoice.id));
      setShowDeleteModal(false);
      navigate(`${import.meta.env.BASE_URL}`);
    }
  }, []);

  const markInvoiceAsPaidHandler = () => {
    InvoiceIdIsString(invoiceId);
    dispatch(markInvoiceAsPaid(invoiceId));
  };

  if (!invoice) {
    return <Page404 />;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <section className={styles.invoiceDetailsPage}>
          <div className={styles.header}>
            <Header />
          </div>
          <InvoiceEditPage
            closeHandler={editPageHandler}
            invoice={invoice}
            isShown={showEditPage}
          />
          <div className={styles.invoiceDetailsPage__wrapper}>
            <section className={styles.invoiceDetailsPage__backLinks}>
              <Container>
                <span
                  className={styles.invoiceDetailsPage__backLink}
                  onClick={() => navigate(`${import.meta.env.BASE_URL}`)}
                >
                  <img
                    className={styles.invoiceDetailsPage__backLink__image}
                    src={arrowLeftIconUrl}
                    alt="arrow left"
                  />
                  Go back
                </span>
              </Container>
            </section>
            <section className={styles.invoiceDetailsPage__headingBar}>
              <Container>
                <DetailsStatusBar
                  status={invoice.status}
                  editPageHandler={editPageHandler}
                  deletePageHandler={cancelDeleteModalHandler}
                />
              </Container>
            </section>
            <Container>
              <section className={styles.invoiceDetailsPage__infoBlock}>
                <div className={styles.invoiceDetailsPage__infoBlock__heading}>
                  <h2
                    className={
                      styles.invoiceDetailsPage__infoBlock__heading__id
                    }
                  >
                    <span className={styles.hash}>#</span>
                    {invoice.id}
                  </h2>
                  <span
                    className={
                      styles.invoiceDetailsPage__infoBlock__heading__desc
                    }
                  >
                    {invoice.description}
                  </span>
                </div>
                <div className={styles.invoiceDetailsPage__infoBlock__address}>
                  <span
                    className={
                      styles.invoiceDetailsPage__infoBlock__address__street
                    }
                  >
                    {invoice.senderAddress.street}
                  </span>
                  <span
                    className={
                      styles.invoiceDetailsPage__infoBlock__address__city
                    }
                  >
                    {invoice.senderAddress.city}
                  </span>
                  <span
                    className={
                      styles.invoiceDetailsPage__infoBlock__address__postCode
                    }
                  >
                    {invoice.senderAddress.postCode}
                  </span>
                  <span
                    className={
                      styles.invoiceDetailsPage__infoBlock__address__country
                    }
                  >
                    {invoice.senderAddress.country}
                  </span>
                </div>
                <div className={styles.invoiceDetailsPage__infoBlock__dates}>
                  <div
                    className={
                      styles.invoiceDetailsPage__infoBlock__dates__payment
                    }
                  >
                    <span
                      className={
                        styles.invoiceDetailsPage__infoBlock__dates__label
                      }
                    >
                      Invoice Date
                    </span>
                    <span
                      className={
                        styles.invoiceDetailsPage__infoBlock__dates__value
                      }
                    >
                      {invoice.createdAt}
                    </span>
                  </div>
                  <div
                    className={
                      styles.invoiceDetailsPage__infoBlock__dates__payment
                    }
                  >
                    <span
                      className={
                        styles.invoiceDetailsPage__infoBlock__dates__label
                      }
                    >
                      Payment Due
                    </span>
                    <span
                      className={
                        styles.invoiceDetailsPage__infoBlock__dates__value
                      }
                    >
                      {invoice.paymentDue}
                    </span>
                  </div>
                </div>
                <div className={styles.invoiceDetailsPage__infoBlock__receiver}>
                  <span
                    className={
                      styles.invoiceDetailsPage__infoBlock__receiver__label
                    }
                  >
                    Bill To
                  </span>
                  <span
                    className={
                      styles.invoiceDetailsPage__infoBlock__receiver__value
                    }
                  >
                    {invoice.clientName}
                  </span>
                  <div
                    className={
                      styles.invoiceDetailsPage__infoBlock__receiver__data
                    }
                  >
                    <span
                      className={
                        styles.invoiceDetailsPage__infoBlock__receiver__data__street
                      }
                    >
                      {invoice.clientAddress.street}
                    </span>
                    <span
                      className={
                        styles.invoiceDetailsPage__infoBlock__receiver__data__city
                      }
                    >
                      {invoice.clientAddress.city}
                    </span>
                    <span
                      className={
                        styles.invoiceDetailsPage__infoBlock__receiver__data__postCode
                      }
                    >
                      {invoice.clientAddress.postCode}
                    </span>
                    <span
                      className={
                        styles.invoiceDetailsPage__infoBlock__receiver__data__country
                      }
                    >
                      {invoice.clientAddress.country}
                    </span>
                  </div>
                </div>
                <div
                  className={styles.invoiceDetailsPage__infoBlock__sentToEmail}
                >
                  <span
                    className={
                      styles.invoiceDetailsPage__infoBlock__sentToEmail__label
                    }
                  >
                    Sent to
                  </span>
                  <span
                    className={
                      styles.invoiceDetailsPage__infoBlock__sentToEmail__value
                    }
                  >
                    {invoice.clientEmail}
                  </span>
                </div>
                <div
                  className={styles.invoiceDetailsPage__infoBlock__invoiceItems}
                >
                  <span
                    className={
                      styles.invoiceDetailsPage__infoBlock__invoiceItems__label
                    }
                  >
                    Item Name
                  </span>
                  <span
                    className={
                      styles.invoiceDetailsPage__infoBlock__invoiceItems__label
                    }
                  >
                    QTY.
                  </span>
                  <span
                    className={
                      styles.invoiceDetailsPage__infoBlock__invoiceItems__label
                    }
                  >
                    Price
                  </span>
                  <span
                    className={
                      styles.invoiceDetailsPage__infoBlock__invoiceItems__label
                    }
                  >
                    Total
                  </span>
                  {invoice.items.map((item) => (
                    <div
                      key={item.name}
                      className={
                        styles.invoiceDetailsPage__infoBlock__invoiceItems__line
                      }
                    >
                      <InvoiceItemLine {...item} />
                    </div>
                  ))}
                </div>
                <div
                  className={
                    styles.invoiceDetailsPage__infoBlock__invoiceItems__grandTotal
                  }
                >
                  <span
                    className={
                      styles.invoiceDetailsPage__infoBlock__invoiceItems__grandTotal__label
                    }
                  >
                    Grand Total
                  </span>
                  <span
                    className={
                      styles.invoiceDetailsPage__infoBlock__invoiceItems__grandTotal__value
                    }
                  >
                    £ {invoice.total.toFixed(2)}
                  </span>
                </div>
              </section>
            </Container>
            <footer className={styles.invoiceDetailsPage__footer}>
              <Container>
                <div className={styles.invoiceDetailsPage__footer__buttons}>
                  <div className={styles.invoiceDetailsPage__footer__button}>
                    <InvoiceEditBtn
                      text="Edit"
                      clickHandler={editPageHandler}
                    />
                  </div>
                  <div className={styles.invoiceDetailsPage__footer__button}>
                    <InvoiceDeleteBtn
                      clickHandler={cancelDeleteModalHandler}
                      text="Delete"
                    />
                  </div>
                  <div className={styles.invoiceDetailsPage__footer__button}>
                    <InvoiceMakePaidBtn
                      text="Mark as Paid"
                      disabled={
                        invoice.status.toLowerCase() === 'paid' ||
                        invoice.status.toLowerCase() === 'draft'
                      }
                      clickHandler={markInvoiceAsPaidHandler}
                    />
                  </div>
                </div>
              </Container>
            </footer>
          </div>
        </section>
      </AnimatePresence>
      {showDeleteModal &&
        createPortal(
          <ConfirmModal
            cancelHandler={cancelDeleteModalHandler}
            confirmHandler={deleteInvoiceHandler}
          />,
          document.body,
        )}
    </>
  );
};
