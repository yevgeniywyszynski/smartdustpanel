export const getAllDevices = ({devicesList}) => devicesList;
export const getDeviceById = ({devicesList}, id) => (devicesList.filter(e => e.id == id));

const reducerName = 'devices';
const createActionName = name => `app/${reducerName}/${name}`;

export const REMOVE_DEVICE = createActionName("REMOVE_DEVICE")
export const removeDevice = payload => ({payload, type: REMOVE_DEVICE})

export const ADD_DEVICE = createActionName("ADD_DEVICE")
export const addDevice = payload => ({payload, type: ADD_DEVICE})

export default function reducer(statePart=[], action={}) {
    switch(action.type) {
        case REMOVE_DEVICE:
            return statePart.filter(el => el.id !== action.payload);
        case ADD_DEVICE:
            return [...statePart, action.payload]
    default: 
        return statePart
    }
}
