const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".header-cart");
const closeCart = document.querySelector("#cart-close");



//add event click to cart
cartIcon.addEventListener("click", () => {
    //add class 'active' in cart
    cart.classList.add("active");
});

//add event click to X closeCart
closeCart.addEventListener("click", () => {
    //remove class 'active' in cart
    cart.classList.remove("active");
});


//start when the document is ready
if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', start);
}
else{
    start();
}

//================== START ================== 
function start() {
    addEvents();
}


//==================  UPDATE & RERENDER ==================
function update() {
    addEvents();
    updateTotal();
}

//================== ADD EVENTS ==================
function addEvents() {

    //Remove items from cart
    let cartRemove_btns = document.querySelectorAll(".cart-remove");
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener("click", handle_removeCartItem);
    });

    //Change item quantity
    let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
    cartQuantity_inputs.forEach((select) => {
        select.addEventListener("change", handle_changeItemQuantity);
    });

    //Add item to cart
    let addCart_btns = document.querySelectorAll(".add-cart");
    addCart_btns.forEach((btn) => {
        btn.addEventListener("click", handle_addCartItem);
    });

    //Buy Order
    const buy_btn = document.querySelector(".btn-buy")
    buy_btn.addEventListener("click", handle_buyOrder);
}


//================== HANDLE EVENTS FUNCTIONS ==================
let itemsAdded = [];
// Add product to cart
function handle_addCartItem() {
    let product = this.parentElement;
    let imgSrc = product.querySelector(".product-img").src;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;

    let newToAdd = {
        imgSrc,
        title,
        price,
    };

    // handle item is already exist
    if(itemsAdded.find(el => el.title == newToAdd.title)) {
        alert("Este item já esta na sacola!");
        return;
    }else {
        itemsAdded.push(newToAdd);
    }
    let cartBoxElement = cartBoxComponent(imgSrc, title, price);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);
    update();
}

//remove item cart
function handle_removeCartItem() {
    this.parentElement.remove();
    itemsAdded = itemsAdded.filter(el => el.title != this.parentElement.querySelector(".cart-product-title").innerHTML);
    update();
}

function handle_changeItemQuantity() {
    //ckeck if number > 1
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    //convert to integer
    this.value = Math.floor(this.value); //to keep integer
    update();
}

function handle_buyOrder() {
    //check if has items in cart
    if(itemsAdded.length <= 0) {
        alert("Carrinho vazio! \nFaça um pedido.")
        return;
    }
    const cartContent = cart.querySelector(".cart-content");
    cartContent.innerHTML = "";
    alert("Seu pedido foi feito com sucesso! :)");
    itemsAdded = [];

    update();
}

//================== UPDATE & RERENDER FUNCTIONS ==================
function updateTotal() {
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");
    let total = 0;
    cartBoxes.forEach((cartBox) => {
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("R$", ""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
    });

    //keep 2 digits
    total = total.toFixed(2);

    totalElement.innerHTML = "R$" + total;
    update();
}

// ================ HTML COMPONENTS ====================

function cartBoxComponent(imgSrc, title, price) {
    return `
    <div class="cart-box">
        <img src=${imgSrc} alt="">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <select class="cart-quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>               
        </div>
        <!--REMOVE CART-->
        <i class="bi bi-trash3-fill cart-remove"></i>
    </div>`;
}