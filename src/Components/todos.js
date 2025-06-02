import List from "./list";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addToDo, selectToDos} from "../reducers/toDoSlice";
import { useRef } from "react";

export default function ToDos() {
    const dispatch = useDispatch();
    const toDos = useSelector(selectToDos);
    const inputRef = useRef();
    const addItem = (e) => {
        e.preventDefault();
        dispatch(addToDo({'name': inputRef.current.value}));
    }

    return (
        <div>
            <h1>To-Do List</h1>
            <input type="text" placeholder="Add To-Do" ref={inputRef} />
            <button onClick={addItem}>Add ToDo</button>
            <List items={toDos}/>
        </div>
    );
};