import { useEffect, useState } from "react";
import "../index.css"
import Goalform from "./Goalform";

function Goals({goals,setgoals}){

    const[goalform,setgoalform] = useState(false);
   

    const addgoal = (newgoal)=>{
      setgoals([...goals,newgoal])
    }


    return (<>
    <div className="pl-60">
    <div className="head flex justify-between ">
        <p className="font-serif ... text-2xl pt-10 pl-10">Goals Ledger - 2026</p>
        <p className="text-2xl pt-10 pr-107" onClick={()=>setgoalform(true)}>+</p>
    </div>
     <div className="lineee bg-black h-[2px] ml-10"></div>
     {goalform && <div className="wrap fixed inset-0 justify-between items-center bg-black/40 pt-50 rounded"><Goalform addgoal={addgoal} setgoalform={setgoalform}/></div>}

     <div className="goal-barr ml-10">
        {goals.map((eachgoal)=>{
           return (<>
           <div className="total mb-6">
           <div className="part1 flex justify-between mt-6 mb-2">
            <p>{eachgoal.goal}</p>
            <p>{((eachgoal.currentAmount / eachgoal.goalAmount)*100).toFixed(1)}%</p>
            </div>
            <div className="pbar-out mb-2 w-full rounded h-2 bg-mist-50">
            <div className="pbar-in w-full rounded h-full bg-green" style={{width: `${((eachgoal.currentAmount / eachgoal.goalAmount)*100).toFixed(1)}%`,
                                                                            backgroundColor:"green"}}></div>                                                        
            </div>
            <div className="part2 flex justify-between">
            <p>Current Amount - {eachgoal.currentAmount}</p>
            <p>Goal Amount - {eachgoal.goalAmount}</p>
            </div>
            </div>
            </>
        )})}
        
     </div>
   </div>
    </>)
}

export default Goals;