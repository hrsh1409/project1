import React from 'react'

const Hello_world = (props) => {
    return (
        <div>
        <div>
            Hellow_world-{props.value}
        </div>
        <h1>{props.value1}</h1>
        <h2>{props.value2}</h2>
        </div>
    )
}

export default Hello_world
