import React from 'react'

export default function Form(props){
    // state
    const [formData, setFormData] = React.useState(
        {name:'', job:'', country:'', age:'', netWorth:''}
    )

    const [formError, setFormError] = React.useState({
        nameError: false,
        ageError: false,
        jobError: false,
        countryError: false,
        netWorthError: false
    })

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
        const errors = {
            name: false,
            age: false,
            job: false,
            country: false,
            netWorth: false
        }
        if(isValid){
            props.myFunc(formData)
            setFormData({name:'', job:'', country:'', age:'', netWorth:''})
        } if(formData.age === ''){
          errors.age = true
        }if(formData.job === ''){
            errors.job = true
        }if(formData.country === ''){
            errors.country = true
        }if(formData.name === ''){
            errors.name = true
        }if(formData.netWorth === ''){
            errors.netWorth = true
        }else{
            setFormError(prevState => {
                return{
                ...prevState,
                netWorthError: false,
                ageError: false,
                nameError: false,
                jobError: false,
                countryError:false,
                }
            })
        }
        setFormError(prevState => {
            return {...prevState,
                netWorthError: errors.netWorth,
                ageError: errors.age,
                nameError: errors.name,
                jobError: errors.job,
                countryError: errors.country
            }
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Name' value = {formData.name} onChange={handleChange} />
            <input type="text" name="job" placeholder='Ocupation' value = {formData.job} onChange={handleChange}/>
            <input type="text" name="country" placeholder='Country' value = {formData.country} onChange={handleChange}/>
            <input type="text" name="age" placeholder='Age' value = {formData.age} onChange={handleChange}/>
            <input type="text" name="netWorth" placeholder='Net Worth' value = {formData.netWorth} onChange={handleChange} />
            <button>Add User</button>
            {formError.ageError && <h4>Please fill out Age field</h4>}
            {formError.nameError && <h4>Please fill out Name field</h4>}
            {formError.countryError && <h4>Please fill out Country field</h4>}
            {formError.netWorthError && <h4>Please fill out Net worth field</h4>}
            {formError.jobError  && <h4>Please fill out Job field</h4>}
        </form>
    )
}