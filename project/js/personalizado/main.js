//Created by Allyson 24/06/2020

alert("Hello");

function consultacep() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response);
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("ibge").innerHTML = response.ibge;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            //alert(response.cep);
        }
    })
}