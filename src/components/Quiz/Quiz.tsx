import React, { useState, useRef } from 'react';
import './Quiz.css'
import { data } from "../../assets/data";

const quiz = () => {

    let [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const option1 = useRef<HTMLButtonElement | null>(null);
    const option2 = useRef<HTMLButtonElement | null>(null);
    const option3 = useRef<HTMLButtonElement | null>(null);
    const option4 = useRef<HTMLButtonElement | null>(null);

    const option_array = [option1, option2, option3, option4];

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans===ans) {
            e.target.classList.add("correct");
            setLock(true);
            setScore(prev=>prev+1)
            }
            else{
            e.target.classList.add("wrong");
            setLock(true);
            option_array[question.ans-1].current.classList.add("correct")
            }
        }
        
    }

    const next = () => {
        if (lock===true) {
            if (index === data.length -1){
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_array.map((option) =>{
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    return(
        <div>
            <h1>Cosmic' Code</h1>
            <hr/>{result?<></>:<>
            <h2>{index+1}. {question.question}</h2>
            <ul>
                <li><button type="button" ref={option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</button></li>
                <li><button type="button" ref={option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</button></li>
                <li><button type="button" ref={option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</button></li>
                <li><button type="button" ref={option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</button></li>
            </ul>
            <button type="button" onClick={next}>next</button>
            <p>Question {index+1} sur {data.length}</p>
            </>}
            {result?<>
            <h2>Votre score {score} sur {data.length}</h2>
            <button type="button" onClick={reset}>Recommencer</button>
            </>:<></>}
            
        </div>
    )
}

export default quiz