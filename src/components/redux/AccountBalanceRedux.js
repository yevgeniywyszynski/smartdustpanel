export const getBalance = ({accountBalance}) => accountBalance.balance
export const getEarningsWeek = ({accountBalance}) => accountBalance.earningsWeek
export const getEarningsDay = ({accountBalance}) => accountBalance.earningsDay
export const getEarningsYear = ({accountBalance}) => accountBalance.earningsYear


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