import React, { useState } from 'react';
import "./card.css";

function Card(props) {

    const images = [
        '/assets/img/0.jpg',
        '/assets/img/1.webp',
        '/assets/img/2.avif',
        '/assets/img/3.jpeg',
        '/assets/img/4.jpg',
        '/assets/img/5.jpg',
        '/assets/img/6.jpg',
        '/assets/img/7.jpeg',
        '/assets/img/8.webp',
        '/assets/img/9.jpg',

    ];
    return (
        <div className='card'>
            {
                images.map((name) =>
                    <>
                        <img className="card-img" src={name}></img>
                        <img className="card-img" src={name}></img>
                    </>



                )

            };


        </div>
    )



}






export default Card;

