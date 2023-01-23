//========================> CHECK HTML <==========================//
//check elements document was loading
if(document.readyState == "loading")
{
    document.addEventListener("DOMContentLoaded", ready)
}
else
{
    ready()
}
//==================================================================

var totalAmount = "0,00"
//=========================> ALL EVENTS <==========================//
function ready()
{
    
    updateTotal()
    renderProdcuts()
    validadeForm()
 
    //checkoutWhatsapp()
    
    //==================>EVENT OPEN/CLOSE CART <==================//
    const openCart = document.querySelector("#cart-icon")
    const closeCart = document.querySelector("#cart-close")
    const cart = document.querySelector(".header-cart")

    //open cart
    openCart.addEventListener("click", () => {
        cart.classList.add("active")
    })

    //close cart
    closeCart.addEventListener("click", () => {
        cart.classList.remove("active")
    })
    //==============================================================


    //==================>EVENTO ADD PRODUCT IN CAT<==================//
    //get button add cart
    const btnAddCart = document.querySelectorAll(".add-cart")
    
    //Add Event
    for (i = 0; i < btnAddCart.length; i++)
    {
        btnAddCart[i].addEventListener("click", addProductCart)
    }
    //==============================================================


    //==================>EVENT REMOVE PRODUCT CART<==================//
    //Get button remove cart
    const btnRemoveCart = document.querySelectorAll(".cart-remove")
    
    //Add Event Click
    for (i = 0; i < btnRemoveCart.length; i++)
    {
        btnRemoveCart[i].addEventListener("click", removeProductCart)
    }
    //==============================================================


    //================>EVENT ADD QUANTITY PRODUCTS<================//
    //get value input
    const inputQuantityCart = document.querySelectorAll(".cart-product-quantity")
    
    //Add Event Change
    for (i = 0; i < inputQuantityCart.length; i++)
    {
        inputQuantityCart[i].addEventListener("change", checkIfInputisNull)
    }
    //==============================================================


    //======================> EVENT CHECKOUT <======================//
    //get btn checkout
    const btnCheckout = document.querySelector(".btn-buy")
    btnCheckout.addEventListener("click", makePurchase)
    //==============================================================

  
}
//==================================================================
   

