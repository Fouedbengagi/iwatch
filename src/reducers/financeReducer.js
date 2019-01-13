import {FIN_ATTEMPT, FIN_SUCCESS, FIN_FAILED} from "../actions/types";

const INITIAL_STATE = {
    fin:null,
    loading:false,
    error:""
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type){
        case FIN_ATTEMPT:{
            return{...state, loading:true};
        }
        case FIN_SUCCESS:{
            return{...INITIAL_STATE, fin:action.fin,loading:false};
        }
        case FIN_FAILED:{
            return{...INITIAL_STATE, loading:false,error:action.error};
        }
        default: return state;
    }
}