export const getSubmitted = ({isSubmitted}) => isSubmitted;

const reducerName = 'actionSubmitted';
const createActionName = name => `app/${reducerName}/${name}`;

export const CHANGE_SUBMITTED = createActionName("CHANGE_SUBMITTED")
export const changeSubmitted = payload => ({payload, type: CHANGE_SUBMITTED})

export default function reducer(statePart=[], action = {}) {
    switch(action.type){
        case CHANGE_SUBMITTED:
            return action.payload
        default:
            return statePart
    }
}
