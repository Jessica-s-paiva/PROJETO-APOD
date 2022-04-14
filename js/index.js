$("#imagem").hide();
$("p").hide();
$("#video").hide();

$("#enviar").click(function(event){
    event.preventDefault();
    const data = $("#data").val();
    console.log(data);
    const dataTeste = new Date();
    const dia = String(dataTeste.getDate()).padStart(2,'0');
    const mes = String(dataTeste.getMonth() + 1).padStart(2,'0');
    const ano = dataTeste.getFullYear();
    const dataAtual = `${ano}-${mes}-${dia}`;
    const partesData = data.split("-");
    try {
        console.log(partesData);
        $.ajax({
            url: `https://api.nasa.gov/planetary/apod?date=${data}&api_key=w1d9wvAkhHPGhaGl6WqpJYk444B9CYxJWiaBEPlZ`, 
            success: function (resposta){
                $("#dataDaImagem").text(resposta.date);
                $("#tituloDaImagem").text(resposta.title);
                if(resposta.media_type == 'video'){
                    $("#video").attr("src", `${resposta.url}`);
                    $("#video").show();
                }else if(resposta.media_type == 'image'){
                    $("#imagem").attr("src", `${resposta.hdurl}`);
                    $("#imagem").show();
                }
                $("p").show();
                $("#info").text(resposta.explanation);
            }
        })  
    } catch (error) {
        if(parseInt(partesData[0]) < 1996) throw new Error("Digite uma data válida");  
        if(parseInt(partesData[1]) <= 06 && (partesData[2]) < 16) throw new Error("Digite uma data válida");
    }

})

