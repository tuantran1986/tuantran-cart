import * as type from '../constants/indexConstants';
import * as mse from '../constants/messageConstants';

const messageInitialState = mse.CHAO_MUNG_BAN_DEN_VOI_WEBSITE
export const messageReducer = (state = messageInitialState, action) => {
    switch (action.type) {
        case type.CHANGE_MESSAGE:
            state = action.newMessage;
            return state;

        default:
            return state;
    }
}