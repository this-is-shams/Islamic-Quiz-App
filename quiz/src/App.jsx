import {React,useState} from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Quiz from "./components/Quiz";
import Score from "./components/Score";


function App() {
  const [name,setName] = useState("");
  const [score,setScore] = useState(0);
  const Questions = [
    {
      ques: "1. Who were considered as the closest companions of the Prophet Muhammad (PBUH)?",
      options: ["Abu Bakr Al-Siddiq and Omar Bin Al-Khatab","Abdullah Ibn Masood and Abdullah Ibn Umar","Anas Ibn Malek and Muawiyah Ibn Abu Sufiyan","Khalid Ibn Al-Waleed and Salman Al-Faresy"],
      ans: "A"
    },
    {
      ques: "2. Who is the first martyr in Islam?",
      options: ["Sumayyah","Fathima","Ayesha","Khadeejah"],
      ans: "A"
    },
    {
      ques: "3. Who is the fourth of the rightly-guided Caliph after the life of Prophet Muhammad (PBUH)?",
      options: ["Uthman Bin Affan","Omar Bin Al-Khattab","Ali Bin Abu Talib","Abu Bakr Al-Siddiq"],
      ans: "C"
    },
    {
      ques: "4. Which of the companions was a paternal uncle of the Prophet, and was considered as a strong personality both in character and in physique?",
      options: ["Abu Talib","Hamzah lbn Abdul Muttalib","Abdul Muttalib","None of the above"],
      ans: "B"
    },
    {
      ques: "5. Who is called a companion of the Prophet Muhammad (PBUH)?",
      options: ["A companion is one who saw the Prophet Muhammad (PBUH) and believed in him and died as a Muslim","All Muslims are considered as companions","A companion is one who is a Muslim in a modern era","No one is a companion"],
      ans: "A"
    }
  ]
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup name={name} setName={setName} />} />
          <Route path="/quiz" element={<Quiz Ques={Questions} point={score} setPoint={setScore} />} />
          <Route path="/score" element={<Score name={name} point={score} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
