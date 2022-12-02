import React, { useState } from 'react'

export default function Counter() {
    const UpCounter = () => {
        setNum(num => num + 1);
    }

    const DownCounter = () => {
        setNum(num => num - 1);
    }

    const [num, setNum] = useState(10);
    return (
        <>
            <div>
                <div className="form-group mb-3 mt-5 text-center">
                    <label htmlFor="exampleFormControlTextarea1" value={num}><h3>{num}</h3></label>
                </div>

                <div className="btns text-center flex-wrap">
                    <button type="button" className="btn btn-primary mx-2 my-2 px-3" onClick={DownCounter}>−</button>
                    <button type="button" className="btn btn-primary mx-2 my-2 px-3" onClick={UpCounter}>+</button>
                </div>
            </div>
        </>
    )
}
