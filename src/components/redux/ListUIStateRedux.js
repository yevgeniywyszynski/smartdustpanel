export const getIsOpen = ({listUIState}) => listUIState.isOpen

const reducerName = 'actionUI';
const createActionName = name => `app/${reducerName}/${name}`;

export const CHANGE_ISOPEN = createActionName("CHANGE_ISOPEN")
export const changeIsOpen = payload => ({payload, type: CHANGE_ISOPEN})

export default function reducer(statePart=[], action = {}) {
    switch(action.type){
        case CHANGE_ISOPEN:
            return {...statePart, isOpen: action.payload}
        default:
            return statePart
    }
}