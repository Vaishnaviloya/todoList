import React from "react";

const List = (props) => {
    return (
        <>
            <button className="butts" onClick={() => {
                props.onSelect(props.id)
            }}>x</button>
            <li>{props.text}</li>
        </>
    )
}

export default List