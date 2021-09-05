import * as types from './types'
export function buttonClickRequest() {
    return {
        type:types.BUTTON_CLICKED_REQUEST
    };
}

export function buttonClickSuccess() {
    return {
        type:types.BUTTON_CLICKED_SUCCESS
    };
}

export function buttonClickFailure() {
    return {
        type:types.BUTTON_CLICKED_FAILURE
    };
}