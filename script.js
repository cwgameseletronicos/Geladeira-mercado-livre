function copiarCodigo() {
    // Seleciona o conteúdo do elemento com id "codigo"
    var codigo = document.getElementById("codigo");

    // Cria um elemento de textarea temporário
    var textoTemporario = document.createElement("textarea");
    textoTemporario.value = codigo.textContent;  // Pega o conteúdo do elemento

    // Adiciona o textarea temporário ao body
    document.body.appendChild(textoTemporario);

    // Seleciona o conteúdo do textarea
    textoTemporario.select();
    textoTemporario.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand("copy");

    // Remove o textarea temporário após a cópia
    document.body.removeChild(textoTemporario);

    // Alerta ou feedback visual para o usuário
    
}
