import { CREATE_ROOM_START, CREATE_ROOM_SUCCESS,CREATE_ROOM_FAILURE} from './actionType'

export default (state = {weather:null},action ) =>{
    switch(action.type){
        case CREATE_ROOM_START:{
            return {
                ...state,
                status:"posting",
                ...action.result,
            }
        }
        case CREATE_ROOM_SUCCESS:{
            return {
                ...state,
                status:"success",
                visible:false,
            }
        }
        case CREATE_ROOM_FAILURE:{
            return {
                ...state,
                status:"failure",
                visible:false,
            }
        }
        default:{
            return state;
        }
    }
}
