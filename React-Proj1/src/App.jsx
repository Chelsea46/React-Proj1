import React from 'react'
import Card from './assets/Card'
import cardData from "./assets/data";
import Form from './assets/Form'
import './App.css'

export default function App() {
  const [users, setUsers] = React.useState(cardData)


  // cardData
  const celebs = users.map((celeb, index) =>{
    return (
      <Card 
        key = {index}
        name={celeb.name}
        job={celeb.job}
        country={celeb.country}
        age={celeb.age}
        netWorth={celeb.netWorth}
        />
    );
  });

    const updateUsers = (data) => {
      setUsers([
        ...users,
        {
          name: data.name,
          age: data.age,
          country: data.country,
          job: data.job,
          netWorth: data.netWorth
        }
      ])
    }


  

    return (
      <>
      <div className="form-container">
        <Form 
        myFunc={updateUsers}/>
        </div>
      <div className='card-container'>
        {celebs}
      </div>
      </>
      );
}