//===================> FUNÇÃO ADD PRODUCT IN CA <==================//
function addProductCart(event)
{
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
       
        for (i = 0; i < productCartName.length; i++)
        {
            //check if product in cart
            if (productCartName[i].innerText === productName)
            {
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

    //get element .cart-content
    const productListCart = document.querySelector(".cart-content")

    //add node inside element ".cart-content"        
    productListCart.append(newNode)
 
    //update total
    updateTotal()

    newNode.querySelectorAll(".cart-product-quantity")[0].addEventListener("change", checkIfInputisNull)
    newNode.querySelectorAll(".cart-remove")[0].addEventListener("click", removeProductCart)
} 
//==================================================================


//==================> FUNÇÃO REMOVE PRODUCT CART <=================//
function removeProductCart(event)
{
    event.target.parentElement.remove()
    updateTotal()
    
}
//==================================================================


//================> FUNÇÃO CHECK PRODUCT IN CART <================//
function checkIfInputisNull(event) 
{
    if(event.target.value === "0")
    {
        event.target.parentElement.parentElement.remove()
    }
    updateTotal()
}
//==================================================================


//==================> FUNÇÃO CHECKOUT WHATSAPP <==================//
function whatsappCheckout()
{
    var userName = document.querySelector("#info-user-name").value
    var userNumber = document.querySelector("#info-user-number").value
    var userPayment = document.querySelector("#info-user-payment").value
    const itemsCart = document.querySelectorAll(".cart-box")
    const name = document.querySelectorAll(".cart-product-title")
    const price = document.querySelectorAll(".cart-product-price")

    let arr = []
    var productList
    function products(name, price) 
    {
        productList = {Nome: name, Preço: price}
        return productList
    }

    for(i=0; i<itemsCart.length; i++)
    {
        arr.push(products(name[i].innerText, price[i].innerText))
    }

    var obj = JSON.stringify(arr)
    obj = obj.replace("[","").replace("]","").replaceAll("{", "").replaceAll("}", "").replaceAll('"', "").replaceAll(":", ": ").replaceAll(",", "%0A")

    var url = "https://wa.me/5511953604803?text=" + "%0A"
    + "❁        Floricultura Tatuapé       ❁" + "%0A"
    + "--------—-----------------------------" + "%0A"
    + "| Nome: " + userName                    + "%0A"
    + "| Celular: " + userNumber               + "%0A"
    + "| Forma de pagamento: " + userPayment   + "%0A"
    + "| Nº Pedido: 0001                     " + "%0A"
    + "--------------------------------------" + "%0A"
    + "| Lista de Items:                     " + "%0A"
    + "--------------------------------------" + "%0A"
    + obj                                      + "%0A"
    + "--------------------------------------" + "%0A"
    + "| Total: R$" + totalAmount              + "%0A"
    + "--------------------------------------" + "%0A"
    
    window.open(url, "_blank").focus();
}
//==================================================================


//====================> FUNÇÃO MAKE PURCHARSE <====================//
function makePurchase(event) 
{
    if(totalAmount === "0,00")
    {
        alert("Seu carrinho está vazio!\nFaça uma ordem.")
    }
    else
    {
        /* alert
        (
            `Você sera redirecionado para o Whatsapp!\nObrigado pela sua compra!\nValor do pedido R$${totalAmount}\nVolte sempre =)`
        ) */
        whatsappCheckout()
    }

    //clear cart
    const clearCart = document.querySelector(".cart-content").innerHTML = ""
    updateTotal()
}
//==================================================================


//======================> FUNÇÃO UPDATE CART <=====================//
function updateTotal()
{
    totalAmount = 0

    //get list products
    const cartProducts = document.querySelectorAll(".cart-box")
    
    //loop list products
    for(i = 0; i < cartProducts.length; i++)
    {
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
function validadeForm()
{
    const form = document.querySelector("#form")
    const formName = document.querySelector("#form-name")
    const formEmail = document.querySelector("#form-email")
    const formNumber = document.querySelector("#form-number")
    const formServices = document.querySelector("#form-services")
    const formMsg = document.querySelector("#form-msg")

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        //Check input name
        if(formName.value === "")
        {
            alert("Preencha o nome!")
            return
        }
        //Check input email
        if(formEmail.value === "" || !isEmailValid(formEmail.value))
        {
            alert("Peencha um email válido!")
            return
        }
        //Check input number
        if(!validadeNumber(formNumber.value, 8))        
        {
            alert("Preencha um número de telefone válido!")
            return
        }
        //Check input services
        if(formServices.value === "" || formServices.value === "serviços")
        {
            alert("Escolha um serviço!")
            return;
        }
        //Check inpurt message
        if(formMsg.value === "")
        {
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

    function isEmailValid(email)
    {
        //[user13] + @ + [domain] + . + [com.br]
        const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);

        if (emailRegex.test(email))
        {
            return true
        }
        return false
    }

    function validadeNumber(number, minDigits)
    {
        if(number >= minDigits)
        {
            return true
        }
        return false
    }
    
}
//==================================================================


//======================> FUNÇÃO VALIDADE FORM <=====================//
function sendForm()
{
    var formName = document.querySelector("#form-name").value
    var formEmail = document.querySelector("#form-email").value
    var formNumber = document.querySelector("#form-number").value
    var formServices = document.querySelector("#form-services").value
    var formMsg = document.querySelector("#form-msg").value

    var url = "https://wa.me/5511953604803?text="
    + "Nome: " + formName + "%0A"
    + "E-mail: " + formEmail + "%0A"
    + "Número: " + formNumber + "%0A"
    + "Serviço: " + formServices + "%0A"
    + "Mensagem: " + formMsg;

    window.open(url, "_blank").focus();
}
//==================================================================


//=====================> FUNÇÃO RENDER PRODUCTS <===================//
function renderProdcuts()
{
    const productsRender = document.querySelector(".products-container")

    for (i = 0; i < products.length; i++)
    {
        
        productsRender.innerHTML += 
        `
            <div class="product-box">
            	<img src=${products[i].imgSrc} alt="" class="product-img">
                <h2 class="product-title">${products[i].name}</h2>
                <div class="detail">
                	<span class="product-price">R$${products[i].price}</span>
			        <i class="bi bi-bag-plus-fill add-cart"></i>  
            	</div>
            </div>
        `
    }   
}
//==================================================================

