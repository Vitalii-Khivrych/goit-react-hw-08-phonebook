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
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <ToastContainer />
      </main>
    </>
  );
};
