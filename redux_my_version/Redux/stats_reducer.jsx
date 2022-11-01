
// this file is used for statsq component reducers
// The basic of reducer is function
// reducer function will have two parameters
// first : prvious state and action
// reducer only process data


// preState=initState ? how does it work?
// if the preState is undefined or missed, the preState equals initStat
export default function stats_reducer(state = { value: 0, total: 0 }, action) {

    console.log(state, action);

    const { type, data } = action
    switch (type) {
        case 'increment':

            return { ...state, value: state.value + data, total: state.total + 1 }


        case 'decrement':
            // preState.count = preState.count - data
            return { ...state, value: state.value - data, total: state.total + 1 }
        default:
            return state
    }


}

