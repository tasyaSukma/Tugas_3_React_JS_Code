import React from 'react';
import './App.css';
import Footer from './Page/Footer';
import Header from './Page/Header';
import MenuKontak from './Page/MenuKontak';
import MenuMakanan from './Page/MenuMakanan';
import MenuTentangKami from './Page/MenuTentangKami';

function App() {
  return (
    <div>
      <Header/>
      <MenuMakanan/>
      <MenuTentangKami/>
      <MenuKontak/>
      <Footer/>
    </div>
  );
}

export default App;
