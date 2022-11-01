


export default function person_reducer(state = { name: '', age: 0 }, action) {

    console.log(state, action);

    const { type, data } = action
    switch (type) {
        case 'addPerson':

            return state
        default:
            return state
    }


}

