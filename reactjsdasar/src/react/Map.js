import React from 'react'

const drinks = [
    {
        nama : 'Tea Jus',
        harga : 1000,
    },
    {
        nama : 'Marimas',
        harga : 2000,
    },
    {
        nama : 'Nutrisari',
        harga : 2000,
    },
    {
        nama : 'Jasjus',
        harga : 1500,
    },
]

// Reduce
const total_bayar = drinks.reduce((total_harga, drink) => total_harga+drink.harga, 0);

const Map = () => {
    return (
        <div>
            <h2>Map Sederhana</h2>
            <ul>
                {drinks.map((drink) => (
                    <li>{drink.nama} = {drink.harga}</li>
                ))}
            </ul>
            
            <h2>Map filter harga yang lebih dari 1.500</h2>
            <ul>
                {drinks
                    .filter((drink) => drink.harga > 1500)
                    .map((drink) => (
                    <li>
                        {drink.nama} = {drink.harga}
                    </li>
                ))}
            </ul>
            
            <h3>Total Harga : {total_bayar}</h3>
        </div>
    );
};

export default Map