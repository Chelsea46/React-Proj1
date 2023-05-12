import React from 'react';


export default function Card(props){
    return(
     <div className='card'>
        <h3>{props.name}</h3>
        <p> <strong>Job:</strong> {props.job} </p>
        <p><strong>Counrty:</strong> {props.country}</p>
        <p><strong>Age:</strong> {props.age}</p>
        <p><strong>Net Worth:</strong> {props.netWorth}</p>
     </div>
        
    );
}