import React from 'react'
import './app.scss'

function App() {

  return (
    <div className="app_container">
      <div className='left_box'>
        <div className='left_div'>
          <span> your result</span>
          <div> 76 <span>of 100</span> </div>
          <span>great</span>
          <span>your performance exceed 65% of the people conducting the test here!</span>
        </div>
      </div>
      <div className='right_box'>
        <div>
          <p>summary</p>
          <div className='score_results red_box'>
            <div>
              <span><img src='/icon-reaction.svg' alt='reaction'/></span>
              <p>reaction</p>
            </div>
            <p><span>60</span> / <span> 100</span></p>
          </div>
          <div className='score_results yellow_box'>
            <div>
              <span><img src='/icon-memory.svg' alt='reaction'/></span>
              <p>memory</p>
            </div>
            <p><span>92</span> / <span> 100</span></p>
          </div>
          <div className='score_results green_box'>
            <div>
              <span><img src='/icon-verbal.svg' alt='reaction'/></span>
              <p>verbal</p>
            </div>
            <p><span>61</span> / <span> 100</span></p>
          </div>
          <div className='score_results blue_box'>
            <div>
              <span><img src='/icon-visual.svg' alt='reaction'/></span>
              <p>visual</p>
            </div>
            <p><span>73</span> / <span> 100</span></p>
          </div>
          <button> continue</button>
        </div>
      </div>
    </div>
  )
}

export default App
