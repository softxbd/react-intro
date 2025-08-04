import {useState} from 'react'
import ExampleOfUseEffect from "../../components/ExampleOfUseEffect.jsx";
import Pizza from "../../components/Pizza.jsx";
import Users from "../../components/users/User.jsx";

function Home() {
    const [count, setCount] = useState(0)
    return (
        <div className="container mx-auto pt-10">

            <h1>Vite + React</h1>

            <div className="card">
                <button>count is {count}</button>
            </div>

            <Pizza count={count} setCount={setCount} />

            <ExampleOfUseEffect/>

            <Users/>

        </div>
    )

}

export default Home
