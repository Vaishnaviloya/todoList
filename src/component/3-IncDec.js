import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
// import Button from '@material-ui/core/Button'
import Button from '@material-ui/core/Button';
import Clock from 'react-digital-clock';


const Count = () => {

    const [count, setCount] = useState(0)

    const IncMe = () => {
        setCount(count + 1)
    }

    const DecMe = () => {
        if(count > 0){
            setCount(count - 1)
        }else{
            alert('Limit Reached')
        }
        
    }

    return(
        <>
            <div className = "Main_div">
                <div className = "card1">
                    <h4 className = "head">{count}</h4>
                    <div className= "butt3">
                        <Button className = "ab" onClick = {IncMe}><AddIcon /></Button>
                        <Button className = "btn_red" onClick = {DecMe}><DeleteIcon /></Button>
                        <Clock />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Count