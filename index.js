var cart = [];


function getCart() {
  
 return cart;
 
}

function setCart(c) {
  
  cart = c;
  return cart;
  
}

function addToCart(item) {
  
var price = Math.floor(Math.random()*100);
  
var itemAndPrice = {
  itemName: item,
  itemPrice: price
};
  
cart.push(itemAndPrice);

 return `${item} has been added to your cart.`;
}


function viewCart() {

if (cart.length === 0)
{
  return `Your shopping cart is empty.`;
  
} 
  
else 
{
    var items = [];
    for (var i = 0; i < cart.length; i++) 
    {
      for (var item in cart[i]) {
        items.push(item + " at $" + cart[i][item]);
      }
}
    return `In your cart, you have `+ items.join(", ") + `.`;
    }


}



    
 function total() 
{
    
 
  var totalPrice = 0;
  
  for(var i = 0; i < cart.length; i++) 
  {
    for (var item in cart[i]) 
    {
    totalPrice += cart[i][item];
    }
    
  }
  
  return totalPrice;

}



function removeFromCart(item) {

  
 
  let itemInCart = false
   for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }
   if (!itemInCart) {
    console.log("That item is not in your cart.")
  }
   return cart
   
}


function placeOrder(cardNumber) {

  if (cardNumber)
  {
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    for (var i = cart.length; i>= 0; i--) 
    {
      cart.pop();
      
        return cart;
     }
  }
  return `Sorry, we don't have a credit card on file for you.`


  for (i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice([i], 1);
      return cart;
    }
  }
  console.log(`That item is not in your cart.`);
  return cart;
}

function placeOrder(cardNumber) {

  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    for (var i = cart.length; i>= 0; i--) {
      cart.pop();
  }
  }
  console.log(`Sorry, we don't have a credit card on file for you.`);
  return cart;

}



