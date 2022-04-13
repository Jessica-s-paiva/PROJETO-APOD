$("#imagem").hide();
$("#enviar").click(function(event){
    event.preventDefault();
    const data = $("#data").val();
    console.log(data);

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?date=${data}&api_key=w1d9wvAkhHPGhaGl6WqpJYk444B9CYxJWiaBEPlZ`, 
        success: function (resposta){
            $("#dataDaImagem").text(resposta.date);
            $("#tituloDaImagem").text(resposta.title);
            $("#imagem").attr("src", `${resposta.hdurl}`);
            $("#imagem").show();
            $("#info").text(resposta.explanation);
        }
    })
})

