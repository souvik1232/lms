import { MENTOR } from "../action/action";
import {STUDENT} from "../action/action"


export default function tokenreducer  (state = {mentor:null,student:null}, action) {
    switch (action.type) {
        case MENTOR:
            return {
                ...state,mentor:action.payload
            };
        case STUDENT:
            return {
                ...state,student:action.payload
            };
        default:
            return state
    }
}