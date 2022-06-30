export const getAllDevices = ({devicesList}) => devicesList;
export const getDeviceById = ({devicesList}, id) => (devicesList.filter(e => e.id == id));

export default function reducer(statePart=[], action={}){
    return statePart
}