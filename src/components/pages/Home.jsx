import React from "react";
import Product from "../shared/Product";
import { incrementQuantity } from "../../redux";

const Home = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-fit grid grid-cols-5 gap-5">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
};

const mapState = state => {
    return {
        products: state.products,
    };
}

const mapDispatch = dispatch => {
    return {
        incrementQuantity: () => dispatch(incrementQuantity()),
    }
}

export default Home;
