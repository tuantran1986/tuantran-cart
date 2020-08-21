import * as type from '../constants/indexConstants';

// findIndex(action.product,state)
const findIndex = (product, cartList) => {
    let result = -1;
    for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].product.id === product.id) {
            result = i;
        }
    };
    return result;
}

// reducer + LOAD DATA :
let data = JSON.parse(localStorage.getItem('CART_HOOK_3'));
const cartInitialState = (data ? data : []);

export const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {

        case type.ADD_PRODUCT_TO_CART:
            let indexAdd = findIndex(action.product, state);
            if (indexAdd !== -1) {
                state[indexAdd].quantity++;
            } else {
                state.push({
                    product: action.product,
                    quantity: 1
                })
            };

            // lưu vào LOCAL STORAGE
            localStorage.setItem('CART_HOOK_3', JSON.stringify([...state]));
            return [...state];

        case type.DELETE_PRODUCT_IN_CARD:
            let indexDelete = findIndex(action.product, state);
            if (indexDelete !== -1) {
                state.splice(indexDelete, 1);
            };

            // lưu vào LOCAL STORAGE
            localStorage.setItem('CART_HOOK_3', JSON.stringify([...state]));
            return [...state];

        case type.UPDATE_QUANTITY_PRODUCT_IN_CARD:
            let indexUpdate = findIndex(action.product, state);
            if (indexUpdate !== -1) {
                switch (action.updateType) {
                    case 'tang':
                        state[indexUpdate].quantity++;
                        break;
                    case 'giam':
                        if ( state[indexUpdate].quantity > 1) {
                            state[indexUpdate].quantity--;
                        };
                        break;
                    default : break;
                }

            };

            // lưu vào LOCAL STORAGE
            localStorage.setItem('CART_HOOK_3', JSON.stringify([...state]));
            return [...state];
        default:
            return state
    }
}