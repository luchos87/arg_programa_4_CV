let obj;
fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => {
        obj = json;
    })
    .then(() => {
        console.log(obj);        
        document.getElementById("nombreCompleto").innerHTML = obj.results[0].name.first + " " +  obj.results[0].name.last;
        document.getElementById("edad").innerHTML = obj.results[0].dob.age + " Años";
        document.getElementById("telefono").innerHTML = obj.results[0].cell;
        document.getElementById("direccion").innerHTML = obj.results[0].location.street.name + " " +  obj.results[0].location.street.number + ", " + obj.results[0].location.city + " " + obj.results[0].location.country;
        document.getElementById("email").innerHTML = obj.results[0].email;
        document.getElementById("imagenPerfil").src = obj.results[0].picture.large;
    });

function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
}  

document.getElementById('btnInfo').addEventListener('click', function() {
    highlightElement($('#informacion_personal'));
    document.getElementById("menuColapsable").classList.add('collapsed');
    document.getElementById("navbarNav").classList.remove('show');
});

document.getElementById('btnHabilidades').addEventListener('click', function() {
    highlightElement($('#habilidades'));
    document.getElementById("menuColapsable").classList.add('collapsed');
    document.getElementById("navbarNav").classList.remove('show');
});

document.getElementById('btnExperiencia').addEventListener('click', function() {
    highlightElement($('#experiencia'));
    document.getElementById("menuColapsable").classList.add('collapsed');
    document.getElementById("navbarNav").classList.remove('show');
});

function highlightElement(element) {
    const background = $('<div></div>');
    
    $(background).css({
            'position':'relative',
            'top':'-' + $(element).height() + 'px',
            'background-color':'#b35cfa',
            'z-index':'-10',
            'height':$(element).height() + 'px',
            'width':$(element).width() + 'px',
            'margin-bottom':'-' + $(element).height() + 'px',
            'padding':'0px',
            'float':'left',
            'opacity': '0.4',
            'border-radius': '25px',
    });

    $(background).appendTo(element);

    $(background).fadeOut(1000);

    return true;
};


