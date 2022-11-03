import { configureStore } from '@reduxjs/toolkit'
// import configureStore , it can create store object in redux

import statsReducer from '../feature/stats/statsSlice'
import personReducer from '../feature/stats/personSlice';

// import count component reducer service


const store = configureStore({
    reducer: {
        stats: statsReducer,
        person: personReducer,
    },

});
export default store
// export store

