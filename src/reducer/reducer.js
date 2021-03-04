import {LOGIN} from '../action/action'
export default function tokenreducer  (state = '', action) {
    switch (action.type) {
        case LOGIN:
            return {
                state: action.payload
            };
        default:
            return state
    }
}