import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
const[option,setOption]=useState("");
const [age,setAge]=useState("");
const [height,setHeight]=useState("");
const [weight,setWeight]=useState("");
const [bmi,setBmi]=useState()
const [showResult,setshowResult]=useState(false);
const [disable,setDisable]=useState(false);
const [system,setSystem]=useState("Metric");
const [imperialBmi,setImperial]=useState();
const [feet,setFeet]=useState();
const [inches,setInches]=useState();

const handleSystem=(e)=>{
setSystem(e.target.innerText);
setshowResult(false);
setDisable(false);
setAge("");
setWeight("");
setHeight("");
setFeet("");
setInches("");
setOption("");
}

const calculateBMI=(result)=>{
  parseInt(age);
  parseInt(height);
  parseInt(weight);
  setBmi((result=weight/Math.pow(height,2)*10000).toFixed(1));
  setshowResult(true);
  setDisable(true);
}
const handleAge=(e)=>{
  setAge(e.target.value);
}
const handleHeight=(e)=>{
  setHeight(e.target.value);
}
const handleWeight=(e)=>{
  setWeight(e.target.value);
 
}
const handleSelect=(e)=>{
  setOption(e.target.value);
}

const calculateImperial=()=>{
  const totalHeightInInches = parseInt(feet) * 12 + parseInt(inches);
  const bmiResult = 703 * (parseInt(weight) / Math.pow(totalHeightInInches, 2));
  setImperial(bmiResult.toFixed(1));
  setshowResult(true);
  setDisable(true);
}
const handleFeet=(e)=>{
setFeet(e.target.value);
}
const handleInches=(e)=>{
  setInches(e.target.value);
  }

const clear=()=>{
  setAge("");
  setWeight("");
  setHeight("");
  setFeet("");
  setInches("");
  setBmi();
  setOption("");
  setshowResult(false);
  setDisable(false);
}
const bmiDescription= bmi < 16 ? "Severe thinness" :
bmi >= 16 && bmi < 17 ? "Moderate thinness" :
  bmi >= 17 && bmi < 18.5 ? "Mild thinness" :
    bmi >= 18.5 && bmi < 25 ? "Normal" :
      bmi >= 25 && bmi < 30 ? "Overweight" :
        bmi >= 30 && bmi < 35 ? "Obese Class I" :
          bmi >= 35 && bmi < 40 ? "Obese Class II" :
            bmi >= 40 ? "Obese Class III" :
              "";
              const imperialDescription= imperialBmi < 16 ? "Severe thinness" :
              imperialBmi >= 16 && imperialBmi < 17 ? "Moderate thinness" :
              imperialBmi >= 17 && imperialBmi < 18.5 ? "Mild thinness" :
              imperialBmi >= 18.5 && imperialBmi < 25 ? "Normal" :
              imperialBmi >= 25 && imperialBmi < 30 ? "Overweight" :
              imperialBmi >= 30 && imperialBmi < 35 ? "Obese Class I" :
              imperialBmi >= 35 && imperialBmi < 40 ? "Obese Class II" :
              imperialBmi >= 40 ? "Obese Class III" :
                            "";
