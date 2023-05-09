import React from 'react'

export default function Form(props){
    // state
    const [formData, setFormData] = React.useState(
        {name:'', job:'', country:'', age:'', netWorth:''}
    )

   

    // handle change
    function handleChange(e){
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    

    // handle submit
    const isValid = formData.age != '' && formData.name != '' && formData.job != '' && formData.country != '' && formData.netWorth != '';

    function handleSubmit(event){
        event.preventDefault()
        if(isValid){
            props.myFunc(formData)
        } 
        setFormData({name:'', job:'', country:'', age:'', netWorth:''})
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Name' value = {formData.name} onChange={handleChange} />
            <input type="text" name="job" placeholder='Ocupation' value = {formData.job} onChange={handleChange}/>
            <input type="text" name="country" placeholder='Country' value = {formData.country} onChange={handleChange}/>
            <input type="text" name="age" placeholder='Age' value = {formData.age} onChange={handleChange}/>
            <input type="text" name="netWorth" placeholder='Net Worth' value = {formData.netWorth} onChange={handleChange} />
            <button>Add User</button>
            {formData.age === '' && <h4>Please fill out Age field</h4>}
            {formData.name === '' && <h4>Please fill out Name field</h4>}
            {formData.country === '' && <h4>Please fill out Country field</h4>}
            {formData.netWorth === '' && <h4>Please fill out Net worth field</h4>}
            {formData.job === '' && <h4>Please fill out Job field</h4>}
        </form>
    )
}