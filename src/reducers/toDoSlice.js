import { createSlice } from "@reduxjs/toolkit";


export const toDoSlice = createSlice({
    name: 'toDos',
    initialState: {
        value: [{
        'name': 'realizar actividad 1',
        'description': 'realizar actividad 1',
        'dueDate': '2023-10-01',

    }]
    },
    reducers:{
        addToDo:(state, action) => {
            state.value.push(action.payload);
        },
        initAddToDo: (state, action) => {
            console.log('initAddToDo', action.payload);
            state.value.push(action.payload);
        },
        removeToDo: (state, action) => {
            console.log('removeToDo', action.payload);
            state.value = state.value.filter((toDo) => toDo.name !== action.payload);
        }
    }

});

export const { addToDo, initAddToDo, removeToDo } = toDoSlice.actions;
export const selectToDos = (state) => state.toDos.value;

export default toDoSlice.reducer;