import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const List2 = (props) => {

    const [line, setLine] = useState(false)

    const cutIt = () => {
        setLine(true)
    }

    return (
        <>
            <span  onClick={cutIt}><DeleteIcon /></span>
            <li style = {{ textDecoration : line ? "line-through" : "none"}}>{props.text}</li>
        </>
    )
}

export default List2