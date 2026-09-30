var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// --- FUNÇÕES DE CÁLCULO ---
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

// --- ROTAS DO SERVIDOR ---

// Rota GET inicial
app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

// 1. Rota de Soma
app.post('/soma', function (req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

// 2. Rota de Subtração
app.post('/subtracao', function (req, res) {
  var body = req.body;
  var resultado = subtracao(body.a, body.b);
  res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});

// 3. Rota de Multiplicação
app.post('/multiplicacao', function (req, res) {
  var body = req.body;
  var resultado = multiplicacao(body.a, body.b);
  res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});

// 4. Rota de Divisão
app.post('/divisao', function (req, res) {
  var body = req.body;

  // Validação para não dividir por zero
  if (body.b === 0) {
    return res.send('Erro: Não é possível dividir por zero!');
  }

  var resultado = divisao(body.a, body.b);
  res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
});

var port = 3001;

app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});