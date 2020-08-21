import React from 'react';

const CartResult = (props) => {

    // es6
    let {cartList} = props;

    // totalPrice
    const totalPrice = (cartList)=>{
        let result = 0;
        cartList.map((item,index)=>{
            result += (item.quantity * item.product.price);
        });
        return result;
    }

    // render
    return (
        <>
            <tr>
                <td colSpan={3} />
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{totalPrice(cartList)} - $</strong>
                    </h4>
                </td>
                <td colSpan={3}>
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                    <i className="fa fa-angle-right right" />
                    </button>
                </td>
            </tr>
        </>
    );
}

export default CartResult;
