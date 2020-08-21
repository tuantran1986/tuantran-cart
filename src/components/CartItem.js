import React from 'react';
import { useDispatch } from 'react-redux';
import { changeMessageAction, deleteProductInCartAction, updateQuantityProductInCartAction } from '../reduxFile/actions/indexAction';
import * as mse from '../reduxFile/constants/messageConstants';

const CartItem = (props) => {

    // es6
    let { product, quantity } = props.cartItem;
    let { name, price, image, } = props.cartItem.product;
    // id, description, ratting, inventory
    // 
    const dispatch = useDispatch();

    // deleteProductInCard
    const deleteProductInCard = (product) => {
        dispatch(changeMessageAction(mse.XOA_SAN_PHAM_THANH_CONG)); // THAY ĐỔI THÔNG BÁO
        dispatch(deleteProductInCartAction(product));               // XÓA SP - TRONG CART.
    }

    // updateQuantityProductInCart(product,updateType)
    const updateQuantityProductInCart = (product, updateType) => {
        dispatch(changeMessageAction(mse.SUA_SO_LUONG_SAN_PHAM_THANH_CONG));          // THAY ĐỔI THÔNG BÁO
        dispatch(updateQuantityProductInCartAction(product, updateType));              // THAY ĐỔI SỐ LƯỢNG SL SP
    }

    // render
    return (
        <>
            <tr>
                <th scope="row">
                    <img src={image} alt={name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{name}</strong>
                    </h5>
                </td>
                <td>{price} - $</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={() => { updateQuantityProductInCart(product, 'giam') }} >
                            <a href="/#">—</a>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={() => { updateQuantityProductInCart(product, 'tang') }} >
                            <a href="/#">+</a>
                        </label>
                    </div>
                </td>
                <td>{quantity * price} - $</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" data-original-title="Remove item" onClick={() => { deleteProductInCard(product) }} >
                        XÓA SP KHỎI GIỎ HÀNG
                  </button>
                </td>
            </tr>

        </>
    );
}

export default CartItem;
