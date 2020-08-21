import React from 'react';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';

const ProductList = () => {

    // 
    const productList = useSelector(state => state.productReducer);

    // render
    return (
        <>
            <section className="section">
                <h3 className="text-center"> <b><u> TUANTRAN CART -REACTHOOK-REDUX- (NghiepUIT) </u></b></h3>
                <h5 className="text-center">Danh Sách Sản Phẩm</h5>
                <br />
                <div className="row">

                    {
                        productList.map((product, index) => (<ProductItem key={index} product={product} />))
                    }

                </div>
            </section>
        </>
    );
}

export default ProductList;
