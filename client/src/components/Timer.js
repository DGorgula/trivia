import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { tick } from "../store/actions/timerActions";
import { setAnswer, setTimeUp } from "../store/actions/questionActions"

// const timeUpAnswer =mashu

export default function Timer({ timeUp, goToNextQuestion, nextQuestion }) {
    const dispatch = useDispatch();
    const timer = useSelector((store) => store.timer);
    useEffect(() => {
        const interval = setInterval(() => dispatch(tick()), 500);
        return () => clearInterval(interval);
    }, []);

    if (timer.totalTime - timer.timePassed === 0) {
        dispatch(setTimeUp());
        setTimeout(
            () => { timeUp(); goToNextQuestion(nextQuestion.current) }, 5000);
    }

    return (
        <>
            <div id="timer">
                {timer.totalTime - timer.timePassed > 0
                    ? timer.totalTime - timer.timePassed
                    : "Time Up!"}
            </div>
        </>
    );
}