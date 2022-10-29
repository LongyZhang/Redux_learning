import { configureStore } from '@reduxjs/toolkit'
// import configureStore , it can create store object in redux

import statsReducer from './stats_reducer'
// import count component reducer service


const store = configureStore({ reducer: statsReducer });
export default store
// export store

