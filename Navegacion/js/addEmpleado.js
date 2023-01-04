window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init() {
    if (localStorage.getItem("token")) {
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        document.querySelector('.btn-secondary').addEventListener('click', function () {
            window.location.href = "empleados.html"
        });

        document.querySelector('.btn-primary').addEventListener('click', addEmpleado);
    }
    else {
        window.location.href = "login.html";
    }
}

function addEmpleado() {
    var apPat = document.getElementById('input-apPat').value;
    var apMat = document.getElementById('input-apMat').value;
    var name = document.getElementById('input-name').value;
    var tel = document.getElementById('input-tel').value;
    var dir = document.getElementById('input-dir').value;
    var mail = document.getElementById('input-mail').value;

    console.log(headers);
    console.log(name, apMat, apPat, tel, dir, mail);

    axios({
        method: 'post',
        url: 'http://localhost:3000/empleados',
        headers: {
            'Authorization': "bearer " + localStorage.getItem("token")
        },
        data: {
            ap_Paterno: apPat,
            ap_Materno: apMat,
            nombre: name,
            telefono: tel,
            direccion: dir,
            correlElectronico: mail,
        }
    }).then(function (res) {
        console.log(res);
        alert("Registro exitoso");
        window.location.href = "empleados.html";

    }).catch(function (err) {
        console.log(err);
    });

}
