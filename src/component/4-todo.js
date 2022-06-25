import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List2 from "./4-list";

const Todo = () => {

    const [state, setState] = useState("")
    const [items, setItems] = useState([])

    const inputEvent = (event) => {
        setState(event.target.value)
    }
    const ButtClick = () => {
        setItems((oldItems) => {
            return [...oldItems, state]
        })
        setState("")
    }

    const DeleteItems = (id) => {
        console.log('Deleted')
        setItems((oldItems) => {
            return oldItems.filter((arrEle, index)=> {
                return index !== id
            })
        })
    }


    return(
        <>
            <div className="Main_div">
                <div className="Card">
                    <br/>
                    <h2>TODO List</h2>
                    <input type = "text" placeholder = "Add an Item" value={state} onChange={inputEvent} />
                    <Button className="butt" onClick={ButtClick}><AddIcon /></Button>
                    <ol>
                        {/* <li>{state}</li> */}
                        {items.map((itemval, index) => {
                            return (
                                <List2
                                    key={index}
                                    id={index}
                                    text={itemval}
                                    onSelect={DeleteItems}
                                />
                            )
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Todo