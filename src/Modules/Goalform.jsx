import { useState } from "react";
import "../index.css"


function Goalform({addgoal,setgoalform}){

    
    const handlesubmit = (e) =>{
        e.preventDefault();
        addgoal(formdata);
        setgoalform(false);
    }

    const [formdata,setformdata] = useState({goal:"",currentAmount:"",goalAmount:""});

    const handlechange = (e)=>{
        const {name,value} = e.target;
        setformdata((prevdata)=>({
            ...prevdata,[name]: value
        }))
    }

    return (<>
    
    <form onSubmit={handlesubmit} action="" className="formm bg-white shadow-md px-8 pt-6 pb-8 mb-4">


        <label htmlFor="" className="block font-serif ...">Enter your goal Name</label>
        <input type="text" name="goal" value={formdata.goal} onChange={handlechange} className="shadow mt-2 mb-2 py-2 px-3" placeholder="goal name"/>

        <label htmlFor="" className="block font-serif ...">Your Current Amount</label>
        <input type="number" name="currentAmount" value={formdata.currentAmount} onChange={handlechange} className="shadow mt-2 mb-2 py-2 px-3" placeholder="0.00"/>

        <label htmlFor="" className="block font-serif ...">Your Goal Amount</label>
        <input type="number" name="goalAmount" value={formdata.goalAmount} onChange={handlechange} className="shadow mt-2 mb-2 py-2 px-3" placeholder="0.00"/>

        <input type="submit" className="block shadow mt-2 py-2 px-3 font-serif ..." value="submit" />
    </form>
          
    
    </>)
}

export default Goalform;