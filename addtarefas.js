'use strict';

function addTask() {
    var assuntoTarefa = document.getElementById('assuntoTarefa').value;
    var dataTarefa = document.getElementById('dataTarefa').value;
    var descricaoTarefa = document.getElementById('descricaoTarefa').value;
    var listaTarefas = document.getElementById('listaTarefa');

    if (assuntoTarefa === '' || dataTarefa === '' || descricaoTarefa === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    } else {
        const box = document.getElementById('box')
        box.classList.add('hidden')

        var container = document.createElement('div');
        container.classList.add('containerTarefas')
        container.innerHTML = `
            <strong>${assuntoTarefa}</strong>
            <p>Data: ${dataTarefa}</p>
            <p>Descrição: ${descricaoTarefa}</p>
            <button onclick="removerTarefa(this)" class="teste">Remover</button>
        `;
        listaTarefas.appendChild(container);


        document.getElementById('assuntoTarefa').value = '';
        document.getElementById('dataTarefa').value = '';
        document.getElementById('descricaoTarefa').value = '';

    }
}

function removerTarefa(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}

const button = document.getElementById('buttonn')
const buttonAddTarefa = document.getElementById('addTarefa');
const box = document.getElementById('box')

window.onload = () => {
    button.addEventListener('click', () => {
        box.style.visibility = 'visible'
    })

    buttonAddTarefa.addEventListener('click', () => {
        addTask()
        box.style.visibility = 'hidden'
    })
}