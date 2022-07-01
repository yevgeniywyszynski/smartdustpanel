export const getBalance = ({accountBalance}) => accountBalance.balance
export const getDay = ({accountBalance}) => accountBalance.day
export const getWeek = ({accountBalance}) => accountBalance.week
export const getMonth = ({accountBalance}) => accountBalance.month
export const getYear = ({accountBalance}) => accountBalance.year
export const getEarningType = ({accountBalance}) => accountBalance.earningType


const reducerName = 'selectEarnings';
const createActionName = name => `app/${reducerName}/${name}`;

export const CHANGE_EARNING = createActionName("CHANGE_EARNING")
export const changeEarning = payload => ({payload, type: CHANGE_EARNING})

export default function reducer(statePart=[], action={}) {
    switch(action.type) {
        case CHANGE_EARNING:
            return {...statePart, earningType: action.payload}
        default: 
            return statePart
    }
}