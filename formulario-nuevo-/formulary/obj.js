//boton 1
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {

    }
};

function nombrecompleto() {
    document.getElementById('example').innerHTML = person.fullName();
}
// boton 2
const person2 = {
    id: "1",
    color: "azul",
    cantidad: 20,

    g: function () {
        return this.color + " " + this.cantidad;
    }
};

function silla() {
    document.getElementById('example2').innerHTML = person2.g();
}

//boton 3
const myobject = {
    name: "jhon",
    age: 30,
    cars: {
        cars1: "ford",
        cars2: "bmw",
        cars3: "fia",

    }
}
function recorrer() {
    for (let w in myobject) {
        if (w == "cars") {
            for (let r in myobject[w]) {
                alert(myobject[w][r]);

            }

        }

    }
}
