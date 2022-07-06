export const getAllSerwer = ({serwerList}) => serwerList;


const reducerName = 'serwerList';
const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_SERWER = createActionName("ADD_SERWER")
export const addSerwer = payload => ({payload, type: ADD_SERWER})


export default function reducer(statePart=[], action={}) {
    switch(action.type) {
  
      case ADD_SERWER:
        return [...statePart, action.payload]

      default: 
        return statePart
    } 
  }