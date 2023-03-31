 var remove_btn = document.getElementsByClassName('delete')
    console.log(remove_btn);
    for(var i=0;i<remove_btn.length;i++){
      var button=remove_btn[i]
      button.addEventListener('click',function(event){
     var button_clicked=event.target;
     button_clicked.parentElement.remove()
      })
    }
      
    function updateCartTotal(){
      var cartItemContainer=document.getElementsByClassName('store_items')[0]
      cartItemContainer.getElementsByClassName('item')
      for(var i=0;i<item.length;i++){
        var item=items[i]
        var priceItem=item.getElementsByClassName('price')[0]
        var quantityElement=item.getElementsByClassName('cart-quantity-input')[0]
        var price=priceItem.innerText
        console.log(price)
        }
    }

   var btnvar1=document.getElementById('btn');
   var btnvar=document.getElementById('btn1');
    
   function Toggle0(){
    if(btnvar1.style.color=="red"){
      btnvar1.style.color='grey'
    }else{btnvar1.style.color='red'}
  }
  
  
function Toggle1(){
  if(btnvar.style.color=="red"){
    btnvar.style.color='grey'
  }else{btnvar.style.color='red'}
}


let incriment=() =>{
  console.log("incriment")
};
let decrement=() =>{
  console.log("decrement")
};

