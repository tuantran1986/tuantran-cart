import React from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';
import { useSelector } from 'react-redux';

const CartList = () => {

    // useSelector
    const cartList = useSelector(state => state.cartReducer);

    // render
    return (
        <>
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th />
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cartList.map((cartItem, index) => (<CartItem key={index} cartItem={cartItem} />))
                            }

                            <CartResult cartList={cartList} />

                        </tbody>
                    </table>
                </div>
            </section>

        </>
    );
}

export default CartList;
