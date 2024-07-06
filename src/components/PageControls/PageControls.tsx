import { Container } from '../Container';
import { PageControlButton } from '../PageControlButton';
import { PageControlSelect } from '../PageControlSelect';
import { PageControlsTextInfo } from '../PageControlsTextInfo';
import styles from './PageControls.module.scss';

interface PageControlsProps {
  openPageNewHandler: () => void;
}

export const PageControls = ({ openPageNewHandler }: PageControlsProps) => {
  return (
    <Container>
      <section className={styles.pageControls}>
        <PageControlsTextInfo />
        <div className={styles.pageControls__select}>
          <PageControlSelect />
        </div>
        <PageControlButton openPageHandler={openPageNewHandler} />
      </section>
    </Container>
  );
};
