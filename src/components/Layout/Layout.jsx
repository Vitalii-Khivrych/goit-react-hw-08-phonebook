import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppBar } from 'components';
import { Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <AppBar />
      </Header>
      <main style={{ paddingTop: '15px' }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={'colored'}
      />
    </>
  );
};
