import React from 'react'
import { BillProvider } from '../../Context/BillContext';
import AddBill from '../AddBills/AddBill';
import './App.css';

const App = () => {
  return (
  <div className='bills-container'>
    <BillProvider>
      <AddBill />
    </BillProvider>
  </div>
  );
}

export default App;
