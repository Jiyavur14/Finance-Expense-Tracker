import "../index.css";
import { useState } from "react";
import Expenseform from "./Expenseform";


function Expense({expense,setexpense}){

    const total = expense.reduce((sum,eachitem)=>sum + Number(eachitem.amount),0)
   
    const [expform,setexpform] = useState(false);

    return (<>
       <div className="head flex justify-between w-230 mx-auto">
        <p className="hhhh mt-2 font-serif ... text-2xl mb-2">Expense Ledger - 2026</p>
        <p className="flex items-center text-2xl " onClick={()=>setexpform(true)}>+</p>
        </div>
        <div className="linee w-full bg-black mt-2 h-[2px]"></div>
        {expform && <div className="fixed inset-0 bg-black/50 flex justify-center items-center pt-20"><Expenseform expense={expense} setexpense={setexpense} setexpform={setexpform}/></div> }
        <div className="newtable">
            <table className="center-table">
                <thead>
                    <th className="p-4 font-serif ...">Category</th>
                    <th className="p-4 font-serif ...">Description</th>
                    <th className="p-4 font-serif ...">Date</th>
                    <th className="p-4 font-serif ...">Amount</th>
                </thead>
                <tbody>
                  {expense.map((eachdata)=>{
                    return (<tr>
                        <td className="p-4 font-serif ...">{eachdata.category}</td>
                        <td className="p-4 font-serif ...">{eachdata.description}</td>
                        <td className="p-4 font-serif ...">{eachdata.date}</td>
                        <td className="p-4 font-serif ...">{eachdata.amount}</td>
                    </tr>)
                  })}
                  <tr>
                    <td colSpan={3} className="p-4 font-serif ...">Total</td>
                    <td className="p-4 font-serif ...">{total}</td>
                  </tr>
                </tbody>
            </table>
        </div>
    </>)
}

export default Expense;