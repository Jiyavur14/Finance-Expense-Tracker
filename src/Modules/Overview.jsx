import "../index.css";
import { PieChart, Pie, Cell, Label } from "recharts";
import Goals from "./Goals";

const piedata = [
  { name: "food", value: 40, color: "yellow" },
  { name: "health", value: 20, color: "red" },
  { name: "rent", value: 10, color: "green" },
  { name: "internet", value: 30, color: "blue" },
];


function Overview({goals,expense}) {


 const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};


const expensewithcolor = expense.map((item)=>({
            ...item,amount: Number(item.amount),color:getRandomColor()
}))


console.log(expensewithcolor)

  return (
    <>
      <div className="phase2 grid grid-cols-2">
        <div className="box1 pt-4 pl-8 pr-8 text-lg ...">
          <p className="font-serif ... text-lg ... ">Balance Overview</p>
          <div className="line w-full bg-black mt-2 h-[2px]"></div>
          <div className="balance pl-8 h-15 rounded mt-4 mb-4 border-2 border-black">
            <p className="bp font-serif ... pt-1">TOTAL BALANCE</p>
            <p className="mp1 font-bold">$5000</p>
          </div>
          <div className="spent pl-8 h-15 rounded mt-4 mb-4 border-2 border-black">
            <p className="bp font-serif ... pt-1">TOTAL SPENT</p>
            <p className="mp2 font-bold">$5000</p>
          </div>
          <div className="savings pl-8 h-15 rounded mt-3 border-2 border-black">
            <p className="bp font-serif ... pt-1">TOTAL SAVINGS</p>
            <p className="mp3 font-bold">$5000</p>
          </div>
        </div>

        <div className="box2 pt-4 pl-8 pr-8 text-lg ...">
          <p className="font-serif ... text-lg ... ">Category Breakdown</p>
          <div className="line w-full bg-black mt-2 h-[2px]"></div>
          <div className="box2items flex flex-row items-center">
            <div className="piechart ml-2 mt-5">
              <PieChart width={200} height={200}>
                <Pie
                  data={expensewithcolor}
                  dataKey="amount"
                  innerRadius={40}
                  outerRadius={70}
                >
                  {expensewithcolor.map((pieces) => {
                    return <Cell fill={pieces.color} />;
                  })}
                  <Label
                    value="Total"
                    position={"center"}
                    style={{
                      fontFamily: "ui-sans-serif",
                      fill: "black",
                    }}
                  />
                </Pie>
              </PieChart>
            </div>
            <div className="legend flex flex-col flex-1 mr-50 mt-5">
              {expensewithcolor.map((eachrow) => {
                return (
                  <div className="legend flex flex-row justify-between ">
                    <div className="leftside flex flex-row items-center gap-4 w-70">
                      <div
                        className="ele1 squarebox"
                        style={{ backgroundColor: eachrow.color }}
                      ></div>
                      <div className="ele2">{eachrow.category}</div>
                    </div>

                    <div className="ele3 rightside ">{eachrow.amount}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="box3 h-full pt-4 pl-8 pr-8 ">
          <p className="font-serif ... text-lg ... ">Budget Status</p>
          <div className="line w-full bg-black mt-2 mb-3 h-[2px]"></div>
          {piedata.map((eachbar) => {
            return (
              <div className="mb-4">
                <div className="bar-details flex justify-between">
                  <p>{eachbar.name}</p>
                  <p>{eachbar.value}</p>
                </div>
                <div className="bar w-full bg-mist-50 h-2 rounded-full mb-8">
                  <div className="barfill h-full rounded-full mb-4"
                    style={{
                      width: `${eachbar.value}%`,
                      backgroundColor: `${eachbar.color}`,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>


        <div className="box4 h-full pt-4 pl-8 pr-8">
         <p className="font-serif ... text-lg ...">Savings Goals</p>
         <div className="line w-full bg-black mt-2 mb-3 h-[2px]"></div>
          {goals.map((eachgoal)=>{
            return (
              <div className="mt-2">
            <div className="name-result flex justify-between">
            <p>{eachgoal.goal}</p>
            <p>{`${((eachgoal.currentAmount / eachgoal.goalAmount) * 100).toFixed(1)}% `}</p>
          </div>
          <div className="goal-bar mb-3">
            <div className="outerbar w-full h-2 bg-mist-50 rounded">
              <div className="innerbar w-full h-full rounded" style={{backgroundColor:"green",
                width:`${((eachgoal.currentAmount/eachgoal.goalAmount)*100).toFixed(1)}%`
              }}>
                
              </div>
            </div>
            <div className="cv-gv flex justify-between">
              <p>{eachgoal.currentAmount} Saved</p>
              <p>Goal is {eachgoal.goalAmount}</p>
            </div>
          </div>
          </div>)
          })}
          
        </div>
      </div>
    </>
  );
}

export default Overview;
