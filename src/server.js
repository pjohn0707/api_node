//importar o pacote express

const express = require('express');

const app = express();

const PORT = 1903;

app.get('/api/teste', (request, response) => {
    response.send('Venho do bairro da Azenha; bairro do monumental; Grêmio é puro sentimento; somos da banda da geral; Dalhe dalhe Tricolor!!');

})

app.listen(PORT, () => console.log(`Running at port ${PORT}`));