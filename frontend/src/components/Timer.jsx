import React from 'react';
import { useState, useEffect } from 'react';

function Timer() {
    const [dateRet, setDateRet] = useState(2022);

    useEffect(() => {
        const date = setInterval(() => {
            setDateRet(dateRet - 1);
        }, 4);

        return () => {
            clearInterval(date);
        };
    }, [dateRet]);

    return (
        <div>{dateRet}</div>
    )
}

export default Timer;