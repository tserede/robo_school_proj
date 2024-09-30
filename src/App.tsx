import React from 'react';
import { Header } from './Components/Common/Header';
import './index.css';
import { Main } from 'Components/Main';
import { Footer } from 'Components/Common/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
