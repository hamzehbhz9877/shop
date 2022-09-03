import React from 'react'
import {useState, useEffect} from 'react';

type timer = {
    sec: number,
    min: number
    hour: number
    timeOutFunc?: () => void
}

const UseTimer = ({min, sec, hour, timeOutFunc}: timer) => {
    const [minutes, setMinutes] = useState(min);
    const [seconds, setSeconds] = useState(sec);
    const [hours, setHours] = useState(hour);

    useEffect(() => {
        setMinutes(min)
        setSeconds(sec)
        setHours(hour)
    }, [min, sec, hour])

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        if (timeOutFunc)
                        timeOutFunc()
                        clearInterval(myInterval)
                    }
                    else{
                        setMinutes(minutes - 1);
                        setSeconds(59);
                        setHours(hours-1);
                    }
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });


    return {minutes, seconds,hours}
}

export default UseTimer;