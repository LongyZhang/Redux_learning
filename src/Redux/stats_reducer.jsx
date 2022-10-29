
// this file is used for statsq component reducers
// The basic of reducer is function
// reducer function will have two parameters
// first : prvious state and action
// reducer only process data

const initState = 0
// preState=initState ? how does it work?
// if the preState is undefined or missed, the preState equals initStat
export default function stats_reducer(preState = initState, action) {

    console.log(preState, action);
    const { type, data } = action
    switch (type) {
        case 'increment':


            return preState + data

        case 'decrement':
            // preState.count = preState.count - data
            return preState - data
        default:
            return preState
    }

}