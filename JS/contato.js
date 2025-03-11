document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const alertBox = document.getElementById("alert");

        if (!nome || !email || !telefone) {
            alertBox.className = "alert alert-danger";
            alertBox.innerHTML = "Por favor, preencha todos os campos obrigatórios.";
            alertBox.classList.remove("d-none");

            // Muda a cor de fundo apenas da div #alert
            alertBox.style.backgroundColor = "red";
            alertBox.style.color = "white";
            alertBox.style.padding = "10px";
            alertBox.style.borderRadius = "5px";
            alertBox.style.marginTop = "20px";
        } else {
            alertBox.className = "alert alert-success";
            alertBox.innerHTML = "Formulário enviado com sucesso!";
            alertBox.classList.remove("d-none");

            // Muda a cor de fundo apenas da div #alert
            alertBox.style.backgroundColor = "green";
            alertBox.style.color = "white";
            alertBox.style.padding = "10px";
            alertBox.style.borderRadius = "5px";
            alertBox.style.marginTop = "20px";

            // Limpa o formulário após 2 segundos
            setTimeout(() => {
                document.getElementById("contact-form").reset();
                alertBox.classList.add("d-none");
            }, 2000);
        }
    });
});
