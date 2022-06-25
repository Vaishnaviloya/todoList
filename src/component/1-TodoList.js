import React, { useState } from 'react'
import List from './2-list'


const Todolists = () => {

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

    return (
        <>
            <div className="Main_div">
                <div className="Card">
                    <br />
                    <h1 className="Heading">To Do List</h1>
                    <br />
                    <input type="text" placeholder="Add an Item" value={state} onChange={inputEvent} />
                    <button className="butt" onClick={ButtClick}>+</button>

                    <ol>
                        {/* <li>{state}</li> */}
                        {items.map((itemval, index) => {
                            return (
                                <List
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

export default Todolists