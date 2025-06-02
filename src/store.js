import { configureStore } from "@reduxjs/toolkit"; 
import toDoReducer from "./reducers/toDoSlice";
import goalReducer from "./reducers/goalsSlice";
import optionReducer from "./reducers/optionSlice";

export default configureStore({
    reducer: {
        toDos: toDoReducer,
        goals: goalReducer,
        option: optionReducer
    }
});

