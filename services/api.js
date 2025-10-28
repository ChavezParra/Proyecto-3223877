function callAPI() {
try {
// Simula una llamada a una API
throw new Error("Error simulado en la API");
} catch (error) {
handleError(error);
}
}
function handleError(error) {
console.error("Ocurrió un problema con la API:", error.mensage);
}
module.exports = { callAPI, handleError };
