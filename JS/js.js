let obj;
fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => {
        obj = json;
    })
    .then(() => {
        console.log(obj);
        document.getElementById("imagenPerfil").src = obj.results[0].picture.medium;
    });



    // const obj = JSON.parse(json);
    // console.log(obj);
    // document.getElementById("imagenPerfil").src = obj.results.picture.medium;
1
