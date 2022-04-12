const enviar = $('#enviar');
enviar.click(function(event) {
    event.preventDefault();
    const data = $('#data').val();
    const info = $('#info');
    
    const requisicao = new XMLHttpRequest();
    requisicao.open('GET', `https://api.nasa.gov/planetary/apod?api_key=w1d9wvAkhHPGhaGl6WqpJYk444B9CYxJWiaBEPlZ&date=${data}&concept_tags=True`);
    
    requisicao.onload = function(){
        if(requisicao.status == 200){
            const req = JSON.parse(requisicao.response);
            const data = req.date;
            console.log(req);
            info.innerText = data
        }
    }
    requisicao.send();
})
