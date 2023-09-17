import React from 'react'
import { useState } from 'react'
import "./bmi.css";

const Bmi = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
 const [bmi, setBmi] = useState('');             /* for bmi calculation */
  const [message, setMessage] = useState('');

  //! Whenever we hit submit button it will perform the calBmi function
   let calcBmi = (e) => {
    e.preventDefault();

     if(weight === 0 || height === 0){
      alert("Please enter your valid weight and height..!");
     }
     else{
      let bmi = (weight/height/height)*10000
      setBmi(bmi.toFixed(1))

      if(bmi < 25){
       setMessage("You are underweight plz Eat!!!")
      }
      else if(bmi >= 25 && bmi < 30){
        setMessage("You are healthy weight keep going..")
      }
      else{
        setMessage("You are overweight plz maintain!..")
      }
     }
   }

   let reload = () => {
    window.location.reload()
   }


  return (
<>
<div className='parent'>
  <div className='child'>
   <center><h1>BMI Calculator</h1></center><br />

<form onSubmit={calcBmi}>
<div>
    <label htmlFor="">Weight (kg) : </label>
    <input type="text" name="" id="" placeholder='Enter your weight' value={weight} 
    onChange={(e) => setWeight(e.target.value)} />
</div><br /><br />
<div>
    <label htmlFor="">Height (cm) : </label>
    <input type="text" name="" id="" placeholder='Enter your height' value={height}
    onChange={(e) => setHeight(e.target.value)} />
</div><br />
<div>
    <button className='btn1' type='submit'>Submit</button>
    <button className='btn2' type='submit' onClick={reload}>Reload</button>
</div>
<div className='messages'>
<center><h2>Your BMI is : <br />{bmi}</h2></center>
   <center><p>{message}</p></center>

</div>



</form>
</div>
</div>

</>
  )
}

export default Bmi