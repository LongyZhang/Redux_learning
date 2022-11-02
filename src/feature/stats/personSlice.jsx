
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todo: { value: 0, total: 0 }
}

export const personSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.todo.value += action.payload
            state.todo.total += 1
            console.log(state.todo.value);
        },
    }

})

export const { increment } = personSlice.actions
export default personSlice.reducer