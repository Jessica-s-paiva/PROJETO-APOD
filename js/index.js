$("#enviar").click(function(event){
    event.preventDefault();
    const data = $("#data").val();
    console.log(data);

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?date=${data}&api_key=w1d9wvAkhHPGhaGl6WqpJYk444B9CYxJWiaBEPlZ`, 
        success: function (resposta){
            $("#dataDaImagem").text(resposta.date);
            $("#tituloDaImagem").text(resposta.title);
            $("#imagem-retorno").attr("src", `${resposta.hdurl}`);
            $("#info").text(resposta.explanation);
        }
    })
})

