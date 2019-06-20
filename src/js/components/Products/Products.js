import React, { Component } from 'react';

const Product = (props) => {
    const relatedProducts = props.relatedProducts.map((relatedProduct, index) => <li key={index}>{relatedProduct}</li>);

    return (
        <div>
            <p>Click to purchase a {props.name} at ${props.price}</p>
            {props.quantity < 5 ? (
                <p>
                    <strong>Only {props.quantity} left in stock! Act Fast!</strong>
                </p>
            ) : null}
            <ul>
                {relatedProducts}
            </ul>

        </div>
    );
};

export default Product;

// const relatedProductsArray = ["Scimmys", "Regular Mauls", "Maces", "Great Axe"];
// const relatedFreezerArray = ["Ice", "Ice Cream", "Cookies and Cream", "Cookie Dough"];
// const relatedBasketballArray = ["Lebron", "Harden", "KG", "TMAC"];
/* <p className="App-intro">
                    HELLLOO <code>DALLAS!!</code> AND WELCOME!
                </p>
                <h1>Ty The Awesome! </h1>
                <ul>
                    <li>Deadpool</li>
                    <li>Logan</li>
                    <li>Game Of Thrones</li>
                    <li>Breaking Bad</li>
                    <li>Sicario</li>
                    <li>Godfather</li>
                    <li>Scarface</li>
                    <li>GoodFellas</li>
                    <li>A Bronx Tale</li>
                </ul>

            <Product name="Granite Maul" price="350.00" quantity={3} relatedProducts={relatedProductsArray} />
            <Product name="Chocolate Chip" price="5.00" quantity={7} relatedProducts={relatedFreezerArray} />
            <Product name="Shaq" price="35550.00" quantity={2} relatedProducts={relatedBasketballArray} /> */