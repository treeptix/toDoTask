import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasks/tasks.slice'; // Import your reducer

export default configureStore({
  reducer: tasksReducer,
}); 