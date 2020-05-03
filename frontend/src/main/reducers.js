import {combineReducers} from 'redux'

const rootReducer = combineReducers ({
    todo: () => ({
        description: 'Read Kindle',
        list: [{
            _id: 1,
            description: 'task 1',
            done: true
        }, {
            _id: 2,
            description: 'task 2',
            done: false
        }, {
            _id: 3,
            description: 'task 3',
            done: false
        }]
    })
})

export default rootReducer