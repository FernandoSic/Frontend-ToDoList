import List from "./list";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGoal, selectGoals } from "../reducers/goalsSlice";
import { useRef } from "react";

export default function Goals() {
    const dispatch = useDispatch();
    const goals = useSelector(selectGoals);
    const inputRef = useRef();
    const addItem = (e) => {
        e.preventDefault();
        dispatch(addGoal({'name': inputRef.current.value}));
    }

    return (
        <div>
            <h1>Goals List</h1>
            <input type="text" placeholder="Add Goal" ref={inputRef} />
            <button onClick={addItem}>Add Goal</button>
            <List items={goals}/>
        </div>
    )
}