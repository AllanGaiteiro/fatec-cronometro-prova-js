

//// variaveis globais
var time = {
    min: 00,
    seg: 00,
    decSeg: 00
};
var tmp
var Crono = document.getElementById('cronometro');
var statusTemp = false;








Temporizador = () => {
    time.decSeg++;
    if (time.decSeg == 99) {
        time.decSeg = 00;
        time.seg++
    } else if (time.seg == 59) {
        time.seg = 00
        time.min++
    }
}
///// botao Reset
Reset = () => {
    time.decSeg = 0;
    time.seg = 0;
    statusTemp = true;
    CleanMemori()
    Stop()

}


///// botao Stop
Stop = () => {
    if (statusTemp == false) {
        statusTemp = true;
        tmp = setInterval(Temporizador, 1000 / 100);
    }else{
        statusTemp = false;
        clearInterval(tmp)
    }   
    
}

///// botao Start 
Start = () => {
    if (statusTemp == false) {
        statusTemp = true;
        tmp = setInterval(Temporizador, 1000 / 100);
    }
}

formatCrono = (c,m,s,d) => {
    let min = (m<10)? '0'+m: m; 
    let seg = (s<10)? '0'+s: s;
    let dec = (d<10)? '0'+d: d;

    c.value =  `${min}:${seg}:${dec}`
}
//// Aplicasao onde renderiza todas as funcoes
CronoApp = () => {
    formatCrono(Crono, time.min,time.seg,time.decSeg)
    setTimeout(CronoApp, 1000 / 100)
}


menuCrono = (val) => {
    ((val == 'Start') && (Start()));
    ((val == 'Stop') && (Stop()));
    ((val == 'Reset') && (Reset()));
    CronoApp()
}
