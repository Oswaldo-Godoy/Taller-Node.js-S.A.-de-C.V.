/*

window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init(){
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
        if(empleados[i].name == req.body){
            body.innerHTML += `<h3> ${empleados[i].nombre}</h3>`;
        }
    }
}

*/

window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init() {
    if (!localStorage.getItem("token")) {
        window.location.href = "login.html";
    }
    else{
        document.querySelector('.btn-secondary').addEventListener('click', function () {
            window.location.href = "empleados.html"
        });

        document.querySelector('.btn-primary').addEventListener('click', addEmpleado);
    }
}

function addEmpleado() {
    var apPat = document.getElementById('input-apPat').value;
    var apMat = document.getElementById('input-apMat').value;
    var name = document.getElementById('input-name').value;
    var tel = document.getElementById('input-tel').value;
    var dir = document.getElementById('input-dir').value;
    var mail = document.getElementById('input-mail').value;
    var type = document.getElementById('input-type').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/empleados',
        data: {
            ap_Paterno: apPat,
            ap_Materno: apMat,
            nombre: name,
            telefono: tel,
            direccion: dir,
            correlElectronico: mail,
            tipo: type
        }
    }).then(function (res) {
        console.log(res);
        alert("Registro exitoso");
        window.location.href = "empleados.html";

    }).catch(function (err) {
        console.log(err);
    });

}