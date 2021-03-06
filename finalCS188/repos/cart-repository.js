var uuid = require('uuid');


let carts = [
    {
        'cart_id': uuid.v4(),
        'customer_id': 'b74gt153-f95g-885t-3w1f-t7d1rt2g6m19',
        'created_date': new Date(),
        'purchased_date': new Date()
    },
    {
        'cart_id': uuid.v4(),
        'customer_id': 'b74gt153-f95g-885t-3w1f-t7d1rt2g6m19',
        'created_date': new Date(),
        'purchased_date': new Date()
    }
];

const selectCarts = () => ({
    rows: carts,
    error: new Error(),
    driver: 'postgres'
});

const selectCartByCartId = (cartId) =>
    carts.find((cart) => cart['cart_id'] === cartId);

const selectCartsByCustomerId = (customerId) => ({
    rows: carts.filter((cart) => cart['customer_id'] === customerId)
});

const insertCart = (cart) => carts.push(cart);

const updateCart = (updatedCart) => {
    const cartsThatDontMatch = carts.filter((cart) =>
        cart['cart_id'] !== updatedCart['cart_id']
    );

    carts = [
        ...cartsThatDontMatch, updatedCart
    ];

};

const deleteCartByCartId = (cartId) => {
    carts = carts.filter((cart) =>
        cart['cart_id'] !== cartId
    );
};

module.exports = {
    selectCarts,
    selectCartByCartId,
    selectCartsByCustomerId,
    insertCart,
    updateCart,
    deleteCartByCartId
};
