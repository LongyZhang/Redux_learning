
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todo: { value: 0, total: 0 }
}

export const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.todo.value += action.payload
            state.todo.total += 1
            console.log(state.todo.value);
        },
        decrement: (state, action) => {
            state.todo.value -= action.payload
            state.todo.total += 1
            console.log(state.todo.value);
        },
        incrementOdd: (state, action) => {
            if (state.todo.value % 2 === 1) {
                state.todo.value += action.payload
                state.todo.total += 1
                console.log(state.todo.value);
            }
        }

    }

})

export const { increment, decrement, incrementOdd } = statsSlice.actions
export default statsSlice.reducer