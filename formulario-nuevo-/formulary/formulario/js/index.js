var row = "";
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

function doSearch() {
    const tableReg = document.getElementById("datos");

    const searchText = document.getElementById("searchTerm").value.toLowerCase();

    let total = 0;

    // Recorremos todas las filas con contenido de la tabla

    for (let i = 1; i < tableReg.rows.length; i++) {
        // Si el td tiene la clase "noSearch" no se busca en su cntenido

        if (tableReg.rows[i].classList.contains("noSearch")) {
            continue;
        }

        let found = false;

        const cellsOfRow = tableReg.rows[i].getElementsByTagName("td");

        // Recorremos todas las celdas

        for (let j = 0; j < cellsOfRow.length && !found; j++) {
            const compareWith = cellsOfRow[j].innerHTML.toLowerCase();

            // Buscamos el texto en el contenido de la celda

            if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {
                found = true;

                total++;
            }
        }

        if (found) {
            tableReg.rows[i].style.display = "";
        } else {
            // si no ha encontrado ninguna coincidencia, esconde la

            // fila de la tabla

            tableReg.rows[i].style.display = "none";
        }
    }

    // mostramos las coincidencias

    const lastTR = tableReg.rows[tableReg.rows.length - 1];

    const th = lastTR.querySelector("th");

    lastTR.classList.remove("hide", "red");

    if (searchText == "") {
        lastTR.classList.add("hide");
    } else if (total) {
        th.innerHTML =
        
            "Se ha encontrado " + total + " coincidencia" + (total > 1 ? "s" : "");
    } else {
        lastTR.classList.add("red");

        th.innerHTML = "No se han encontrado coincidencias";
    }
}
function deleteRows(){
	var table = document.getElementById('datos');
	var rowCount = table.rows.length;
	if(rowCount > '1'){
		var row = table.deleteRow(rowCount-1);
		rowCount--;
	}
	else{
		alert('Debe aver almenos una fila xd');
	}
}