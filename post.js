const API_URL = 'http://localhost:65004/api/VerPost';
const HTTPResponse = document.querySelector("#app");
const ul = document.createElement('ul');

fetch(`http://localhost:65004/api/VerPost`, { mode: 'no-cors'})
    .then((response) => response.json())
    .then((users) => {
        users.forEach(user => {
            //user.forEach(u => {
                let elem = document.createElement("li");
                //console.log(elem);
                elem.appendChild(
                    document.createTextNode(`${user.Nickname} - ${user.FechaPublicacion} - ${user.Contenido} - ${user.CantidadLikes} - ${user.CantidadLikes}`)
                );
                ul.appendChild(elem);
            //});


        });
        HTTPResponse.appendChild(ul);
    });