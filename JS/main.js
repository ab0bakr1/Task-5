var AllProdeuct = document.querySelectorAll(".AllProdeuct li");
var Cart = document.getElementById("cart");
var Num = document.getElementById("num");
var Btn = document.getElementById("btn");
var Total = document.getElementById("Total");
var TotalPrice = 0;

AllProdeuct.forEach(function (item){
    item.onClick = function(){
        TotalPrice += +(item.getAttribute("price"));
        Cart.innerHTML += item.textContent +" = " + item.getAttribute("price")+" SAR" + " || ";
        Num.innerHTML = Cart.innerHTML.split("||").length-1
        if(Cart.innerHTML != ""){
            Btn.style.display="block"
            Btn.style.cursor="pointer"
            Btn.style.padding="5px 10px"
            Btn.style.borderRadius="5px"
            Btn.style.backgroundColor="black"
            Btn.style.color="white"
        }
    }
    Btn.onClick = function(){
        Total.innerHTML = TotalPrice + " SAR";
    }
})