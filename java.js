function onSubmit( form ){
    var data = JSON.stringify( $(form).serializeArray() );
    console.log( data );
    return false; 
    }
    
    function multiplyBy()
    {
    num1 = document.getElementById("firstNumber").value;
           document.getElementById("result").innerHTML = Math.pow(num1, 2);
    }
    
    function multiplyByAddNumSubtractOne()
    {
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result2").innerHTML = ((num2 * num2) + (num2 - 1));
    }
    
    function enviar_mensaje(){
    var a = document.getElementById("chat-input");
    if ("" != a.value) {
    var b = document.getElementById("get-number").innerHTML,c = document.getElementById("chat-input").value, d = "https://web.whatsapp.com/send", e = b,  f = "&text=" + c;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) var d = "whatsapp://send";  var g = d + "?phone=" + e + f;  window.open(g, "_blank");
    }
    }
     
    const whatsapp_chat =document.getElementById("whatsapp-chat");
       
    function cerrar_chat(){
    whatsapp_chat.classList.add("hide");
    whatsapp_chat.classList.remove("show");
    }
       
    function mostrar_chat(){
    whatsapp_chat.classList.add("show");
    whatsapp_chat.classList.remove("hide");
    }
      // ampliar imagenes al acercar ratón
      $("main img").hover(function(){
           $(this).stop().animate({ padding: '5%'}) // animate
         }, function(){
           $(this).stop().animate({ padding: '0%'}) 
         }); // click en la imagen
           
           // desplegar hijos (no recomendado por usabilidad)
         $(".dropdown").click(function(){
           $(this).children().not($(".dropbtn")).slideToggle(1000)
         });
         
           //cambio tamaño letra
         $("#btnFuente").click(3000, function(){
            if($("body").css('font-size') == fuenteActual){
               $("body").animate({ fontSize: '22px'}) // animate
               $(this).val("Resetear letra")
            }else{
                $("body").animate({ fontSize: fuenteActual})
                $(this).val("Aumentar letra") 
            }
             
           });
             
         $("#btnAudio").click(function(){
             if ($("#miPlayer").is(":visible")){
                 $("#miPlayer").slideUp();
                 $(this).val("Mostrar control de audio")
             } else {
                 $("#miPlayer").slideDown(); 
                 $(this).val("Ocultar control de audio")
             }
         })
           
           
         }); //document ready