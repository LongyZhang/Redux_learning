
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    person: [],
}

export const personSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        addPerson: (state, action) => {
            state.push(action.payload)
        },
    }

})

export const { addPerson } = personSlice.actions
export default personSlice.reducer