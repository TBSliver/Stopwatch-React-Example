import {useEffect, useState} from "react";

function App() {
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);

    // time elapsed not including run time
    const [elapsedTime, setElapsedTime] = useState(0);
    // time between start/stop pressed
    const [runTime, setRunTime] = useState(0);
    // time to display
    const [displayTime, setDisplayTime] = useState(0);

    const handleStartStop = () => {
        if (startTime > 0) {
            // timer is running
            if (endTime > 0) {
                // timer has been restarted without reset
                // add up how much has elapsed then start running again
                setElapsedTime(prev => prev + runTime);
                setRunTime(0);
                setStartTime(new Date().getTime());
                setEndTime(0);
            } else {
                // timer has been stopped
                setEndTime(new Date().getTime());
            }
        } else {
            // timer has not been started at all, start it
            setStartTime(new Date().getTime());
        }
    }

    const handleReset = () => {
        setStartTime(0);
        setEndTime(0);
        setElapsedTime(0);
        setRunTime(0);
    }

    useEffect(() => {
        const displayTimer = setInterval(() => {
            if (endTime > 0) {
                // timer has been started then stopped
                setRunTime(endTime - startTime);
            } else if (startTime > 0) {
                // timer has been started
                const now = new Date().getTime();
                setRunTime(now - startTime);
            }
            setDisplayTime(runTime + elapsedTime);
            // 100ms is display update time, actual stopwatch is as accurate as your browser lets you
        }, 100);
        return () => clearInterval(displayTimer);
    }, [startTime, endTime, runTime, elapsedTime]);

    return (
        <>
            <h1 id={"stopwatch-elapsed"}>{displayTime}</h1>
            <button id={"stopwatch-start-stop"}
                    onClick={handleStartStop}>{startTime > 0 && endTime === 0 ? "Stop" : "Start"}</button>
            <button id={"stopwatch-reset"} onClick={handleReset}>Reset</button>
            {/*<div>Start Time: {startTime}</div>*/}
            {/*<div>End Time: {endTime}</div>*/}
            {/*<div>Elapsed Time: {elapsedTime}</div>*/}
            {/*<div>Run Time: {runTime}</div>*/}
        </>
    );
}

export default App;
