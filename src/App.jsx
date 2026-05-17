import Overview from "./Modules/Overview";
import Expense from "./Modules/Expense";
import Goals from "./Modules/Goals";
import Goalform from "./Modules/Goalform";
import Expenseform from "./Modules/Expenseform";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [expense, setexpense] = useState(() => {
    const savedexp = localStorage.getItem("exp-data");
    return savedexp ? JSON.parse(savedexp) : [];
  });

  useEffect(() => {
    localStorage.setItem("exp-data", JSON.stringify(expense));
  }, [expense]);

  const [goals, setgoals] = useState(() => {
    const saveddata = localStorage.getItem("form-data");
    return saveddata ? JSON.parse(saveddata) : [];
  });

  useEffect(() => {
    localStorage.setItem("form-data", JSON.stringify(goals));
  }, [goals]);

  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  console.log(goals);

  return (
    <>
      <div className="phase1">
        <div className="w-full overflow-hidden font-serif ... bg-black text-yellow-400 py-1 text-lg ...">
          <div className="movingText-animation whitespace-nowrap flex gap-50">
            
              {goals.map((item)=>{
                return <p>{item.currentAmount}rs saved for {item.goal}</p>
              })}
          
          </div>
        </div>
        <div className="navbar flex flex-row justify-between items-center font-serif ... font-semibold ... text-xl ...">
          <div className="logo p-3 uppercase">Finance Ledger</div>
          <div className="date p-3 uppercase">
            {formattedDate}
          </div>
        </div>

        <div className="navbar flex justify-between bg-black text-yellow-400 font-serif ... p-1 text-lg ...">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "navitems active-nav flex-1 text-center"
                : "navitems flex-1 text-center"
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/expense"
            className={({ isActive }) =>
              isActive
                ? "navitems active-nav flex-1 text-center"
                : "navitems flex-1 text-center"
            }
          >
            Expense
          </NavLink>
          <NavLink
            to="/Goals"
            className={({ isActive }) =>
              isActive
                ? "navitems active-nav flex-1 text-center"
                : "navitems flex-1 text-center"
            }
          >
            Goals
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={<Overview goals={goals} expense={expense} />}
        />
        <Route
          path="/expense"
          element={<Expense expense={expense} setexpense={setexpense} />}
        />
        <Route
          path="/goals"
          element={<Goals goals={goals} setgoals={setgoals} />}
        />
        <Route path="/goal-form" element={<Goalform />} />
        <Route path="/expense-form" element={<Expenseform />}></Route>
      </Routes>
    </>
  );
}

export default App;
