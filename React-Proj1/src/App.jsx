import React from 'react'
import Card from './assets/Card'
import cardData from "./assets/data";
import './App.css'

export default function App() {
  const celebs = cardData.map(celeb =>{
    console.log(celeb)
    return (
      <Card 
        key = {celeb.id}
        name={celeb.name}
        job={celeb.job}
        country={celeb.country}
        age={celeb.age}
        netWorth={celeb.netWorth}
        />
    );
  });

    return (
      <div className='main'>
        <Card />
        {celebs}
      </div>
      );
}