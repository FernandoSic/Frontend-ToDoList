import { createSlice } from "@reduxjs/toolkit";


export const goalSlice = createSlice({
    name: 'goals',
    initialState: {
        value: [{
        'name': 'realizar tareas de desarrollo web',    
        'description': 'realizar tareas de desarrollo web',
        'dueDate': '2023-10-01',

    }]
    },
    reducers:{
        addGoal:(state, action) => {
            state.value.push(action.payload);
        },
        initAddGoal: (state, action) => {
            console.log('initAddGoal', action.payload);
            state.value.push(action.payload);
        },
        removeGoal: (state, action) => {
                    console.log('removeGoal', action.payload);
                    state.value = state.value.filter((goal) => goal.name !== action.payload);
                }
    }

});

export const { addGoal, initAddGoal, removeGoal } = goalSlice.actions;
export const selectGoals = (state) => state.goals.value;

export default goalSlice.reducer;