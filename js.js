/ Variables
objeto={
  nombre:'',
  correo:'',
  whatsapp:'',
  custom:'',
  estilo:''  
};
data = [];
const contenedor = document.getElementById('dinamico');

function enviar(){
  //Otorgo los valores en el evento de click de los inputs
  this.objeto.nombre = document.getElementById("nombre").value;
  this.objeto.correo = document.getElementById("correo").value;
  this.objeto.whatsapp = document.getElementById("whatsapp").value;
  this.objeto.custom = document.getElementById("custom").value;
   this.objeto.estilo = document.getElementById("estilo").value;
  //Si no se pasa algún valor enviar un alert para no continuar
  if(this.objeto.nombre == "" || this.objeto.correo == "" || this.objeto.whatsapp == "" || this.objeto.custom == "" || this.objeto.estilo == ""){
    //Validamos para saber que datos están bien y cuales faltan cambiando el color
    alert("Necesitas llenar todos los campos obligatorios");
    this.objeto.nombre == "" ? document.getElementById("nombre").className += ' is-invalid': document.getElementById("nombre").className += ' is-valid';
     this.objeto.correo == "" ? document.getElementById("correo").className += ' is-invalid': document.getElementById("correo").className += ' is-valid';
    this.objeto.whatsapp == "" ? document.getElementById("whatsapp").className += ' is-invalid': document.getElementById("whatsapp").className += ' is-valid';
     this.objeto.custom == "" ? document.getElementById("custom").className += ' is-invalid': document.getElementById("custom").className += ' is-valid';
     this.objeto.estilo == "" ? document.getElementById("estilo").className += ' is-invalid': document.getElementById("estilo").className += ' is-valid';
  }else{
    //Agregamos información a otro contenedor de objetos
    this.data.push(this.objeto);
    this.objeto={
  nombre:'',
  correo:'',
  whatsapp:'',
  custom:'',
  estilo:''  
};
    this.pintarCards();
      
  };

};

function eliminarTodo(){
  contenedor.innerHTML = "";
  this.data =[];
};

function eliminarUno(index){
  this.data.splice(index, 1);
  this.pintarCards();
};

function pintarCards(){
       // Esto es para eliminar lo antarior y no se dupliquen las cards
     contenedor.innerHTML = "";
     // Iteramos la información donde result es nuestra data y idx es nuestro indice 
     this.data.forEach((result, idx) => {
       //Utilizamos algunas clases boostrap para darle mejor estilo y verlo en una card
      const card = document.createElement('div');
      card.classList = 'card-body'; 
      // Estas comillas `` son utilizadas para poder meter variables y mostrarlas con $ 
      const content = `
    <div class="card">
    <div class="card-header" id="heading-${idx}">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">

                </button>
      </h5>
    </div>

    <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
      <div class="card-body">

        <h5>Nombre del solicitante: ${result.nombre}</h5>
        <p>Correo del solicitante: ${result.correo}</p>
        <p>Whatsapp del solicitante: ${result.whatsapp}</p>
        <p>Información del custom: ${result.custom}</p>
        <p>Diseño: ${result.estilo}</p>
        <button type="button"  class="btn btn-danger" onclick="eliminarUno(${idx})"  >Eliminar</button>

      </div>
    </div>
  </div>
  `;
      // Sumamos el content de la card para mostrarlo de forma dinámica
      contenedor.innerHTML += content;
    
    });
}