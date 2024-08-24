export function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{1,8}$/;
    let message = "";
    if (regex.test(password)) {
        message = "Contraseña válida";
    } else {
        message = "Contraseña no válida. Debe tener un máximo de 8 caracteres, incluye al menos una mayúscula, un número y un carácter especial.";
    }
    return message;
}
export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let message = "";
    
    if (regex.test(email)) {
        message = "Correo válido";
    } else {
        message = "Correo no válido. Debe contener un formato válido con '@' y un dominio.";
    }

    return message;
}