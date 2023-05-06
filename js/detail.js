var carts = document.querySelectorAll('.add-cart');

var products = [
    {
        name: 'Dâu tây',
        origin: 'Hàn Quốc',
        price: 400000,
        inCart: 0
    },
    {
        name: 'Cam Cara đỏ',
        origin: 'Hàn Quốc',
        price: 500000,
        inCart: 0
    },
    {
        name: 'Nho tím',
        origin: 'Hàn Quốc',
        price: 350000,
        inCart: 0
    },
    {
        name: 'Kiwi',
        origin: 'Hàn Quốc',
        price: 340000,
        inCart: 0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

// load lại trang vẫn giữ nguyên số lượng thêm
function onLoadCartNumbers() {
    var productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

// lấy số lượng đã thêm 
function cartNumbers(product) {

    var productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

// lấy sản phẩm đã chọn
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.name]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

//hiển thị sản phẩm bên trang giỏ hàng
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products-container');

    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product"> `
        });
    }
}

onLoadCartNumbers();
displayCart();