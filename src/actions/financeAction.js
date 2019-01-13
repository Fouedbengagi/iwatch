import axios from "axios";

import {URL} from "./types";
import {FIN_ATTEMPT, FIN_SUCCESS, FIN_FAILED} from "./types";

export const getFin = () =>{
    return (dispatch) => {
        dispatch({type:FIN_ATTEMPT});
        axios.get(URL + "finance")
            .then((response)=> {
                dispatch({type:FIN_SUCCESS, fin:response.data});
            })
            .catch((err)=>{
                dispatch({type:FIN_FAILED, error:err.response.data});
            });
    };
};