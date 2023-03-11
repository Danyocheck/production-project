import { useState } from "react"
import classes from "./Counter.module.scss"

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    return(
        <div className={classes.button}>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>increment</button>
        </div>
    )
}