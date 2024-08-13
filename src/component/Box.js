import React from 'react'

const Box = (props) => {
    let diffResult; // 다르게 보일 결과값
    
    if(props.title === "Computer"){ // box title 이름이 Coputer일때
        if(props.result === "tie"){
            diffResult = props.result;
        }else if(props.result === "win"){
            diffResult = "lose";
        }else if(props.result === "lose"){
            diffResult = "win";
        }
    }else{  // box title 이름이 You일때 내기준으로 승패를 결정짓는 로직이라 바꾸지 않아도 됨
        diffResult = props.result;
    }
   
  return (
    <div className='box'>
        <h1>{props.title}</h1>
        {/* 결과 문자열 리터럴을 사용하여 결과 문자열과 css의 className을 동일하게 설정 */}
        <img className={`item-img ${diffResult}`} src={props.item && props.item.img}></img> 
        <h2>{diffResult}</h2>
    </div>
  )
}

export default Box