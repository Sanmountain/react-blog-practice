/* eslint-disable */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  //글제목
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  //발행날짜
  const [date, setDate] = useState([
    "2월 17일 발행",
    "2월 28일 발행",
    "3월 11일 발행",
  ]);
  //좋아요갯수
  const [thumb, setThumb] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [title2, setTitle2] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "25px" }}>Sana's Blog</h4>
      </div>

      <button
        onClick={() => {
          const copy = [...title];
          copy.sort();
          setTitle(copy);
        }}
      >
        제목정렬
      </button>

      <button
        onClick={() => {
          const copy = [...title];
          copy[0] = "여자 코트 추천";
          setTitle(copy);
        }}
      >
        제목수정
      </button>
      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle2(i);
              }}
            >
              {title[i]}{" "}
              <span
                onClick={() => {
                  let copy = [...thumb];
                  copy[i] = copy[i] + 1;
                  setThumb(copy);
                }}
              >
                👍
              </span>
              {thumb[i]}
            </h4>
            <p>{date[i]}</p>
            <button
              onClick={() => {
                const copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(inputValue);
        }}
      />
      <button
        onClick={() => {
          const copy = [...title];
          copy.unshift(inputValue);
          setTitle(copy);
        }}
      >
        입력
      </button>

      {modal === true ? (
        <Modal title2={title2} setTitle={setTitle} title={title} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: "skyblue" }}>
      <h4>{props.title[props.title2]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          const copy = [...props.title];
          copy[0] = "여자 코트 추천";
          props.setTitle(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
