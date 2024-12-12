// IIFE used

(function(){
    let inputItem = document.querySelector("#input");
    inputItem.onkeyup = function(e){
        if (e.keyCode=== 13){
            if(inputItem.value){ 
                // this if condition makes sure that empty string isnt being inserted
                let ul= document.querySelector("#list");
                let li  = document.createElement("li");
                // li.innerText= inputItem.value; ye bhi kr sakte
        
                let textNode= document.createTextNode(inputItem.value);
                li.appendChild(textNode);
        
                ul.appendChild(li);
                inputItem.value = "";
                // li.addEventListener("click",function(e){li.remove();}) ye bhi kar sakte
        
                li.onclick= function(e) {
                    e.target.remove();
                }
            }
            }
         
    };
    
}) ();



