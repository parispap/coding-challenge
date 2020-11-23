import {LOG_IN, LOG_OUT,SAVE_USER,CHECK_USER} from './UserInfo.types';

export const log_in_user = () =>{

    return {
        type: LOG_IN
    }
};

export const log_out_user = () => {
    return {
        type:LOG_OUT
    }
}

export const save_user = (name) => {
    return {
        type:SAVE_USER,
        payload:name
    }


}


