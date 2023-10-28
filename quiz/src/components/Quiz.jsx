import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz(props) {
  const [OptionA, setOptionA] = useState(false);
  const [OptionB, setOptionB] = useState(false);
  const [OptionC, setOptionC] = useState(false);
  const [OptionD, setOptionD] = useState(false);
  const [Option, setOption] = useState("");
  const [Correct, setCorrect] = useState("");
  const [indx, setIndx] = useState(0);
  const quiz = props.Ques;
  const navigate = useNavigate();

  function selectedOption(select) {
    if (Option !== "") {
      return;
    }
    if (select === "A") {
      setOptionA(true);
    } else if (select === "B") {
      setOptionB(true);
    } else if (select === "C") {
      setOptionC(true);
    } else if (select === "D") {
      setOptionD(true);
    }
    setOption(select);
    setCorrect(quiz[indx].ans);
    if (select === quiz[indx].ans) {
      props.setPoint(props.point + 1);
    }
  }

  function callAgain() {
    setOption("");
    setCorrect("");
  }

  return (
    <div className="flex justify-center items-center lg:mt-20 lg:mb-20">
      <div className="border-4 shadow-md p-5 text-center">
        <div className="lg:max-w-[1200px]">
          <p className="lg:text-3xl break-words">{quiz[indx].ques}</p>
        </div>
        <div className="lg:flex p-20 justify-between w-full lg:space-x-10 space-y-10 lg:space-y-0 items-center">
          <div className="space-y-10 lg:w-1/2">
            <div
              onClick={() => selectedOption("A")}
              className={`border-2 lg:text-lg shadow-md p-4 break-words sm:w-100  ${Correct === "A" ? "bg-green-200" : ""} ${(Option === "A" && Correct!=Option) ? "bg-yellow-200" : ""} `}
            >
              <p>
                <span className="font-bold"></span>&nbsp;&nbsp;&nbsp;
                {quiz[indx].options[0]}
              </p>
            </div>
            <div
              onClick={() => selectedOption("B")}
              className={`border-2 lg:text-lg shadow-md p-4 break-words sm:w-100 ${
                Option === "B" ? "bg-yellow-200" : ""
              } ${Correct === "B" ? "bg-green-200" : ""}`}
            >
              <p>
                <span className="font-bold"></span>&nbsp;&nbsp;&nbsp;
                {quiz[indx].options[1]}
              </p>
            </div>
          </div>
          <div className="space-y-10 lg:w-1/2">
            <div
              onClick={() => selectedOption("C")}
              className={`border-2 lg:text-lg shadow-md p-4 break-words sm:w-100 ${
                Option === "C" ? "bg-yellow-200" : ""
              } ${Correct === "C" ? "bg-green-200" : ""}`}
            >
              <p>
                <span className="font-bold"></span>&nbsp;&nbsp;&nbsp;
                {quiz[indx].options[2]}
              </p>
            </div>
            <div
              onClick={() => selectedOption("D")}
              className={`border-2 lg:text-lg shadow-md p-4 break-words sm:w-100 ${
                Option === "D" ? "bg-yellow-200" : ""
              } ${Correct === "D" ? "bg-green-200" : ""}`}
            >
              <p>
                <span className="font-bold"></span>&nbsp;&nbsp;&nbsp;
                {quiz[indx].options[3]}
              </p>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              if (indx === quiz.length - 1) {
                navigate("/score");
              }
              setIndx(indx + 1);
              callAgain();
            }}
            className="shadow-md text-xl font-bold py-2 px-4 border-2 bg-blue-600 text-white rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
