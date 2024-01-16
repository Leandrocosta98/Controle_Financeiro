const ent = document.querySelector('input#ent');
const desc = document.querySelector('input#descrip');
const sel = document.querySelector('select#list');
const res = document.querySelector('div#res');

const ven = document.querySelector('p#ve');
const vsd = document.querySelector('p#vs');
const sld = document.querySelector('p#sl');

const tip = document.getElementsByName('tipo');

let entrada = [];
let saida = [];

function verificarCampos(){
    if(!desc.value) {
        window.alert("Adicone uma descrição");
        return false;
    }
     else if (ent.value < 1 && ent.value -1){
        window.alert("Adicione um valor");
        return false;
    }

    if(!tip[0].checked && !tip[1].checked){
        window.alert("Selecione se sua movimentação é uma entrada ou saída");
        return false;
    }
    return true;
}

function adicionarEntradaSaida() {
    let item = document.createElement("option");
    let entradaConvertida = Number(ent.value);
    let saldoConvertido = Number(sld.innerText);

    if (tip[0].checked){
        entrada.push(entradaConvertida);
        item.style.color = "blue";
        saldoConvertido += entradaConvertida;
        sumAllEntrada();
    }
    else if (tip[1].checked) {
        saida.push(entradaConvertida);
        item.style.color = "red";
        saldoConvertido -= entradaConvertida;
        sumAllSaida();
    }

    item.text = `${desc.value}:  ${new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(entradaConvertida)}`;
      sel.appendChild(item);

      sld.textContent = saldoConvertido;


    desc.value = ""
    ent.value = ""

}

function adicionar() {
    if (verificarCampos()) { 
        adicionarEntradaSaida();
    }

}

function sumAllEntrada() {
    let soma = 0;
    for (let i = 0; i < entrada.length; i++) {
        soma += Number(entrada[i]);
    }

    ven.textContent = soma.toLocaleString('pt-br', {style:'currency', currency:'BRL'})
}

function sumAllSaida() {
    let soma = 0;
    for (let i = 0; i < saida.length; i++) {
      soma += saida[i];
    }
  
    vsd.textContent = soma.toLocaleString('pt-br', {style:'currency', currency:'BRL'})
}

