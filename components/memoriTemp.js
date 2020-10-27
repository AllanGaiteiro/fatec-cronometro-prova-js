//// chamar o elemento que armazenara os tempos
var posit = document.getElementById('positColunas')

var tempoGuard = {};

//// limpar elemento e variavel que armazenam memoria
CleanMemori = () => {
    posit.innerHTML = ''
    tempoGuard = {
        min: time.min,
        seg: time.seg,
        decSeg: time.decSeg
    }
}
//// guardar o tempo na variavel
GuardaTemp = (m, s, d) => {
    tempoGuard = {
        min: m,
        seg: s,
        decSeg: d
    }


}

Tempo = (m, s, d) => {
    let min = (m < 10) ? '0' + m : m;
    let seg = (s < 10) ? '0' + s : s;
    let dec = (d < 10) ? '0' + d : d;
    min = (min == NaN) ? 00 : min;
    seg = (seg == NaN) ? 00 : seg;
    dec = (dec == NaN) ? 00 : dec;
    return `${min}:${seg}:${dec}`
}

TempAtual = (time, tempoGuard) => {
    var atual = (time.min * 6000) + (time.seg * 100) + (time.decSeg);
    var guard = (tempoGuard.min * 6000) + (tempoGuard.seg * 100) + (tempoGuard.decSeg);
    
    guard = (typeof(guard) == typeof(1)) ? guard : 00 ;
    var temp = atual - guard
    var min = Math.floor(temp / 6000)
    var seg = Math.floor((temp - min) / 100)
    var dec = (temp - ((min * 6000) + (seg * 100)))
    return Tempo(min, seg, dec)
}

CriateColun = (tempoGuard, time) => {
    let tr = document.createElement('tr')
    for (let i = 0; i < 3; i++) {
        let td = (i == 0) ? document.createElement('th') : document.createElement('td');
        if (i == 0) {
            td.scope = 'row'
            td.innerText = document.getElementsByTagName('tr').length
        } else if (i == 1) {
            td.innerText = TempAtual(time, tempoGuard)
        } else if (i == 2) {
            td.innerText = Tempo(time.min, time.seg, time.decSeg)
            GuardaTemp(time.min, time.seg, time.decSeg)
        }
        tr.appendChild(td)
    }
    posit.appendChild(tr)

}
//// iniciar o memorizador
menuMemTemp = () => {
    CriateColun(tempoGuard, time)
}
