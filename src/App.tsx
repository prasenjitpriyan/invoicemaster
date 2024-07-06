import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoadingPage } from 'src/pages/LoadingPage';
import { MainPage } from './pages/MainPage';
import { Page404 } from './pages/Page404';
const InvoiceDetailsPage = lazy(() => {
  return import('./pages/InvoiceDetailsPage/').then(
    ({ InvoiceDetailsPage }) => ({ default: InvoiceDetailsPage }),
  );
});

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path={import.meta.env.BASE_URL} element={<MainPage />} />
        <Route
          path={`${import.meta.env.BASE_URL}:invoiceId`}
          element={<InvoiceDetailsPage />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
}

export default App;
