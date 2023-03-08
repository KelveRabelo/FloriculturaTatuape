<<<<<<< HEAD
//=================> CHECK DOCUMENT WAS LOADING <=================//
if(document.readyState == "loading")
{
    document.addEventListener("DOMContentLoaded", update)
}
else
{
    update()
=======
//========================> CHECK HTML <==========================//
//Check elements document was loading
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}
else {
    ready()
>>>>>>> 4de294eb40b2bcfa098d2577abaffabcfaebd37f
}

<<<<<<< HEAD
//=================> VARIABLES GLOBALS <=================//
const hamburguer        = document.querySelector("#hamburguer")
const linkMenu          = document.querySelectorAll(".linkMenu")
const cart              = document.querySelector(".header-cart")
const btnCart           = document.querySelectorAll(".btnCart")
const btnCloseCart      = document.querySelectorAll(".btnCloseCart")
const cartHistory       = document.querySelector(".header-cart-history")
const btnHistory        = document.querySelector(".btnHistory")
const removeCart        = document.querySelectorAll(".removeCart")
const inputUpdateQuantity = document.getElementsByClassName("quantityProductCart")
const btnBuy            = document.querySelector(".btnBuy");
const notification      = document.querySelector(".notifications");
const userName          = document.querySelector("#userName")
const userNumber        = document.querySelector("#userNumber")
const userPayment       =   document.querySelector("#userPayment")