console.log(system);
  return (
    <div className="container">
    { 
    system==="Metric" ?
    <div className={system==="Metric" && "MetricBMI"}>
      <h1 className={system==="Metric" && "MetricTitle"}>Adult BMI Calulcator</h1>
      <div className='systems'>
         <button onClick={handleSystem} value={system}  className={system === "Metric" ? "activeMet" : " "}>Metric</button>
         <button onClick={handleSystem} value={system}  className={system === "Imperial" ? "activeImp" : " "}>Imperial</button>
        </div>
      <div className='age'>
      Enter your age:<input type="text" required value={age} onChange={handleAge} disabled={disable}/>
      <span className={system === "Metric" && "MetricSpan"}>*age must be between(19-102)</span>
      </div>
  
      <div className='gender'>
      <p>Gender:</p> Male<input className='radioinput' type="radio" value="Male" onChange={handleSelect} checked={option === "Male"} disabled={disable}/> Female<input type="radio" className='radioinput' value="Female" onChange={handleSelect}  checked={option === 'Female'} disabled={disable} />
        </div>

     <div className='height'>
      Enter your height:<input type="text" onChange={handleHeight}  value={height} required disabled={disable}/>
      <span className={system === "Metric" && "MetricSpan"}>*Enter the height in cm</span>
     </div>
    
     <div className='weight'>
     Enter your weight:<input type="text"  onChange={handleWeight}  value={weight} required disabled={disable}/>
      <span className={system === "Metric" && "MetricSpan"}>*Enter the weight in kg</span>
     </div>
    
      <div className='computeButtons'>
        <button onClick={calculateBMI} disabled={isNaN(age) || isNaN(height) || isNaN(weight) || age<19 || age>102 || age==="" || weight ===""|| height ===""}>Calculate</button>
        <button onClick={clear}>Clear</button>
      </div>
{
  showResult &&
  <div className='results'>
<h2 className={system === "Metric" && disable===true ? "MetricCalculateGlow" : ""}>Your BMI is: {bmi} </h2><p className={system === "Metric" && disable===true ? "MetricCalculateGlow" : ""}>As {age} year old {option} you are in {bmiDescription} group</p>
</div>
}
     </div> 
     :
      <div className={system==="Imperial" && "ImperialBMI"}>
      <h1  className={system==="Imperial" && "ImperialTitle"}>Adult BMI Calulcator</h1>
      <div className='systems'>
         <button onClick={handleSystem} value={system} className={system === "Metric" ? "activeMet" : " "}>Metric</button>
         <button onClick={handleSystem} value={system} className={system === "Imperial" ? "activeImp" : " "}>Imperial</button>
        </div>
      <div className='age'>
      Enter your age:<input type="text" required value={age} onChange={handleAge} disabled={disable}/>
      <span className={system === "Imperial" && "ImperialSpan"}>*age must be between(19-102)</span>
      </div>
  
      <div className='gender'>
      <p>Gender:</p> Male<input className='radioinput' type="radio" value="Male" onChange={handleSelect} checked={option === "Male"} disabled={disable}/> Female<input type="radio" className='radioinput' value="Female" onChange={handleSelect}  checked={option === 'Female'} disabled={disable} />
        </div>

     <div className='height'>
      Enter your height:<input type="text" onChange={handleFeet}  value={feet} required disabled={disable}/>
      <span className={system === "Imperial" && "ImperialSpan"}>*Enter the height in feet </span>
      <input type="text" onChange={handleInches}  value={inches} required disabled={disable}/>
      <span className={system === "Imperial" && "ImperialSpan"}>*Enter the height in inches</span>
     </div>
    
     <div className='weight'>
     Enter your weight:<input type="text"  onChange={handleWeight}  value={weight} required disabled={disable}/>
      <span className={system === "Imperial" && "ImperialSpan"}>*Enter the weight in lbs</span>
     </div>
    
      <div className='computeButtons'>
        <button onClick={calculateImperial} disabled={isNaN(age) || isNaN(feet) || isNaN(weight) || isNaN(inches) || age<19 || age>102 || age==="" || weight ===""|| feet ==="" || inches ==="" }>Calculate</button>
        <button onClick={clear}>Clear</button>
      </div>
{
  showResult &&
  <div className='results'>
<h2  className={system === "Imperial" && disable===true ? "ImperialCalculateGlow" : ""}>Your BMI is: {imperialBmi} </h2><p className={system === "Imperial" && disable===true ? "ImperialCalculateGlow" : ""}>As {age} year old {option} you are in {imperialDescription} group</p>
</div>
}
     </div>
     }


    </div>
  );
}

export default App;
