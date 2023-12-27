import React from 'react'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";


const CircularRating = ({rating , transparent}) => {
  return (
    <div
    style={{
        backgroundColor: transparent?'transparent':'white',
        borderRadius: '50%',
        padding: '2px',
        fontSize:'32px'}}
    className={`font-bold center ${transparent?"w-[76px] h-[76px]": "w-11 h-11"}`}>
        <CircularProgressbar 
        className=''
        value={rating}
        text={rating}
        maxValue={10}
        styles={buildStyles({
            pathColor:
                rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                textSize: '32px',
                textColor:transparent?'white':'black',
        })}
        />
    </div>
  )
}

export default CircularRating