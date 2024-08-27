function encriptar() {
    const texto = document.getElementById("inputText").value;
    const textoEncriptado = btoa(texto); // Encriptar usando Base64
    document.getElementById("resultText").value = textoEncriptado;
}

function desencriptar() {
    const textoEncriptado = document.getElementById("inputText").value;
    try {
        const textoDesencriptado = atob(textoEncriptado); // Desencriptar usando Base64
        document.getElementById("resultText").value = textoDesencriptado;
    } catch (e) {
        alert("El texto ingresado no es un texto encriptado válido.");
    }
}

function copiarTexto() {
    const textoEncriptado = document.getElementById("resultText");
    textoEncriptado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
    
    // Borrar el contenido del campo de resultado después de copiar
    textoEncriptado.value = '';
}

// Añadir el efecto de "Matrix" al fondo
window.onload = function() {
    const matrixBackground = document.createElement('div');
    matrixBackground.classList.add('matrix-background');

    for (let i = 0; i < 50; i++) {
        const matrixColumn = document.createElement('div');
        matrixColumn.classList.add('matrix-column');
        matrixColumn.style.left = `${Math.random() * 100}vw`;
        matrixColumn.style.animationDuration = `${Math.random() * 5 + 5}s`;
        
        for (let j = 0; j < 20; j++) {
            const span = document.createElement('span');
            span.textContent = String.fromCharCode(0x30A0 + Math.random() * 96);
            span.style.animationDelay = `${j * 0.1}s`;
            matrixColumn.appendChild(span);
        }
        
        matrixBackground.appendChild(matrixColumn);
    }

    document.body.appendChild(matrixBackground);
};
