import './App.css';
import { CustomerData } from './CustomerData';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CustomerData();
        setData(response);
      }catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const calculatePoints = (amount) => {
    let points = 0;
    if (amount > 100) {
      points += (amount - 100) * 2;
    }
    if (amount > 50){
      points += Math.min(amount - 50, 50);
    }
    return points;
  }

  const calculateCustomerPoints = (customerId, month) => {
    if (!data) return 0;
    
    const customerTransactions = data.transactions.filter(
      (transaction) => 
        transaction.customerId === customerId && transaction.month === month
      );
      
    const totalPoints = customerTransactions.reduce(
      (acc, transaction) => acc + calculatePoints(transaction.amount),
      0
    );

    return totalPoints;
  };

  const renderCustomerPoints = () => {
    if(!data) {
      return <p>Loading...</p>
    }

    if (error) {
      return <p>Error: {error}</p>
    }

  return (
    <div>
      <table align = "center" >
        <caption><h2>Reward Points</h2></caption>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Month 1</th>
            <th>Month 2</th>
            <th>Month 3</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{calculateCustomerPoints(customer.id, 1)}</td>
              <td>{calculateCustomerPoints(customer.id, 2)}</td>
              <td>{calculateCustomerPoints(customer.id, 3)}</td>
              <td>
                {data.transactions
                  .filter((transaction) => transaction.customerId === customer.id)
                  .reduce((acc, transaction) => acc + calculatePoints(transaction.amount), 0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
 };

 return <div>{renderCustomerPoints()}</div>;
};

export default App;
