import React,{ useState } from "react"
import { useDispatch } from "react-redux"
import {addTodo} from "../store/action/todoActions"
import "./Input.css"

const Input=()=>{
    const [text,setText]=useState("")
    const dispatch=useDispatch();
    return(
        <div className="input-wrapper">
            <input
            onChange={(e)=>setText(e.target.value)}
            value={text}
            onKeyPress={(e)=>{
                if(e.key==="Enter" && text.trim()!==""){
                    dispatch(addTodo({id:new Date().getTime(),text,complete:false}))
                    setText("")
                }
            }}
            autoFocus
            placeholder="Create New Todo"
            />
        </div>
    )
}

export default Input