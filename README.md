1   What is workflow of redux?
    
    1: React Componement - > Action Creator ----dispatch--> Store 
    2: Store send (previousState and action) to reducer
    3: Reducer initialize state and  send newState to store
    4: Store send newState to react Component

2   Redux Action:
    1: Action object {tpye:'thing type',data:'thing data'}
    2: two attributes 
        1. Type: string format, unique, required
        2. Data: any format(can be int,string), optional
    3: example {type:'add_student',data:{name:'longy',age:'18'}}

3   Redux Reducer:
    1: it is used to initialise and process state
    2: when you do process, it will create new state pure function basing on previous stawte and action

4   .src folder:
        -src
            -redux
                -store.js
                -stats_reducer.js
5   .store.js
        1. import configStore from redux
        2. configStore needs to improt a reducer as service
        3. export the store object

6   .stats_reduce
        1. use spread operator to update object
        2. reducer is core of redux,it process data basing on the type
        