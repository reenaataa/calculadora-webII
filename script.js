function insertToScreen(data){
    document.querySelector('#screen').value += data
}

function clean(){
    document.querySelector('#screen').value = ''
}

function backspace(){
    const screen = document.querySelector('#screen')
    screen.value = screen.value.slice(0,-1)
}

function calcular(){
    const screen = document.querySelector('#screen')
    try {
        screen.value = eval(screen.value)
    } catch {
        screen.value = 'Error'
    }
}

function raiz() {
    const screen = document.querySelector('#screen');
    try {
        screen.value = Math.sqrt(eval(screen.value));
    } catch {
        screen.value = 'Error';
    }
}

function porcentagem() {
    const screen = document.querySelector('#screen');
    try {
        screen.value = eval(screen.value) / 100;
    } catch {
        screen.value = 'Error';
    }
}
