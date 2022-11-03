
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    person: [],
}

export const personSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        addPerson: (state, action) => {
            // this way is better than push, it is better to use spread operator
            return { person: [action.payload, ...state.person] }
            // state.person.push(action.payload)
            // return state
        },
    }

})

export const { addPerson } = personSlice.actions
export default personSlice.reducer