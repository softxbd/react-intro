import React, { useEffect, useState } from 'react';

function ExampleOfUseEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        const timeout = setTimeout(() => {
            clearInterval(interval); // Stop the interval after 10 seconds
        }, 10000);

        // Cleanup both interval and timeout when the component unmounts
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };

    }, []);

    return (
        <div>
            <h1>I am the use effect component {count}</h1>
        </div>
    );
}

export default ExampleOfUseEffect;
