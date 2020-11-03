



function Relogio(){
    ///// chamando o elemento onde o relogio sera renderizado
        const relogio = document.getElementById('relogio');
        const dataAtual = document.getElementById('data');

        const data = new Date()

        relogio.innerText = `${data.toLocaleTimeString()}`;
        dataAtual.innerText = `${data.toLocaleDateString()}`; 
        setTimeout(Relogio);
}   
////// time relogio
Relogio()