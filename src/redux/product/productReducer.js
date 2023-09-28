import { ADD_TO_CART, CHECKOUT, DECREMENT_QUANTITY, INCREMENT_QUANTITY } from "./productContants"

const initialState = {
    products: [
        {
            id: 0,
            productName: 'Coke 1.5L',
            quantity: 10,
            price: 70,
        },
        {
            id: 1,
            productName: 'Pepsi 1.5L',
            quantity: 15,
            price: 70,
        },
        {
            id: 2,
            productName: 'Root Beer 1.5L',
            quantity: 5,
            price: 75,
        },
    ],
    waitingForActionProducts: [],
    carts: [],
    checkouts: [],
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT_QUANTITY:
            const productId = action.productId;

            // Clone waitingForActionProducts Array
            let waitingForActionProducts = [...state.waitingForActionProducts];
            
            /** 
             * Clone and filter waitingForActionProducts Array using productId
             * assign the first element of the returned value to waitingForActionProduct
             * */ 
            let waitingForActionProduct = [...waitingForActionProducts]?.filter(
                value => value.productId === productId
            )?.at(0);

            // If the waitingForActionProduct has no value
            if (waitingForActionProduct === undefined) {
                /** 
                 * Clone and filter products Array using productId
                 * assign the first element of the returned value to product
                 * */ 
                const product = [...state.products]?.filter(
                    value => value.productId === productId
                )?.at(0);

                // If the waitingForActionProduct has a value
                if (product !== undefined) {
                    // Assign an object to waitingForActionProduct
                    waitingForActionProduct = {
                        productId: product.id,
                        quantity: 1,
                    }

                    // Add the waitingForActionProduct to waitingForActionProducts
                    waitingForActionProducts.push(waitingForActionProduct);
                }
            } else {
                // Increase the quantity of waitingForActionProduct by 1
                const newQuantity = waitingForActionProduct.quantity + 1;
                waitingForActionProduct = {...waitingForActionProduct, quantity: newQuantity};

                // Update the waitingForActionProduct in waitingForActionProducts 
                waitingForActionProducts = [...waitingForActionProducts]?.map(value => {
                    if (value.productId === productId) {
                        return waitingForActionProduct;
                    } else {
                        return value;
                    }
                })
            }
            
            return {...state, waitingForActionProducts: waitingForActionProducts};
        case DECREMENT_QUANTITY:
            return state;
        case ADD_TO_CART:
            return state;
        case CHECKOUT:
            return state;
        default: return state;
    }
}

export default productReducer;