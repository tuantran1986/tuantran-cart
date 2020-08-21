const productInitialState = [
    {
        id: 1,
        name: 'SAMSUNG GALAXY',
        price: 600,
        image:'https://cdn.tgdd.vn/Products/Images/42/219314/samsung-galaxy-a21s-055620-045627-400x460.png',
        description: 'sản phẩm mới nhất từ Hàn Quốc',
        inventory: 16,
        ratting: 3
    },
    {
        id: 2,
        name: 'NOKIA-VERTU',
        price: 1800,
        image:'https://cdn.tgdd.vn/Products/Images/42/74844/vertu-signature-touch-20151-400x460.png',
        description: 'siêu phẩm đến từ Phần Lan',
        inventory: 18,
        ratting: 5
    },
    {
        id: 3,
        name: 'IPHONE',
        price: 800,
        image:'https://cdn.tgdd.vn/Products/Images/42/188705/iphone-11-pro-black-400x460.png',
        description: 'sản phẩm mới nhất từ Mỹ',
        inventory: 8,
        ratting: 4
    }
];

export const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}