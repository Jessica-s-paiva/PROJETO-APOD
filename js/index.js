$("#imagem").hide();
$("p").hide();
$("#enviar").click(function(event){
    event.preventDefault();
    const data = $("#data").val();
    const dataAtual = new Date;
    dataAtual.getDay();
    console.log(dataAtual);

    try {
        
    } catch (error) {
        if(data == '1995-06-16') throw new Error("Digite uma data válida");  
    }

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?date=${data}&api_key=w1d9wvAkhHPGhaGl6WqpJYk444B9CYxJWiaBEPlZ`, 
        success: function (resposta){
            $("#dataDaImagem").text(resposta.date);
            $("#tituloDaImagem").text(resposta.title);
            $("#imagem").attr("src", `${resposta.hdurl}`);
            $("#imagem").show();
            $("p").show();
            $("#info").text(resposta.explanation);
        }
    })
})

