var row="";
function guardar(texto) {

    const id = document.getElementById('id');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const addr = document.getElementById('add');
    row += `<tr>
        <th scope="row">${id.value}</th>
        <td>${nombre.value}</td>
        <td>${apellido.value}</td>
    </tr>`;
    addr.innerHTML = row;


}

function limpiarformulario(texto) {
    document.getElementById("id").value = '';
    document.getElementById("nombre").value = '';
    document.getElementById("apellido").value = '';
    alert(texto);
}
function eliminarcualquifila(){
    const tabla = document.getElementById("tabla");
    tablatitulo.addeventlistener("click",verificarclick);

    function verificarclick(e){
        console.log(e);
    }
}