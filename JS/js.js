let obj;
fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => {
        obj = json;
    })
    .then(() => {
        console.log(obj);
        document.getElementById("imagenPerfil").src = obj.results[0].picture.large;
        document.getElementById("nombreCompleto").innerHTML = obj.results[0].name.first + " " +  obj.results[0].name.last;
        document.getElementById("edad").innerHTML = obj.results[0].dob.age + " Años";
        document.getElementById("telefono").innerHTML = obj.results[0].cell;
        document.getElementById("direccion").innerHTML = obj.results[0].location.street.name + " " +  obj.results[0].location.street.number + ", " + obj.results[0].location.city + " " + obj.results[0].location.country;
        document.getElementById("email").innerHTML = obj.results[0].email;
    });

1
