



relogio = () => {
    ///// chamando o elemento onde o relogio sera renderizado
        const relogio = document.getElementById('relogio');
        const dataAtual = document.getElementById('data');

        const data = new Date()

        relogio.innerText = `${data.toLocaleTimeString()}`;
        dataAtual.innerText = `${data.toLocaleDateString()}`; 
}   
////// time relogio
setInterval(relogio, 1000)