
//---------Simulador Interactivo-----//

//-- Realize un simulador de reserva de mesas de restaurant utilizando funciones-condicionales y ciclo.---//





function datos(){
    alert('Reserva tu cena en kansas \n Si reservas mas de 2 mesas tenes  un descuento del 10% ');
    
    }
    
    datos()
    
    let edad = parseInt (prompt('ingrese su edad:'))
    
    
    while (edad < 18){ 
        alert("Debes ser mayor de edad para realizar la reserva") 
        edad = parseInt (prompt('ingrese su edad:')) 
    }
    
    let mesa = parseInt (prompt('ingrese cantidad de mesas que desea reservar'))
    
    const valorMesa = 40
    
    const promo = 0.1
    
    let valorPromo = valorMesa*mesa
    
    let promoAplicada = (valorMesa - (valorPromo*0.1))
    
    function promosi(){
        alert("aplicas al descuento")
        alert("Tu total con descuento es "+""+(promoAplicada))
    }
    
    function promono(){   
        alert("no aplicas al descuento")
        alert("Tu total es "+""+(valorPromo))
    }
    
    if (mesa > 2) {
    
        promosi()
        alert("Disfruta tu descuento, gracias por tu reserva!")
        

        
        
    }else{
        promono()
        alert("Gracias por tu reserva!")
        
    }
    



