import React from 'react';
import { useDispatch } from 'react-redux';
import { changeMessageAction , addProductToCartAction } from '../reduxFile/actions/indexAction';
import * as mse from '../reduxFile/constants/messageConstants';


const ProductItem = (props) => {

    // ES6
    let {  name, price, image, description, ratting } = props.product;
    let { product } = props;
    // , inventory , id,

    // useDispatch
    const dispatch = useDispatch();

    // showRatting(ratting)
    const showRatting = (ratting) => {
        let result = [];
        for (let i = 0; i <= ratting; i++) {
            result.push(
                <li key={i}>
                    <i className="fa fa-star" />
                </li>
            )
        };
        for (let i = ratting + 1; i <= 5; i++) {
            result.push(
                <li key={i}>
                    <i className="fa fa-star-o" />
                </li>
            )
        };
        return result;
    }

    // addProductToCart(product)
    const addProductToCart = (product) => {
        dispatch(changeMessageAction(mse.THEM_SAN_PHAM_THANH_CONG));    // CHANGE MESSAGE
        dispatch(addProductToCartAction(product));                      // ADD PRODUCT TO CART
    }

    // render
    return (
        <>
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={image} className="img-fluid" alt={name} />
                        <a href="/#">
                            <div className="mask waves-light waves-effect waves-light" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="/#">{name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">

                            {
                                showRatting(ratting)
                            }

                        </ul>
                        <p className="card-text">
                            {description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{price} - $</span>
                            <span className="right">                                
                                <a href="/#" className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart" onClick={() => { addProductToCart(product) }} />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductItem;
