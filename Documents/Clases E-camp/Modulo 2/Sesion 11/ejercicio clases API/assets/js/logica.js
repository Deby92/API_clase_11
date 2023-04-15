const URL_BASE = 'https://jsonplaceholder.typicode.com';
const URL_POSTS = URL_BASE + '/posts';
let contenido = document.getElementById("contenido");

function tabla(datos) {
    contenido.innerHTML = "";

    for (let temp of datos) {
        contenido.innerHTML += ` <tr>
        <th scope="row">${temp.userId}</ th>
        <td>${temp.id}</td>
        <td>${temp.title}</td>
        <td>${temp.body}</td>
    </tr> `;
        if (temp.id == 10) {
            break
        }

    }
}
fetch(URL_POSTS)
    .then(response => response.json())
    .then(datos => {
        tabla(datos);
    });
