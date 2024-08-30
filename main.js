fetch('db14.json')
            .then(response => response.json()) // Convierte la respuesta a un objeto JSON
            .then(data => {
                console.log(data); // Muestra los datos JSON en la consola
                // Ejemplo de acceso a los datos
                console.log("Nombre:", data.nombre);
                console.log("Edad:", data.edad);
                console.log("Ciudad:", data.ciudad);
            })
            .catch(error => console.error('Error al leer el archivo JSON:', error));