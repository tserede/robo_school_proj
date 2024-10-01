import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import { MainContent } from 'Containers/Main';
import { PaymentPage } from 'Containers/PaymentPage';
import { routes } from 'Helpers/Constants/Routes';


function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<MainContent />} />
      <Route path={routes.payment} element={<PaymentPage />} />
    </Routes>
  );
}

export default App;
