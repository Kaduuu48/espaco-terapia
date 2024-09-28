document.getElementById("btn-agendar").addEventListener("click", function() {
    document.getElementById("formulario-agendamento").style.display = "block";
});

document.getElementById("agendamentoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Pegando os valores do formulário
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var data = document.getElementById("data").value;
    var horario = document.getElementById("horario").value;

    // Montando a mensagem para o WhatsApp com concatenação
    var mensagem = "Olá, meu nome é " + nome + ". Gostaria de agendar uma consulta no dia " + data + " às " + horario + ". Meu telefone é " + telefone + ".";

    // Redirecionando para o WhatsApp com a mensagem
    window.open("https://api.whatsapp.com/send?phone=5518991233062&text=" + encodeURIComponent(mensagem), '_blank');
});

// Adicionando a funcionalidade para fechar o formulário
document.querySelector(".fechar").addEventListener("click", function() {
    document.getElementById("formulario-agendamento").style.display = "none";
});

// Função para preencher o campo de horário com intervalos de meia e meia hora
function preencherHorarios() {
    var select = document.getElementById("horario");
    var startTime = 8; // Início às 8h
    var endTime = 18;  // Fim às 18h

    for (var hour = startTime; hour < endTime; hour++) {
        for (var minute = 0; minute < 60; minute += 30) { // Intervalos de 30 minutos
            var time = (hour < 10 ? '0' : '') + hour + ':' + (minute < 10 ? '0' : '') + minute;
            var option = document.createElement("option");
            option.value = time;
            option.text = time;
            select.appendChild(option);
        }
    }
}

// Preencher o campo de horários ao carregar a página
window.onload = preencherHorarios;