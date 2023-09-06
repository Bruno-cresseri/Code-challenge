document.addEventListener('DOMContentLoaded', function () {
        // CONSTANTES
            const URL = 'https://jsonplaceholder.typicode.com/users';
            const nombre = document.getElementById('name');
            const apellido = document.getElementById('last-name');
            const fechaNacimiento = document.getElementById('birth-date');
            const button = document.getElementById('submit');

            btn.addEventListener('click', () => {
                if (!nombre.value || !apellido.value || !fechaNacimiento.value) {
                    alert('Datos incompletos');
                } else {
                    // Datos a enviar
                    data = {
                        nombre: nombre.value,
                        apellido: apellido.value,
                        nacimiento: fechaNacimiento.value
                    }
    
                    fetch(URL, {
                        method: 'POST',
                        // Lo convierto en una cadena json
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then((res) => res.json())
                        .catch((error) => console.log("Error: ", error))
                        .then((response) => console.log("Success: ", response));
                }
                
            });
    })