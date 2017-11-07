import { FETCH_START, FETCH_SUCCESS,FETCH_FAILURE} from './actionType'
import * as Status from './status'
export default (state = {status:Status.LOADING},action ) =>{
    switch(action.type){
        case FETCH_START:{
            return {
                status:Status.LOADING
            }
        }
        case FETCH_SUCCESS:{
            return {
                ...state,
                status:Status.SUCCESS,
                ...action.result,
            }
        }
        case FETCH_FAILURE:{
            return {
                status:Status.FAILURE,
            }
        }
        default:{
            return state;
        }
    }
}
