const nombre = prompt("Ingresa tu nombre completo:");
let edad = Number(prompt("Ingresa tu edad:"));
const ocupacion = prompt("Ingresa tu ocupación:");

try {
    if (isNaN(edad) || edad < 18) {
        throw new Error("Edad inválida o menor de 18. Debes ser mayor de edad.");
    }
} catch (error) {
    alert("Ocurrió un error: " + error.message);
    console.error(error);
}

function crearPerfilHTML(usuario) {
    let hobbiesHTML = '';
    usuario.hobbies.forEach(hobby => {
        hobbiesHTML += `<li>${hobby}</li>`;
    });
    
    return `
        <h2>Perfil de ${usuario.nombre}</h2>
        <p><strong>Edad:</strong> ${usuario.edad} años</p>
        <p><strong>Ocupación:</strong> ${usuario.ocupacion}</p>
        <h3>Hobbies:</h3>
        <ul>${hobbiesHTML}</ul>
    `;
}

