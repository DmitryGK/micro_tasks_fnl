import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './site/Header';
import { Body } from './site/Body';
import { Cars, NewComponent } from './map/map';
import { Button } from './Button/Button';
import { ButtonPractice } from './Button/Button_practice';
import { AppPractice } from './useState/useS';
import { FilterApp } from './filter/filter';

const students = [
  {id: 1, name: "James", age: 8},
  {id: 2, name: "Robert", age: 18},
  {id: 3, name: "John", age: 28},
  {id: 4, name: "Michael", age: 38},
  {id: 5, name: "William", age: 48},
  {id: 6, name: "David", age: 58},
  {id: 7, name: "Richard", age: 68},
  {id: 8, name: "Joseph", age: 78},
  {id: 9, name: "Thomas", age: 88},
  {id: 10, name: "Charles", age: 98},
  {id: 11, name: "Christopher", age: 100},
]

const topCars = [
  {manufacturer:'BMW', model:'m5cs'},
  {manufacturer:'Mercedes', model:'e63s'},
  {manufacturer:'Audi', model:'rs6'}
]

function App() {
  return (
    <>
      <Header title = {'New Header'} />
      <Body title = {'New Body'}/>
      <NewComponent students = {students}/>
      <Cars cars = {topCars}/>
      <Button/>
      <ButtonPractice/>
      <AppPractice/>
      <FilterApp/>
    </>
  );
}

export default App;
