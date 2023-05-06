var cart = [];

var addToCartButton = document.querySelector('.btnAdd');

addToCartButton.addEventListener('click', event => {
    const productId = new URLSearchParams(window.location.search).get('id');
    const product = products.find(product => product.id === parseInt(productId));

    if (product) {
        // Thêm sản phẩm vào giỏ hàng
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });

        // Thông báo cho người dùng
        alert('Thêm sản phẩm vào giỏ hàng thành công!');
    }
});