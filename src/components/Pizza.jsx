import React from 'react';

function Pizza({count, setCount}) {
    return (
        <div>
            <h1>I am Pizza component</h1>
            <div className={"flex items-center justify-center gap-4"}>
                <div className="card custom_card">
                    <button onClick={() => setCount((count) => count + 1)}>Increase</button>
                </div>
                <div className="card custom_card">
                    <button>count is {count}</button>
                </div>
                <div className="card custom_card">
                    <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
                </div>

            </div>
        </div>
    );
}

export default Pizza;