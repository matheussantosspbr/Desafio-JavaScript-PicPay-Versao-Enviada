function Cadastrar() {
    var nome = document.getElementById("nome").value;
    var sobr = document.getElementById("sobrenome").value;
    var data = document.getElementById(String("nascimento")).value;
    var menor = "Menor de Idade";
    document.getElementById("res").innerHTML= (`Nome: ${nome} ${sobr} <br> Data de Nascimento ${data} <br> ${menor}`);
}