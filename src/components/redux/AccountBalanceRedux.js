export const getBalance = ({accountBalance}) => accountBalance.balance
export const getDay = ({accountBalance}) => accountBalance.day
export const getWeek = ({accountBalance}) => accountBalance.week
export const getMonth = ({accountBalance}) => accountBalance.month
export const getYear = ({accountBalance}) => accountBalance.year
export const getEarningType = ({accountBalance}) => accountBalance.earningType
export const getTypeCurrency = ({transactionOptions}) => transactionOptions.typeCurrency
export const getName = ({accountBalance})=> accountBalance.name
export const getSurname = ({accountBalance}) => accountBalance.surname
export const getAccountBankNumber = ({accountBalance}) => accountBalance.accountBankNumber


const reducerName = 'selectEarnings';
const createActionName = name => `app/${reducerName}/${name}`;

export const CHANGE_EARNING = createActionName("CHANGE_EARNING")
export const changeEarning = payload => ({payload, type: CHANGE_EARNING})

export const CHANGE_BALANCE = createActionName("CHANGE_BALANCE");
export const changeBalance = payload => ({payload, type: CHANGE_BALANCE})

export default function reducer(statePart=[], action={}) {
    switch(action.type) {
        case CHANGE_EARNING:
            return {...statePart, earningType: action.payload}
        case CHANGE_BALANCE:
            return {...statePart, balance: action.payload}
        default: 
            return statePart
    }
}