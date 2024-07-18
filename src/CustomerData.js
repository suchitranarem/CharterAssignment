const customers = [
    { id: 1, name: "Suchitra" },
    { id: 2, name: "Amritha" },
    { id: 3, name: "Harsha" },
];

const transactions = [
    { customerId: 1, month: 1, amount: 120 },
    { customerId: 2, month: 1, amount: 80 },
    { customerId: 3, month: 1, amount: 150 },
    { customerId: 1, month: 2, amount: 200 },
    { customerId: 2, month: 2, amount: 60 },
    { customerId: 3, month: 2, amount: 75 },
    { customerId: 1, month: 3, amount: 30 },
    { customerId: 2, month: 3, amount: 110 },
    { customerId: 3, month: 3, amount: 40 },
];

export const CustomerData = async () => {
    return new Promise((resolve) => {
       setTimeout(() => {
        resolve({ customers, transactions });
       }, 1000) //Simulate asynchronous API call
    });
};