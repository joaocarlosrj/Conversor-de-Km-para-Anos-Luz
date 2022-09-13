function Event(){
    var valorRecebido = document.getElementById("numero") 
    var valor = valorRecebido.value
    var numeroEmKm = parseFloat(valor)

    var anosluz = numeroEmKm *  0.00000000000010570
    var valorConvertido = document.getElementById("valorConvertido")
    var valorImpresso = `Para percorrer ${numeroEmKm} km gasta-se ${anosluz} anos luz.`
    valorConvertido.innerHTML = valorImpresso
}