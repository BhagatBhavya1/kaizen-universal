import React, { useState } from 'react';

// Initialize state variable with an empty array
export const [AddStockData, setAddStockData] = useState([]);
fetch('http://127.0.0.1:5000/Stock_status_data', {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    },
}).then(response => response.json())
.then(data => {
    setAddStockData(data);
});
// export let AddStockData=[
//     {
//         stockname : "Reliance",
//         registerdata : "2021-03-19",
//     },
//     {
//         stockname : "HDFC Bank",
//         registerdata : "2021-03-19",
//     },
//     {
//         stockname : "Reliance",
//         registerdata : "2021-03-19",
//     },
//     {
//         stockname : "HDFC Bank",
//         registerdata : "2021-03-19",
//     },
//     {
//         stockname : "Reliance",
//         registerdata : "2021-03-19",
//     },
//     {
//         stockname : "HDFC Bank",
//         registerdata : "2021-03-19",
//     },
//     {
//         stockname : "Reliance",
//         registerdata : "2021-03-19",
//     },
//     {
//         stockname : "HDFC Bank",
//         registerdata : "2021-03-19",
//     },
// ]