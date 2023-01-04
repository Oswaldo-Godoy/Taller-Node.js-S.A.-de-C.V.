window.onload = init;
var headers = {};
var url = "http://localhost:3000";


function init(){
    console.log("Error aqui, y borre es un estupido");
    if(localStorage.getItem("token")){
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token") 
            }
        }
        loadEmpleados();
    }
    else{
        window.location.href = "index.html";
    }
}

function loadEmpleados() {
    axios.get(url +"/Empleados", headers).then(function(res){
        console.log(res);
        displayEmpleados(res.data.message);
    }).catch(function(err){
        console.log(err);
    })
}

function displayEmpleados(empleados){
    var body = document.querySelector("body");
    for(var i=0; i<empleados.length; i++){
        body.innerHTML += `<h3> ${empleados[i].nombre}</h3>`;
    }
}