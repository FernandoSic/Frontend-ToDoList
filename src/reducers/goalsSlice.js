import { createSlice } from "@reduxjs/toolkit";


export const goalSlice = createSlice({
    name: 'goals',
    initialState: {
        value: []
    },
    reducers:{
        addGoal:(state, action) => {
            state.value.push(action.payload);
            fetch('http://localhost:3001/goals/addGoal', {
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
        initAddGoal: (state, action) => {
            console.log('initAddGoal', action.payload);
            state.value.push(action.payload);
        },
        removeGoal: (state, action) => {

            state.value = state.value.filter((goal) => goal.id !== action.payload);
            fetch('http://localhost:3001/goals/removeGoal/'+action.payload,{
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

export const { addGoal, initAddGoal, removeGoal } = goalSlice.actions;
export const selectGoals = (state) => state.goals.value;

export default goalSlice.reducer;