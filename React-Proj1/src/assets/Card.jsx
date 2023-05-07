import React from 'react';


export default function Card(props){
    return(
     <div className='card'>
         <h3>{props.name}</h3>
        <p>Job: {props.job} </p>
        <p>Counrty: {props.country}</p>
        <p>Age: {props.age}</p>
        <p>Net Worth: {props.netWorth}</p>
        </div>
    );
};