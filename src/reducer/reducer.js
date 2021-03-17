import { MENTOR } from "../action/action";

export default function tokenreducer  (state = '', action) {
    switch (action.type) {
        case MENTOR:
            return {
                state: action.payload
            };
        default:
            return state
    }
}