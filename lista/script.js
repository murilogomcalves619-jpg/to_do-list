let total = 0;

function adicionarTarefa() {
    let tarefaInput = document.getElementById('tarefa');
    let horasInput = document.getElementById('horas');
    let impostoInput = document.getElementById('imposto');

    let tarefa = tarefaInput.value.trim();
    let horas = parseFloat(horasInput.value);
    let imposto = parseFloat(impostoInput.value);

    
    if (!tarefa || isNaN(horas) || horas <= 0 || isNaN(imposto) || imposto < 0) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    let valorBase = horas * 50;
    let valorFinal = valorBase + (valorBase * imposto / 100);

    let tabela = document.getElementById('corpo-tabela');
    let linha = tabela.insertRow();

    linha.innerHTML = `
        <td>${tarefa}</td>
        <td>${horas}h</td>
        <td>${imposto}%</td>
        <td>R$ ${valorFinal.toFixed(2)}</td>
        <td><button class="btn-delete" onclick="remover(this, ${valorFinal})">Excluir</button></td>
    `;

    total += valorFinal;
    atualizarTotal();

    tarefaInput.value = "";
    horasInput.value = "";
    impostoInput.value = "";
    tarefaInput.focus();
}

function remover(btn, valor) {
    let linha = btn.parentNode.parentNode;
    linha.remove();

    total -= valor;
    atualizarTotal();
}

function atualizarTotal() {
    document.querySelector('#total span').innerText =
        "R$ " + total.toFixed(2).replace('.', ',');
}