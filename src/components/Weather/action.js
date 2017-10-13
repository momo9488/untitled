
import { CREATE_ROOM_START, CREATE_ROOM_SUCCESS,CREATE_ROOM_FAILURE} from './actionType'


//创建房间
export const postCreateRoomForm = (city,cityid,temp) =>{
    const apiUrl = "/data/sk/101010100.html";
    return {
        promise:fetch(apiUrl, {
            method: 'POST',
            body:JSON.stringify({
                city:city,
                cityid:cityid,
                temp:temp
            })
        }),
        types: [CREATE_ROOM_START, CREATE_ROOM_SUCCESS,CREATE_ROOM_FAILURE],
    }
}