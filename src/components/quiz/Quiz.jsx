import { React, useState } from 'react'
import './quiz.css'
import { QuizData } from '../../data/QuizData'
import Result from '../result/Result'



const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(0);
    const [showResult, setShowResult] = useState(0);
    const [currentGenre, setCurrentGenre] = useState(0);
    const [genreContainer, setGenreContainer] = useState(false);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData[0].data[currentGenre].length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelected(0);
        }
        else {
            setShowResult(true);
        }

    }

    const genreSelection = () => {
        setCurrentGenre(selected - 1);
        setGenreContainer(true);
        setSelected(0);

    }

    const updateScore = () => {
        if (selected === QuizData[0].data[currentGenre][currentQuestion].answer) {
            setScore(score + 1)
        }
    }

    const resetAll = () =>{
        setShowResult(0);
        setCurrentQuestion(0);
        setSelected(0);
        setGenreContainer(false);
        setCurrentGenre(0);
        setScore(0);
    }

    return (
        <div className='container'>
            {showResult ? (
                <Result score={score} totalScore={QuizData[0].data[currentGenre].length} reset={resetAll} />
            ) : (
                <>
                    {genreContainer ? (
                        <>
                            <div className="question">
                                <span id='question-number'>
                                    {currentQuestion + 1}.
                                </span>
                                <span id='question-txt'>
                                    {QuizData[0].data[currentGenre][currentQuestion].question}
                                </span>
                            </div>
                            <div className="option-container">
                                {QuizData[0].data[currentGenre][currentQuestion].options.map((option, i) => {
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
                    ) : (
                        <>
                            <div className="question">
                                <span id='question-txt'>
                                    Choose your genre of Quiz
                                </span>
                            </div>
                            <div className="option-container">
                                {QuizData[0].options.map((option, i) => {
                                    return (
                                        <button className={`option-btn ${selected === i + 1 ? 'checked' : null}`}
                                            key={i}
                                            onClick={() => {
                                                setSelected(i + 1);
                                            }}
                                        >
                                            {option}
                                        </button>
                                    )
                                })}
                            </div>
                            <input type="button" value="Select" id='next-button' onClick={genreSelection} />
                            
                        </>
                    )}
                    
                </>
            )}
        </div>
    )
}
export default Quiz