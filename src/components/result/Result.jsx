import React from 'react'
import './result.css'

const Result = (props) => {
  return (

    <div class="progress-section" data-aos="fade-left" data-aos-once="true">
      <div class="task-progress">
        <p>Your Score
          <span>{props.score}</span>
        </p>
        <progress className='progress' max={props.totalScore} value={props.score}/>
      </div>
    </div>

  )
}

export default Result