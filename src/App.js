import { useState } from 'react';
import './App.css';
import Box from "./component/Box"

// 1.박스 2개 (타이틀, 사진, 결과)

const choice = {
  rock:{
    name : "Rock",
    img : "https://i.namu.wiki/i/rbOAzxvUuSSNv1VuxDAZn6t1e5Q-uf_MqqeyuQKRNLKpC0sQaKaxyLzhqIlRyEdOUpce9eMOzDxuN7MwWVcBzQ.webp"
  },
  scissors:{
    name : "Scissors",
    img : "https://img.khan.co.kr/news/2023/06/21/2023062201000750500069571.jpg"
  },
  paper:{
    name : "Paper",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnzK1Llpe2sFtzQ1sILA0BmdC4WYTlbf3ooQ&s"
  }
};
function App() {

  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult]= useState("")

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    let compuerChoice = randomChoice()
    setComputerSelect(compuerChoice);
    setResult(judgement(choice[userChoice], compuerChoice)) ;
  }

   const judgement = (user, computer) => {
    console.log("user ===>", user, "computer ===>", computer);

    // user == computer tie
    // user == rock, computer == scissors user win
    // user == rock, computer == paper user lose
    // user == sissors, computer == paper user win
    // user == sissors, computer == rock user lose
    // user == paper, computer rock user win
    // user == paper, computer sissors user lose
    if(user.name === computer.name){
      return "tie"
    }else if(user.name === "Rock") return computer.name==="Scissors" ?"win":"lose"
     else if(user.name === "Scissors") return computer.name==="Paper"?"win":"lose"
     else if(user.name === "Paper") return computer.name==="Rock"?"win":"lose"
   };

   const randomChoice=()=>{
    let itemArray = Object.keys(choice);
    console.log("itemArray ==>", itemArray) // 객체의 키값만 뽑아서 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length) 
    let final = itemArray[randomItem];
    console.log("final ==>", final);
    return choice[final];
   }
  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}></Box>
        <Box title="Computer" item={computerSelect} result={result}></Box>
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() =>play("rock")}>바위</button>
        <button onClick={() =>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
