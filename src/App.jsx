import "./index.css";
import { PieChart, Pie, Cell, Label } from "recharts";

const piedata = [
  { name: "food", value: 40, color: "yellow" },
  { name: "health", value: 20, color: "red" },
  { name: "rent", value: 10, color: "green" },
  { name: "internet", value: 30, color: "blue" },
];

const savings = [
  {name: "Dubai Vacation", currentAmount: 2400, goalAmount:10000},
  {name: "For Gift", currentAmount: 400, goalAmount:1000},
  {name: "To Buy Car", currentAmount: 270000, goalAmount:850000},
  {name: "Emergency Fund", currentAmount: 50000, goalAmount:100000}
]


function App() {
  return (
    <>
      <div className="phase1">
        <div className="mt-3 w-full overflow-hidden font-serif ... bg-black text-yellow-400 py-1 text-lg ...">
          <div className="movingText-animation whitespace-nowrap">
            <p className="">Moving data</p>
          </div>
        </div>
        <div className="navbar flex flex-row justify-between items-center font-serif ... font-semibold ... text-xl ...">
          <div className="logo p-3 uppercase">Finance Ledger</div>
          <div className="date p-3 uppercase">Thursday</div>
        </div>

        <div className="navbar flex justify-between bg-black text-yellow-400 font-serif ... p-1 text-lg ...">
          <div className="navitems overview pl-3 flex-1 text-center">
            Overview
          </div>
          <div className="navitems expenses flex-1 text-center">Expense</div>
          <div className="navitems goals pr-3 flex-1 text-center">Goals</div>
        </div>
      </div>
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
                  data={piedata}
                  dataKey={"value"}
                  innerRadius={40}
                  outerRadius={70}
                >
                  {piedata.map((pieces) => {
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
              {piedata.map((eachrow) => {
                return (
                  <div className="legend flex flex-row justify-between ">
                    <div className="leftside flex flex-row items-center gap-4">
                      <div
                        className="ele1 squarebox"
                        style={{ backgroundColor: eachrow.color }}
                      ></div>
                      <div className="ele2">{eachrow.name}</div>
                    </div>

                    <div className="ele3 rightside">{eachrow.value}</div>
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
          {savings.map((eachgoal)=>{
            return (
              <div className="mt-2">
            <div className="name-result flex justify-between">
            <p>{eachgoal.name}</p>
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

export default App;
