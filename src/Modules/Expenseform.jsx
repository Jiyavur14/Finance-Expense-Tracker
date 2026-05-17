import { useState } from "react";
import "../index.css";

function Expenseform({ expense,setexpense,setexpform}) {

    const handlesubmit = (e)=>{
        e.preventDefault();
        setexpense([...expense,expformdata]);
        setexpform(false);
    }

    const[expformdata,setexpformdata] = useState({category:"",description:"",date:"",amount:""})
    
    const handlechange = (e)=>{
        setexpformdata((prevdata)=>({
         ...prevdata,[e.target.name]:e.target.value}))
    }



  return (
    <>
      <div className="exp-form">
        <form action="" onSubmit={handlesubmit} className="w-60 bg-mist-50 rounded-sm p-4">
          <label htmlFor="" className="block font-serif ...">
            Category
          </label>
          <input type="text"  name="category" value={expformdata.category} onChange={handlechange} className="shadow mt-1 px-3 py-2 rounded-sm font-serif ... mb-2" placeholder="Your Category..."/>

          <label htmlFor="" className="block font-serif ...">
            Description
          </label>
          <input type="text" name="description" value={expformdata.description} onChange={handlechange} className="shadow mt-1 font-serif ... px-3 py-2 rounded-sm mb-2" placeholder="Your Description..."/>

          <label htmlFor="" className="block font-serif ...">
            Date
          </label>
          <input type="text"  name="date" value={expformdata.date} onChange={handlechange} className="shadow mt-1 font-serif ... px-3 py-2 rounded-sm  mb-2" placeholder="Your date..."/>

          <label htmlFor="" className="block font-serif ...">
            Amount
          </label>
          <input type="text" name="amount" value={expformdata.amount} onChange={handlechange} className="shadow mt-1 font-serif ... px-3 py-2 rounded-sm  mb-2" placeholder="Your Amount..."/>

          <input type="submit" value="submit" className="shadow mt-1 font-serif ... rounded-sm px-2 py-2 text-center"/>
        </form>
      </div>
    </>
  );
}

export default Expenseform;
