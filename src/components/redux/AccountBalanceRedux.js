export const getBalance = ({accountBalance}) => accountBalance.balance
export const getEarningsWeek = ({accountBalance}) => accountBalance.earningsWeek
export const getEarningsDay = ({accountBalance}) => accountBalance.earningsDay
export const getEarningsYear = ({accountBalance}) => accountBalance.earningsYear

export default function reducer(statePart=[], action={}) {
    return statePart
}