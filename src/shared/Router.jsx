import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import UserPage from 'pages/UserPage';
import AuthLayout from './AuthLayout';
import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="user/:id" element={<UserPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route element={<AuthLayout />}>
          <Route path="/sample01" element={<Sample01 />} />
          <Route path="/sample02" element={<Sample02 />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
