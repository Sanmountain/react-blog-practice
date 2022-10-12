/* eslint-disable */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Signup from "./Pages/Signup";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, titlechange] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [따봉, bestchange] = useState([0, 0, 0]);

  //let num = [1, 2];
  //let [a, c] = [1, 2];

  let [modal, setModal] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="signup" element={<Signup />} />
      </Routes>
      <div className="App">
        <div className="black-nav">
          <h4 style={{ color: "white", fontSize: "16px" }}>ReactBlog</h4>
        </div>

        <button
          onClick={() => {
            let copy2 = [...글제목];
            copy2.sort();
            titlechange(copy2);
          }}
        >
          가나다순정렬
        </button>

        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = "여자코트 추천";
            titlechange(copy);
          }}
        >
          제목수정
        </button>

        {/* <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              bestchange(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}

        {글제목.map(function (a, i) {
          return (
            <div className="list">
              <h4
                onClick={() => {
                  setModal(!modal);
                }}
              >
                {글제목[i]}
                <span
                  onClick={() => {
                    let copy = [...따봉];
                    copy[i] = copy[i] + 1;
                    bestchange(copy);
                  }}
                >
                  👍
                </span>
                {따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
            </div>
          );
        })}
        {modal == true ? (
          <Modal titlechange={titlechange} 글제목={글제목} />
        ) : null}
      </div>
    </Router>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
