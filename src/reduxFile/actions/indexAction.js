import * as type from '../constants/indexConstants';

export const changeMessageAction = (newMessage)=>{
    return {
        type:type.CHANGE_MESSAGE,
        newMessage:newMessage
    }
};

export const addProductToCartAction = (product)=>{
    return {
        type:type.ADD_PRODUCT_TO_CART,
        product:product
    }
};

export const deleteProductInCartAction = (product)=>{
    return {
        type:type.DELETE_PRODUCT_IN_CARD,
        product:product
    }
};

export const updateQuantityProductInCartAction = (product,updateType)=>{
    return {
        type:type.UPDATE_QUANTITY_PRODUCT_IN_CARD,
        product:product,
        updateType:updateType
    }
};
