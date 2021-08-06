import {updateUsername, updatePassword} from "./userDataActionTypes";

export const updateUsernameInput = (input) => {
    return {
        type: updateUsername,
        payload: input
    };
};
export const updatePasswordInput = (input) => {
    return {
        type: updatePassword,
        payload: input
    };
};

