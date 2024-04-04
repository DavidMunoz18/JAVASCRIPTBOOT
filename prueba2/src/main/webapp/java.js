/**
 * 
 */
let totalArticulos = 0;
let totalPrecio = 0;

// Función para agregar un artículo al carrito
function agregarArticulo() {
    totalArticulos++;
    totalPrecio += 1; // Precio por artículo es $1 (puedes cambiar esto según tus necesidades)
    
    // Actualizar el contenido de los elementos HTML
    document.getElementById("totalArticulos").innerText = totalArticulos;
    document.getElementById("totalPrecio").innerText = totalPrecio.toFixed(2);
}

// Función para eliminar un artículo del carrito
function eliminarArticulo() {
    if (totalArticulos > 0) {
        totalArticulos--;
        totalPrecio -= 1; // Precio por artículo es $1 (puedes cambiar esto según tus necesidades)
        
        // Actualizar el contenido de los elementos HTML
        document.getElementById("totalArticulos").innerText = totalArticulos;
        document.getElementById("totalPrecio").innerText = totalPrecio.toFixed(2);
    }
}