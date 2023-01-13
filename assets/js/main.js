//======================> CHECK HTML <=======================//
//check elements document was loading
if(document.readyState == "loading")
{
    document.addEventListener("DOMContentLoaded", ready)
}
else
{
    ready()
}

//============================================================= 

var totalAmount = "0,00"
//======================> ALL EVENTS <=======================//
function ready()
{
    //==================>EVENT OPEN/CLOSE CART <==================//
    const openCart = document.querySelector("#cart-icon")
    const closeCart = document.querySelector("#cart-close")
    const cart = document.querySelector(".header-cart")
    const main = document.querySelector(".main")

    console.log(main)
   

    //open cart
    openCart.addEventListener("click", () => {
        cart.classList.add("active")
        main.styles.width = "60vh"
    })

    //close cart
    closeCart.addEventListener("click", () => {
        cart.classList.remove("active")
        main.classList.remove("active")
    })
    //==============================================================

    //==================>EVENTO ADD PRODUCT IN CAT <==================//
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


    //==================>EVENT ADD QUANTITY PRODUCTS<==================//
    //get value input
    const inputQuantityCart = document.querySelectorAll(".cart-product-quantity")
    
    //Add Event Change
    for (i = 0; i < inputQuantityCart.length; i++)
    {
        inputQuantityCart[i].addEventListener("change", checkIfInputisNull)
    }
    //==============================================================


    //==================> EVENT CHECKOUT <==================//
    //get btn checkout
    const btnCheckout = document.querySelector(".btn-buy")

    btnCheckout.addEventListener("click", makePurchase)
    //==============================================================

}
//============================================================= 
   
//================>FUNÇÃO ADD PRODUCT IN CAT<================//
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
        // add content to node 
        newNode.innerHTML =   
            `
                <img src="${productImg}" alt="">
                <div class="detail-box">
                    <div class="cart-product-title">${productName}</div>
                    <div class="cart-product-price">${productPrice}</div>
                    <input type="number" value="1" class="cart-product-quantity">
                </div>
                <!--REMOVE CART-->
                <button class="cart-remove bi bi-trash3-fill "></button>
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
//==============================================================  


//================>FUNÇÃO REMOVE PRODUCT CART<================//
function removeProductCart(event)
{
    event.target.parentElement.remove()
    updateTotal()
    
}
//==============================================================


//==============> FUNÇÃO CHECK PRODUCT IN CART <==============//
function checkIfInputisNull(event) 
{
    if(event.target.value === "0")
    {
        event.target.parentElement.parentElement.remove()
    }
    updateTotal()
}
//==============================================================


//====================> FUNÇÃO PURCHARSE <====================//
function makePurchase(event) {
    if(totalAmount === "0,00")
    {
        alert("Seu carrinho está vazio!\nFaça uma ordem.")
    }
    else
    {
        alert
        (
            `Obrigado pela sua compra!\nValor do pedido R$${totalAmount}\nVolte sempre =)`
        )
    }
    //clear cart
    document.querySelector(".cart-content").innerHTML = ""
    updateTotal()   
}
//==============================================================


//====================> FUNÇÃO UPDATE CART <===================//
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
//==============================================================




const productsRender = document.querySelector(".products-container");

//RENDER PRODUCTS
    for (i = 0; i < products.length; i++)
    {
        
        productsRender.innerHTML += 
        `
            <div class="product-box">
            	<span class="discount">-${products[i].discount}%</span>
            	<img src=${products[i].imgSrc} alt="" class="product-img">
                <h2 class="product-title">${products[i].name}</h2>
                <div class="detail">
                	<span class="product-price">R$${products[i].price}</span>
			        <i class="bi bi-bag-plus-fill add-cart"></i>  
            	</div>
            </div>
        `
    }   

//renderProdcuts() 