//=================> FUNCTION UPDATE <=================//
function update()
{
    renderCartProductsHistory()
    renderCartProducts()
    renderProducts()
    updateCartTotal()
    menu()
=======
//Vabriables global
var totalAmount = "0,00"
var nPedido = 1
let listProducts = []
let listProductsLocalStorage = []
let listHistoryProductsLocalStorage = []
let product = {}

const productListCart = document.querySelector(".cart-content")
//=========================> ALL EVENTS <==========================//
function ready() {
    updateTotal()
    renderProdcuts()
    validadeForm()
    getLocalStorage()
    getHistoryLocalStorage()
    
    //checkoutWhatsapp()

    //==================>EVENTS OPEN/CLOSE CART <==================//
    const hamburguer = document.querySelector("#hamburguer")
    const menuLinks = document.querySelectorAll(".link-menu")
    const cart = document.querySelector(".header-cart")
    const cartHistory = document.querySelector(".header-cart-history")
    const btnOpenCart = document.querySelector("#cart-icon")
    const btnCloseCart = document.querySelector("#cart-close")
    const btnOpenCartHistory = document.querySelector("#cart-history")
    const btnCloseCartHistory = document.querySelector("#cart-close-history")
    const btnCart = document.querySelector("#btn-cart-history")

>>>>>>> 4de294eb40b2bcfa098d2577abaffabcfaebd37f

}
//=================> MENU <=================//
function menu()
{
    //HAMBUGER
    hamburguer.addEventListener("click", () => {
        cart.classList.remove("active")
        cartHistory.classList.remove("active")
<<<<<<< HEAD
    }) 

    for(i = 0; i < linkMenu.length; i++) 
    {
        linkMenu[i].addEventListener("click", () => {
            if (hamburguer.checked) {
                hamburguer.checked = false
=======
    })

    //hidden menu at click in link
    for (i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener("click", () => {
            if (document.querySelector(".header-hamburguer").checked) {
                document.querySelector(".header-hamburguer").checked = false
>>>>>>> 4de294eb40b2bcfa098d2577abaffabcfaebd37f
            }
        })
    }
<<<<<<< HEAD
    ////////////////////////////////////////////////////
=======

    /////////////////////////////// CART ////////////////////////////
    //open cart
    btnOpenCart.addEventListener("click", () => {
        cart.classList.add("active")
        cartHistory.classList.remove("active")
        document.querySelector(".header-hamburguer").checked = false
    })
    //close cart
    btnCloseCart.addEventListener("click", () => {
        cart.classList.remove("active")
        cartHistory.classList.remove("active")
    })
>>>>>>> 4de294eb40b2bcfa098d2577abaffabcfaebd37f

   //OPEN CART
   for (i=0; i < btnCart.length; i++)
   {
        btnCart[i].addEventListener("click", () => {
            cart.classList.add("active")
            cartHistory.classList.remove("active")
            hamburguer.checked = false
        })
   }
  
    //CLOSE CART
    for(i=0; i < btnCloseCart.length; i++)
    {
        btnCloseCart[i].addEventListener("click", () => {
            cart.classList.remove("active")
            cartHistory.classList.remove("active")
        })
    
    }
    
    //OPEN HISTORY CART
    btnHistory.addEventListener("click", () => {
        cart.classList.remove("active")
        cartHistory.classList.add("active")
<<<<<<< HEAD
    })

}
//=================> NOTIFICATIONS <=================//
function removeNotification()
{
    notification.classList.remove("active");
}
function notificationAdd()
{
  
    notification.innerHTML = `<p>item adicionado ao carrinho =)</p>`;
    notification.classList.add("active");
    setTimeout(removeNotification, 2000)
}
function notificationRemove()
{
    notification.innerHTML = `<p>item removido do carrinho =(</p>`
    notification.classList.add("active")
    setTimeout(removeNotification, 2000)
}
//=================> FUNÇÃO RENDER PRODUCTS CONTAINER <=================//
function renderProducts()
{
   const productsRender = document.querySelector(".containerProducts")
   productsRender.innerHTML = ""
    for (item in products)
    {
        productsRender.innerHTML += 
        `
            <div class="cardProduct">
            	<img src=${products[item].imgSrc} alt="" class="imgProduct">
                <h2 class="nameProduct">${products[item].name}</h2>
=======
        cart.classList.remove("active")
        document.querySelector(".header-hamburguer").checked = false
    })
    //close history
    btnCloseCartHistory.addEventListener("click", () => {
        cartHistory.classList.remove("active")
    })
    //open cart aside history
    btnCart.addEventListener("click", () => {
        cart.classList.add("active")
        cartHistory.classList.remove("active")
    })

    //==============================================================


    //==================>EVENTO ADD PRODUCT IN CAT<==================//
    //get button add cart
    const btnAddCart = document.querySelectorAll(".add-cart")

    //Add Event
    for (i = 0; i < btnAddCart.length; i++) {
        btnAddCart[i].addEventListener("click", addProductCart)
    }
    //==============================================================


    //==================>EVENT REMOVE PRODUCT CART<==================//
    //Get button remove cart
    const btnRemoveCart = document.querySelectorAll(".cart-remove")

    //Add Event Click
    for (i = 0; i < btnRemoveCart.length; i++) {
        btnRemoveCart[i].addEventListener("click", removeProductCart)
    }
    //==============================================================


    //================>EVENT ADD QUANTITY PRODUCTS<================//
    //Get value input
    const inputQuantityCart = document.querySelectorAll(".cart-product-quantity")

    //Add Event Change
    for (i = 0; i < inputQuantityCart.length; i++) {
        inputQuantityCart[i].addEventListener("change", checkIfInputisNull)
    }
    //==============================================================


    //======================> EVENT CHECKOUT <======================//
    //Get btn checkout
    const btnCheckout = document.querySelector(".btn-buy")
    btnCheckout.addEventListener("click", makePurchase)
    //==============================================================
}
//==================================================================

//===================> FUNÇÃO ADD PRODUCT IN CA <==================//
function addProductCart(event) {
    //get button add cart
    const button = event.target

    //parent from ".add-cart"
    const productInfo = button.parentElement.parentElement

    //get img product
    const productImg = productInfo.querySelector(".product-img").src

    //get title product
    const productName = productInfo.querySelector(".product-title").innerText

    //get price product
    const productPrice = productInfo.querySelector(".product-price").innerText

    //get product name from cart
    const productCartName = document.querySelectorAll(".cart-product-title")

    //get element .cart-content
    //    const productListCart = document.querySelector(".cart-content")

    //get notification from cart
    const notification = document.querySelector(".notifications")

    for (i = 0; i < productCartName.length; i++) {
        //check if product in cart
        if (productCartName[i].innerText === productName) {
            //add more value input
            productCartName[i].parentElement.querySelectorAll(".cart-product-quantity")[0].value++
            updateTotal()
            return
        }
    }

    //create node div
    let newNode = document.createElement("div")
    //add class "cart-box"
    newNode.classList.add("cart-box")
    // add node inside content 
    newNode.innerHTML =
        `
            <img src="${productImg}" alt="">
            <div class="detail-box">
                <div class="cart-product-title">${productName}</div>
                <div class="cart-product-price">${productPrice}</div>
                <input type="number" value="1" class="cart-product-quantity">
            </div>
            <!--REMOVE CART-->
            <button class="cart-remove bi bi-trash3-fill"></button>
        `
    setlocalStorage(productImg, productName, productPrice)

    function handle_notification_close() {
        notification.classList.remove("active")
    }

    if (totalAmount === "0,00") {
        productListCart.innerHTML = ""
    }

    // show notifications when add item
    notification.innerHTML = `<p>item adicionado ao carrinho =)</p>`
    notification.classList.add("active")

    //add node inside element ".cart-content"        
    productListCart.append(newNode)

    //time notification
    setTimeout(handle_notification_close, 2000)

    //update total
    updateTotal()

    newNode.querySelectorAll(".cart-product-quantity")[0].addEventListener("change", checkIfInputisNull)
    newNode.querySelectorAll(".cart-remove")[0].addEventListener("click", removeProductCart)
}
//==================================================================

function setlocalStorage(img, name, price) {
    listProductsLocalStorage = JSON.parse(localStorage.getItem("products"))
    for (item in listProductsLocalStorage) {
        listProducts.push(listProductsLocalStorage[item])
    }

    product = { img: img, name: name, price: price }
    listProducts.push(product)
    localStorage.setItem("products", JSON.stringify(listProducts))
    listProducts.length = 0
}
function getLocalStorage() {
    if (localStorage.hasOwnProperty("products")) {
        listProductsLocalStorage = JSON.parse(localStorage.getItem("products"))
        
        productListCart.innerHTML = ""
        for (item in listProductsLocalStorage) {
            productListCart.innerHTML +=
            `
                <div class="cart-box">
                    <img src="${listProductsLocalStorage[item].img}" alt="">
                    <div class="detail-box">
                        <div class="cart-product-title">${listProductsLocalStorage[item].name}</div>
                        <div class="cart-product-price">${listProductsLocalStorage[item].price}</div>
                        <input type="number" value="1" class="cart-product-quantity">
                    </div>
                    <!--REMOVE CART-->
                    <button class="cart-remove bi bi-trash3-fill"></button>
                </div>
            `
            updateTotal()
        }
    }



}
function getHistoryLocalStorage(){
    const data = new Date()
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const ano = String(data.getFullYear())
    const dataAtual = `${dia}/${mes}/${ano}`

    const cartContent = document.querySelector(".cart-content-history")
    if(localStorage.hasOwnProperty("history"))
    {
        listHistoryProductsLocalStorage = JSON.parse(localStorage.getItem("history"))
        for(item in listHistoryProductsLocalStorage)
        {
            cartContent.innerHTML += 
            `
                <div class="card-history">
                        
                    <div class="header-card-history">
                        <p>Nº Pedido: <span>${nPedido}</span></p>
                        <p>Data: <span>${dataAtual}</span></p>
                    </div>

                    <div class="body-card-history">
                        <img src="${listHistoryProductsLocalStorage[item].img}" alt="">
                        <p>${listHistoryProductsLocalStorage[item].name}</p>
                        <p>1x</p>
                        <p>R$ ${listHistoryProductsLocalStorage[item].price}</p>
                    </div>

                    <div class="footer-card-history">
                        <p>Total: </p>
                        <p>R$ ${listHistoryProductsLocalStorage[item].price}</p>
                    </div>

                </div>
            `
        }
        updateTotal()
    }
    updateTotal()
}


//==================> FUNÇÃO REMOVE PRODUCT CART <=================//
function removeProductCart(event) {
    const productListCart = document.querySelector(".cart-content")
    function handle_notification_close() {
        notification.classList.remove("active")
    }

    //get notificaiion
    const notification = document.querySelector(".notifications")
    notification.innerHTML = `<p>item removido do carrinho =(</p>`
    notification.classList.add("active")
    setTimeout(handle_notification_close, 2500)
    event.target.parentElement.remove()
    updateTotal()
    if (totalAmount === "0,00") {
        const clearCart = document.querySelector(".cart-content").innerHTML = `<p class="cart-null">seu carrinho esta vazio!</p>
        <p class="cart-null">faça um pedido.</p>`
    }
}
//==================================================================


//================> FUNÇÃO CHECK PRODUCT IN CART <================//
function checkIfInputisNull(event) {
    if (event.target.value === "0") {
        event.target.parentElement.parentElement.remove()
    }
    updateTotal()
}
//==================================================================


//==================> FUNÇÃO CHECKOUT WHATSAPP <==================//
function whatsappCheckout() {
    const userName = document.querySelector("#info-user-name").value
    const userNumber = document.querySelector("#info-user-number").value
    const userPayment = document.querySelector("#info-user-payment").value
    const itemsCart = document.querySelectorAll(".cart-box")
    const name = document.querySelectorAll(".cart-product-title")
    const price = document.querySelectorAll(".cart-product-price")

    let arr = []
    var productList
    function products(name, price) {
        productList = {name: name, price: price }
        return productList
    }

    for (i = 0; i < itemsCart.length; i++) {
        arr.push(products(name[i].innerText, price[i].innerText))
    }

    localStorage.setItem("history", localStorage.getItem("products"))
    localStorage.removeItem("products")


    //ajustando a a exibição dos itens
    var obj = JSON.stringify(arr)
    obj = obj.replace("[", "").replace("]", "").replaceAll("{", "").replaceAll("}", "").replaceAll('"', "").replaceAll(":", ": ").replaceAll(",", "%0A").replaceAll("R$", "R$ ").replaceAll("Nome", "| Nome").replaceAll("Preço", "| Preço")

    var url = "https://wa.me/5511953604803?text=" + "%0A"
        + "----------------------------------------" + "%0A"
        + "❁        Floricultura Tatuapé       ❁" + "%0A"
        + "----------------------------------------" + "%0A"
        + "| Dados do cliente" + "%0A"
        + "----------------------------------------" + "%0A"
        + "| Nome: " + userName + "%0A"
        + "| Celular: " + userNumber + "%0A"
        + "| Forma de pagamento: " + userPayment + "%0A"
        + "| Nº Pedido: " + nPedido + "%0A"
        + "----------------------------------------" + "%0A"
        + "| Lista de Itens:                     " + "%0A"
        + "----------------------------------------" + "%0A"
        + obj + "%0A"
        + "----------------------------------------" + "%0A"
        + "| Total: R$" + totalAmount + "%0A"
        + "----------------------------------------" + "%0A"

    window.open(url, "_blank").focus();
}
//==================================================================


//====================> FUNÇÃO MAKE PURCHARSE <====================//
function makePurchase(event) {
    if (totalAmount === "0,00") {
        alert("Seu carrinho está vazio!\nFaça uma ordem.")
    }
    else {
        nPedido += 1
        whatsappCheckout()
    }

    //clear cart
    const clearCart = document.querySelector(".cart-content").innerHTML = `<p class="cart-null">seu carrinho esta vazio!</p>
    <p class="cart-null">faça um pedido.</p>`
    updateTotal()
}
//==================================================================


//======================> FUNÇÃO UPDATE CART <=====================//
function updateTotal() {

    totalAmount = 0

    //get list products
    const cartProducts = document.querySelectorAll(".cart-box")

    //loop list products
    for (i = 0; i < cartProducts.length; i++) {
        //get price 
        const productPrice = cartProducts[i].querySelectorAll(".cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")

        //get quantity
        const productQuantity = cartProducts[i].querySelectorAll(".cart-product-quantity")[0].value

        //sum total
        totalAmount += (productPrice * productQuantity)
    }
    //Fixa 2 casa decimal
    totalAmount = totalAmount.toFixed(2).replace(".", ",")

    //get price total
    const totalPrice = document.querySelector(".total-price")

    //update price total
    totalPrice.innerHTML = "R$" + totalAmount

}
//==================================================================


//======================> FUNÇÃO VALIDADE FORM <=====================//
function validadeForm() {
    const form = document.querySelector("#form")
    const formName = document.querySelector("#form-name")
    const formEmail = document.querySelector("#form-email")
    const formNumber = document.querySelector("#form-number")
    const formServices = document.querySelector("#form-services")
    const formMsg = document.querySelector("#form-msg")

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        //Check input name
        if (formName.value === "") {
            alert("Preencha o nome!")
            return
        }
        //Check input email
        if (formEmail.value === "" || !isEmailValid(formEmail.value)) {
            alert("Peencha um email válido!")
            return
        }
        //Check input number
        if (!validadeNumber(formNumber.value, 8)) {
            alert("Preencha um número de telefone válido!")
            return
        }
        //Check input services
        if (formServices.value === "" || formServices.value === "serviços") {
            alert("Escolha um serviço!")
            return;
        }
        //Check inpurt message
        if (formMsg.value === "") {
            alert("Digite sua mensagem!");
            return
        }
        //se todos os campos estiverem ok!

        //======================> EVENT SEND FORM <======================//
        sendForm()
        //get btn form
        const btnForm = document.querySelector(".btn-form")
        btnForm.addEventListener("click", sendForm)
        //==============================================================

        form.submit()

    })

    function isEmailValid(email) {
        //[user13] + @ + [domain] + . + [com.br]
        const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);

        if (emailRegex.test(email)) {
            return true
        }
        return false
    }

    function validadeNumber(number, minDigits) {
        if (number >= minDigits) {
            return true
        }
        return false
    }

}
//==================================================================


//======================> FUNÇÃO VALIDADE FORM <=====================//
function sendForm() {
    var formName = document.querySelector("#form-name").value
    var formEmail = document.querySelector("#form-email").value
    var formNumber = document.querySelector("#form-number").value
    var formServices = document.querySelector("#form-services").value
    var formMsg = document.querySelector("#form-msg").value

    var url = "https://wa.me/5511953604803?text="
        + "Nome: " + formName + "%0A"
        + "E-mail: " + formEmail.l + "%0A"
        + "Número: " + formNumber + "%0A"
        + "Serviço: " + formServices + "%0A"
        + "Mensagem: " + formMsg;

    window.open(url, "_blank").focus();
}
//==================================================================


//=====================> FUNÇÃO RENDER PRODUCTS <===================//
function renderProdcuts() {
    const productsRender = document.querySelector(".products-container")

    for (i = 0; i < products.length; i++) {

        productsRender.innerHTML +=
            `
            <div class="product-box">
            	<img src=${products[i].imgSrc} alt="" class="product-img">
                <h2 class="product-title">${products[i].name}</h2>
>>>>>>> 4de294eb40b2bcfa098d2577abaffabcfaebd37f
                <div class="detail">
                	<span class="priceProduct">R$${products[item].price.toFixed(2).replaceAll(".", ",")}</span>
                    <i id="${products[item].id}" class="bi bi-bag-plus-fill btnAddCart" onclick="addProductCart(this)"></i>
            	</div>
        
            </div>
        `
    }
}
//=================> FUNÇÃO RENDER PRODUCTS CART <=================//
function renderCartProducts()
{
    const cartProductsList = JSON.parse(localStorage.getItem('cartProductsList')) || [];
    
    const newNode = document.querySelector('.contentCart');
    
    // Clear existing content
    newNode.innerHTML = '';
    
    // Check if cart is empty
    if (cartProductsList.length === 0) {
        newNode.innerHTML = `
        <p class="nullCart">Seu carrinho está vazio!</p>
        <p class="nullCart">Faça um pedido.</p>
        `;
        return;
    }
    
    // Render cart products
    cartProductsList.forEach((product) => {
        newNode.innerHTML += `
            <div class="cardCart" data-id="${product.id}">
                <img src="${product.img}" alt="${product.name}">
                <div class="cardDetail">
                    <div class="nameProductCart">${product.name}</div>
                    <div class="priceProductCart">$${product.price.toFixed(2).replace(".", ",")}</div>
                    <input type="number" value="${product.quantity}" class="quantityProductCart" onchange="inputUpdateProduct()" min="1">
                    </div>
                <button class="removeProductCart bi bi-trash3-fill"></button>
            </div>
        `;
    });
    
    // Add event listener for remove button
    document.querySelectorAll('.removeProductCart').forEach((button) => {
        button.addEventListener('click', removeProductCart);
    });
}
function renderCartProductsHistory()
{
    const cartProductsListHistory = JSON.parse(localStorage.getItem("cartProductsListHistory")) || [];

    // atualizando o conteúdo do elemento ".cardHistory"
    const cartProductsHistory = document.querySelector(".cardHistory");
    cartProductsHistory.innerHTML = "";
  
    cartProductsListHistory.forEach((pedido) => {
      // cria um loop para renderizar cada produto do pedido
      let produtosHtml = "";
      pedido.produtos.forEach((produto) => {
        produtosHtml += `
          <div class="bodyCardHistory">
            <img src=${produto.img} alt="">
            <p>${produto.name}</p>
            <p>${produto.quantity}x</p>
            <p>R$${produto.price.toFixed(2).replace(".", ",")}</p>
          </div>
        `;
      });
  
      cartProductsHistory.innerHTML += `
        <div class="pedidoCardHistory">
          <div class="headerCardHistory">
            <p>Nº Pedido: <span>${pedido.order}</span></p>
            <p>Data: <span>${pedido.dataHora}</span></p>
          </div>
          ${produtosHtml}
          <div class="footerCardHistory">
            <p>Total: </p>
            <p>R$${pedido.total.toFixed(2).replace(".", ",")}</p>
          </div>
        </div>
      `;
    });
  
}
//=================> FUNÇÃO ADD PRODUCT TO CART <=================//
function addProductCart(id)
{
    // Obter a lista de produtos no carrinho da localStorage ou criar uma lista vazia
    const cartProductsList = JSON.parse(localStorage.getItem('cartProductsList')) || [];
  
    // Criar objeto do produto selecionado
    let product;
    for (item in products) {
      if (id.id == products[item].id) {
        product = {
          id: products[item].id,
          name: products[item].name,
          price: products[item].price,
          quantity: products[item].quantity,
          img: products[item].imgSrc,
        };
      }
    }
  
    // Verificar se o produto já existe no carrinho
    const existingProductIndex = cartProductsList.findIndex((p) => p.id === product.id);
  
    // Se o produto já existir, atualizar a quantidade
    if (existingProductIndex !== -1) {
      cartProductsList[existingProductIndex].quantity += product.quantity;
    } 
    // Se o produto não existir, adicionar à lista de produtos no carrinho
    else {
        cartProductsList.push(product);
        //Notication add product
        notificationAdd()
      
    }
  
    // Salvar a lista atualizada de produtos no carrinho na localStorage
    localStorage.setItem('cartProductsList', JSON.stringify(cartProductsList));

    
    update()
}
//=================> FUNÇÃO REMOVE PRODUCT TO CART <=================//
function removeProductCart(event)
{
    
    const cartProductsList = JSON.parse(localStorage.getItem('cartProductsList')) || [];

    const buttonClicked = event.target;
    const cardToRemove = buttonClicked.closest('.cardCart');
    const productId = cardToRemove.dataset.id;
  
    // Remove from cart
    cartProductsList.splice(
      cartProductsList.findIndex((p) => p.id === productId),
      1
    );
   
    //Notification Remove
    notificationRemove()

    // Update LocalStorage
    localStorage.setItem("cartProductsList", JSON.stringify(cartProductsList));
  
    // Remove from HTML
    cardToRemove.remove();

    update()
}
//=================> FUNÇÃO UPDATE TOTAL CART <=================//
function updateCartTotal()
{
    const cartProductsList = JSON.parse(localStorage.getItem('cartProductsList')) || [];
    const totalElement = document.querySelector('.total-price');
    let total = 0;
  
    cartProductsList.forEach((product) => {
      total += product.price * product.quantity;
    });
  
    totalElement.innerHTML = `R$${total.toFixed(2).replace('.', ',')}`;

    localStorage.setItem("cartTotal", total.toFixed(2));
}
//=================> FUNÇÃO UPDATE QUANTITY CART <=================//
function inputUpdateProduct()
{
    // Obter a lista de produtos no carrinho da localStorage ou criar uma lista vazia
    const cartProductsList = JSON.parse(localStorage.getItem('cartProductsList')) || [];

    let index = document.getElementsByClassName("cardCart")

    for(let i=0; i < inputUpdateQuantity.length; i++)
    {
        if(inputUpdateQuantity[i].value <= 0)
        {
            index = index[i].getAttribute("data-id")
            inputUpdateQuantity[i].value = 1
            /* console.log("index: ",index)
            console.log("quantity: ", quantity) */
        }
        else
        {
            let index = document.getElementsByClassName("cardCart")
            index = index[i].getAttribute("data-id")
            let quantity = inputUpdateQuantity[i].value 
            cartProductsList[i].quantity = parseInt(quantity)
        }
    } 
    localStorage.setItem('cartProductsList', JSON.stringify(cartProductsList));
    update()
}

//=================> CHECKOUT WHATSAPP <=================//
btnBuy.addEventListener("click", checkout)

function checkout() {
    let cartProductsListHistory = JSON.parse(localStorage.getItem("cartProductsListHistory")) || [];
    let cartProductsList = JSON.parse(localStorage.getItem('cartProductsList')) || [];
    let cartTotal = JSON.parse(localStorage.getItem("cartTotal")) || 0;
  
    let prefix = "FT"
    let random = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000 // número aleatório para simular um número de pedido
    let order = prefix + random
    // criando o objeto que representa o pedido
    const pedido = {
      order: order, 
      data: new Date().toLocaleString().split(',')[0], // data e hora atual formatada como string
      produtos: cartProductsList, // lista de produtos do carrinho
      total: cartTotal, // valor total dos produtos do carrinho
    };
    // adicionando o pedido ao histórico de pedidos
    cartProductsListHistory.push(pedido);

    let productListText = cartProductsList
    .map(item => `| ${item.name.padEnd(22)} ${item.quantity.toString()}x ${"".padEnd(18)}R$${item.price.toFixed(2)}`).join("%0A");

    let message =
    "%2B+---------------------------------------------%2B+" +
    "%0A|               ❁ Floricultura Tatuapé ❁              |" +
    "%0A%2B+---------------------------------------------%2B+" +
    "%0A| Dados do cliente                                         |" +
    "%0A%2B+---------------------------------------------%2B+" +
    `%0A| Nome: ${userName.value.toString().padEnd(53)}|` +
    `%0A| Número: ${userNumber.value.padEnd(42)}|` +
    `%0A| Pagamento: ${userPayment.value.padEnd(46)}|` +
    `%0A| Order: ${pedido.order.toString().padEnd(50)}|` +
    `%0A| Data: ${pedido.data.padEnd(50)}|` +
    "%0A%2B+---------------------------------------------%2B+" +
    "%0A|                        Lista de produtos                 |" +
    "%0A%2B+---------------------------------------------%2B+" +
    `%0A| Nome${"".padEnd(15)}Qtd${"".padEnd(20)}Preço${"".padEnd(8)}|`+  
    `%0A${productListText}` +
    "%0A%2B+---------------------------------------------%2B+" +
    `%0A| Total: R$ ${cartTotal.toFixed(2).toString().padEnd(49)}|` +
    "%0A%2B+---------------------------------------------%2B+";

    let url = "https://wa.me/5511953604803?text=" + message;

    userName.value = ""
    userNumber.value = ""
    userPayment.value = ""

    window.open(url, "_blank").focus();
  

    // limpando o carrinho de compras
    cartProductsList = [];
    cartTotal = 0;
    localStorage.setItem("cartProductsList", JSON.stringify(cartProductsList));
    localStorage.setItem("cartTotal", JSON.stringify(cartTotal));
    localStorage.setItem("cartProductsListHistory", JSON.stringify(cartProductsListHistory));

    update();
}


//======================> FUNÇÃO VALIDADE FORM <=====================//

//==================================================================


// Call renderCartProducts on page load
window.addEventListener('load', renderCartProducts);