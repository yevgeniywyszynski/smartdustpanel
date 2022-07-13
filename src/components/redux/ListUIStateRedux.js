export const getIsOpen = ({listUIState}) => listUIState.isOpen
export const getSerwerListOpen = ({listUIState}) => listUIState.serwerListOpen
export const getDevicesListOpen = ({listUIState}) => listUIState.devicesListOpen

const reducerName = 'actionUI';
const createActionName = name => `app/${reducerName}/${name}`;

export const CHANGE_ISOPEN = createActionName("CHANGE_ISOPEN")
export const changeIsOpen = payload => ({payload, type: CHANGE_ISOPEN})

export const SHOW_DEVICES_LIST = createActionName("SHOW_DEVICES_LIST")
export const showDevicesList = payload => ({payload, type: SHOW_DEVICES_LIST})

export const SHOW_MOBILE_SETTINGS = createActionName("SHOW_MOBILE_SETTINGS ")
export const showMobileSettings = payload => ({payload, type: SHOW_MOBILE_SETTINGS})

export default function reducer(statePart=[], action = {}) {
    switch(action.type){
        case CHANGE_ISOPEN:
            return {...statePart, isOpen: action.payload}
        case SHOW_DEVICES_LIST:
            return {...statePart, serwerListOpen: action.payload}
        case SHOW_MOBILE_SETTINGS:
            return {...statePart, devicesListOpen: action.payload}
        default:
            return statePart
    }
}
