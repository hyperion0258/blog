import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState([true, false]);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={() => {
        let copy = [...글제목];
        let result = copy.sort();
        글제목변경(result);
      }}>가나다순정렬</button>
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      <input onChange={(e) => {입력값변경(e.target.value); console.log(입력값)}}/>
      <button onClick={(e) => {
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }}>글발행</button>

      {
        modal == true ? <Modal title={title} 글제목={글제목}/> : null
      }
      {
        글제목.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{setModal(true); setTitle(i)}}>{글제목[i]}
                <span onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                }}>👍</span>{따봉[i]}
                </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=> {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy)
              }}>삭제</button>
            </div>
          )
        })
      }
      <Modal2></Modal2>
    </div>
  );
}



function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy = [...props.글제목]
        copy[0] = "여자코트 추천"
        props.글제목변경(copy)
      }}>글수정</button>
    </div>
  )
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render() {
    return (
      <div>안녕{this.state.age}
        <button onClick={()=> {
          this.setState({age : 21})
        }}>버튼</button>
      </div>
    )
  }
}

export default App;
