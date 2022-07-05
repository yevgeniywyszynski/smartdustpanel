export const getAllDevices = ({devicesList}) => devicesList;
export const getDeviceById = ({devicesList}, id) => (devicesList.filter(e => e.id == id));

const reducerName = 'devices';
const createActionName = name => `app/${reducerName}/${name}`;

export const REMOVE_DEVICE = createActionName("REMOVE_DEVICE")
export const removeDevice = payload => ({payload, type: REMOVE_DEVICE})

export default function reducer(statePart=[], action={}) {
    switch(action.type) {
        case REMOVE_DEVICE:
            for(let i of statePart){
                if(i.id === action.payload){
                    statePart.splice(statePart.indexOf(i), 1)
                }
            }
            return statePart
    default: 
        return statePart
    }
}