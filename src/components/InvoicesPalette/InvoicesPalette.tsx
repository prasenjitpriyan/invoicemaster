import { NoInfoPage } from 'components/NoInfoPage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInvoices } from 'src/store/features/Invoice/useInvoices';
import { Container } from '../Container';
import { InvoiceCard } from '../InvoiceCard';
import styles from './InvoicesPalette.module.scss';

const animation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const InvoicesPalette = () => {
  const invoices = useInvoices();
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className={styles.invoicesPalette}
    >
      <Container>
        {invoices.length === 0 && <NoInfoPage text="There is nothing here" />}
        {invoices.length > 0 &&
          invoices.map((invoice, index) => (
            <motion.div
              variants={animation}
              key={invoice.id}
              custom={index + 1}
              className={styles.invoicesPalette__invoice}
            >
              <Link to={`${import.meta.env.BASE_URL}${invoice.id}`}>
                <InvoiceCard {...invoice} />
              </Link>
            </motion.div>
          ))}
      </Container>
    </motion.section>
  );
};
