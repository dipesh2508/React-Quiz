import { React, useState } from 'react'
import './quiz.css'
import { QuizData } from '../../data/QuizData'
import Result from '../result/Result'



const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(0);
    const [showResult, setShowResult] = useState(0);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelected(0);
        }
        else{
            setShowResult(true);
        }

    }

    const updateScore = () => {
        if (selected === QuizData[currentQuestion].answer) {
            setScore(score + 1)
        }
    }

    return (

        <div className='container'>
        {showResult ? ( 
            <Result score={score} totalScore={QuizData.length}/>
            ):(
            <>
            <div className="question">
                <span id='question-number'>
                    {currentQuestion + 1}.
                </span>
                <span id='question-txt'>
                    {QuizData[currentQuestion].question}
                </span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option, i) => {
                    return (
                        <button className={`option-btn ${selected === i + 1 ? 'checked' : null}`}
                            key={i}
                            onClick={() => setSelected(i + 1)}
                        >
                            {option}
                        </button>
                    )
                })}
                </div>
                <input type="button" value="Next" id='next-button' onClick={changeQuestion} />
                </>
            )} 
        </div>

    )
}

export default Quiz