//=================> CHECK DOCUMENT WAS LOADING <=================//
if(document.readyState == "loading")
{
    document.addEventListener("DOMContentLoaded", update)
}
else
{
    update()
}

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
}
//=================> MENU <=================//
function menu()
{
    //HAMBUGER
    hamburguer.addEventListener("click", () => {
        cart.classList.remove("active")
        cartHistory.classList.remove("active")
    }) 

    for(i = 0; i < linkMenu.length; i++) 
    {
        linkMenu[i].addEventListener("click", () => {
            if (hamburguer.checked) {
                hamburguer.checked = false
            }
        })
    }

    /////////////////////////////// CART ////////////////////////////
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
    setTimeout(removeNotification, 1500)
}
function notificationRemove()
{
    notification.innerHTML = `<p>item removido do carrinho =(</p>`
    notification.classList.add("active")
    setTimeout(removeNotification, 1500)
}
//=====================> FUNÇÃO RENDER PRODUCTS <===================//
function renderProducts() 
{
    const productsRender = document.querySelector(".containerProducts")
    productsRender.innerHTML = ""
    for (i = 0; i < products.length; i++) {

        productsRender.innerHTML +=
            `
            <div class="cardProduct">
            	<img src=${products[i].imgSrc} alt="" class="imgProduct">
                <h2 class="nameProduct">${products[i].name}</h2>
                <div class="detailsProduct">
                	<span class="priceProduct">R$${products[i].price.toFixed(2).replaceAll(".", ",")}</span>
                    <i id="${products[i].id}" class="bi bi-bag-plus-fill btnAddCart" onclick="addProductCart(this)"></i>
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
//=================> FUNÇÃO RENDER PRODUCTS HISTORY <=================//
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
            <p>Data: <span>${pedido.data}</span></p>
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
    let data = new Date().toLocaleString().split(',')[0] // data e hora atual formatada como string
    // criando o objeto que representa o pedido
    const pedido = {
      order: order, 
      data: data, 
      produtos: cartProductsList, // lista de produtos do carrinho
      total: cartTotal, // valor total dos produtos do carrinho
    };
    // adicionando o pedido ao histórico de pedidos
    cartProductsListHistory.push(pedido);

    let productListText = cartProductsList
    .map(item => `| ${item.name.padEnd(14)} ${item.quantity.toString()}x ${"".padEnd(10)}R$${item.price.toFixed(2)}`).join("%0A");

    let message =
    "%2B+---------------------------------------------%2B+" +
    "%0A|  ❁ Floricultura Tatuapé ❁    |" +
    "%0A%2B+---------------------------------------------%2B+" +
    "%0A| Dados do cliente              |" +
    "%0A%2B+---------------------------------------------%2B+" +
    `%0A| Nome: ${userName.value.toString()}` +
    `%0A| Número: ${userNumber.value}` +
    `%0A| Pagamento: ${userPayment.value}` +
    `%0A| Order: ${order.toString()}` +
    `%0A| Data: ${data}|` +
    "%0A%2B+---------------------------------------------%2B+" +
    "%0A| Lista de produtos             |" +
    "%0A%2B+---------------------------------------------%2B+" +
    `%0A| Nome${"".padEnd(10)}Qtd${"".padEnd(12)}Preço${"".padEnd(8)}|`+  
    `%0A${productListText}` +
    "%0A%2B+---------------------------------------------%2B+" +
    `%0A| Total: R$ ${cartTotal.toFixed(2).toString()}|` +
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




// Call renderCartProducts on page load
window.addEventListener('load', renderCartProducts);