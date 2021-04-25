var button = document.getElementById('cButton')
var container = document.getElementById('container')
var body = document.getElementById('body')
var n_d = 1

function night() {
    if (n_d == 0) {
        button.style.left = '8.55%'
        button.style.color = '#370653'
        container.style.color = '#7830a1'
        body.style.backgroundColor = '#250633'
        n_d = 1
    } else {
        button.style.left = '5.1%'
        button.style.color = ''
        container.style.color = ''
        body.style.backgroundColor = ''
        n_d = 0
    }
}

function enter() {
    body.style.cursor = 'pointer'
}

document.onchange = night()

if (localStorage.getItem('local') != null) {
    document.querySelector('select#localViagem').value = localStorage.getItem('local')
} else {
    document.querySelector('select#localViagem').value = 'n/a'
}

const localViagem = function() {
    var local = document.querySelector('select#localViagem').value
    localStorage.setItem('local', local)
    console.log(`Local alterado com sucesso: ${local}`)
}
document.onchange = localViagem
