import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';

function App() {
  return (
    <>
      <Header title = {'New Header'} />
      <Body title = {'New Body'}/>
    </>
  );
}

export default App;
