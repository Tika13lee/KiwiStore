var carts = document.querySelectorAll('.add-cart');

var products = [
    {
        name: 'Dâu tây',
        img: 'dau',
        origin: 'Hàn Quốc',
        price: 400000,
        inCart: 0
    },
    {
        name: 'Cam ruột đỏ',
        img: 'cam',
        origin: 'Hàn Quốc',
        price: 500000,
        inCart: 0
    },
    {
        name: 'Nho tím',
        img: 'nho',
        origin: 'Hàn Quốc',
        price: 350000,
        inCart: 0
    },
    {
        name: 'Kiwi',
        img: 'kiwi',
        origin: 'Hàn Quốc',
        price: 340000,
        inCart: 0
    },
    {
        name: 'Táo xanh',
        img: 'tao',
        origin: 'Hàn Quốc',
        price: 370000,
        inCart: 0
    },
    {
        name: 'Đào',
        img: 'dao',
        origin: 'Hàn Quốc',
        price: 280000,
        inCart: 0
    },
    {
        name: 'Chuối',
        img: 'chuoi',
        origin: 'Hàn Quốc',
        price: 150000,
        inCart: 0
    },
    {
        name: 'Vải',
        img: 'vai',
        origin: 'Hàn Quốc',
        price: 150000,
        inCart: 0
    },
    {
        name: 'Việt quất',
        img: 'vietQuoc',
        origin: 'Hàn Quốc',
        price: 150000,
        inCart: 0
    },
    {
        name: 'Lựu',
        img: 'luu',
        origin: 'Hàn Quốc',
        price: 200000,
        inCart: 0
    },
    {
        name: 'Nho xanh',
        img: 'nhoXanh',
        origin: 'Hàn Quốc',
        price: 300000,
        inCart: 0
    },
    {
        name: 'Cherry',
        img: 'cherry',
        origin: 'Hàn Quốc',
        price: 400000,
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

//lấy tổng tiền
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
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector('.table');

        if(cartItems && productContainer){
            // productContainer.innerHTML = '';
            var stt = 1;
            Object.values(cartItems).map(item => {
                // productContainer.innerHTML += `
                // <div class="products"> 
                //     <p>${item.name}</p>
                //     <p>${item.origin}</p>
                //     <p>${item.price}</p>
                //     <p>${item.inCart}</p>
                //     <p>${item.inCart*item.price}</p>
                // </div>

                // productContainer.innerHTML += "<tr><td>" + item.name + "</td><td>" + item.origin + "</td><td>" + item.price + "</td><td>" + item.inCart +"</td><td>" + item.price*item.inCart +"</td></tr>";

                productContainer.innerHTML += `
                    <div class="table">
                        <tr>
                            <td>${stt}</td>
                            <td class="name">
                                <img src="../images/Detail/${item.img}.jpg"></img>
                                ${item.name}
                            </td>
                            <td class="origin">${item.origin}</td>
                            <td class="price">${item.price}</td>
                            <td class="quantity">${item.inCart}</td>
                            <td class="total">${item.inCart*item.price}</td>
                        </tr>
                    </div>
                `
                stt++;
            });
        }
    }
}

onLoadCartNumbers();
displayCart();