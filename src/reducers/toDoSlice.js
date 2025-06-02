import { createSlice } from "@reduxjs/toolkit";


export const toDoSlice = createSlice({
    name: 'toDos',
    initialState: {
        value: []
    },
    reducers:{
        addToDo: (state, action) => {
            state.value.push(action.payload);
            fetch('http://localhost:3001/tasks/addTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '123456'
                },
                body: JSON.stringify(action.payload)
            }).catch((error) => {
                console.log(error);
            });
        },
        initAddToDo: (state, action) => {
            console.log('initAddToDo', action.payload);
            state.value.push(action.payload);
        },
        removeToDo: (state, action) => {
            state.value = state.value.filter((toDo) => toDo.id !== action.payload);
            fetch('http://localhost:3001/tasks/removeTask/'+action.payload,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': '123456'
                },
            }).catch((error) => {
                console.log(error);
            });
        }
    }

});

export const { addToDo, initAddToDo, removeToDo } = toDoSlice.actions;
export const selectToDos = (state) => state.toDos.value;

export default toDoSlice.reducer;