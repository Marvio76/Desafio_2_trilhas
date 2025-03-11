// Seleciona todos os inputs do tipo radio
const radios = document.querySelectorAll('input[type="radio"]');

// Adiciona um ouvinte de evento para todos os radio buttons
radios.forEach(radio => {
    radio.addEventListener('change', function() {
        // Remove a borda laranja de todas as trilhas
        document.querySelectorAll('.trilha').forEach(trilha => {
            trilha.style.border = '2px solid #DCDCDC';
        });

        // Adiciona a borda laranja ao contêiner selecionado
        if (this.checked) {
            this.closest('.trilha').style.border = '2px solid orange';
        }
    });
});

// Função para resetar as bordas ao enviar ou cancelar o formulário
function resetBorders() {
    document.querySelectorAll('.trilha').forEach(trilha => {
        trilha.style.border = '2px solid #DCDCDC';
    });
}

// Adiciona evento ao botão de enviar
document.querySelector('.input__enviar').addEventListener('click', resetBorders);

// Adiciona evento ao botão de cancelar
document.querySelector('.input__cancelar').addEventListener('click', resetBorders);
