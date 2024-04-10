import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [
        { id: 1, text: 'Task 1', status: true },
        { id: 2, text: 'Task 2', status: false },
        { id: 3, text: 'Task 3', status: false },
    ],
    reducers: {
        addTask: (state, action) => {
            const task = action.payload; //сюди приходить об'єкт таски
            state.push(task)
        },
        toggleStatus(state, action) {
            const task = state.find(task => task.id === action.payload.id);
            if (task) {
                task.status = !task.status;
            }
        },
    }
})

export const { addTask, toggleStatus } = tasksSlice.actions;
export default tasksSlice.reducer