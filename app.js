const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const pokemons = [
  [
  {
    "posicao": 1,
    "nome": "Pikachu",
    "episodio": "EP001 - Pokémon, Eu Escolho Você!",
    "metodo_obtencao": "Recebido do Professor Carvalho como Pokémon inicial",
    "tipo": ["Elétrico"]
  },
  {
    "posicao": 2,
    "nome": "Caterpie",
    "episodio": "EP003 - Ash Pega um Pokémon!",
    "metodo_obtencao": "Primeira captura selvagem na Floresta de Viridian",
    "tipo": ["Inseto"]
  },
  {
    "posicao": 3,
    "nome": "Pidgeotto",
    "episodio": "EP003 - Ash Pega um Pokémon!",
    "metodo_obtencao": "Capturado selvagem na Floresta de Viridian",
    "tipo": ["Normal", "Voador"]
  },
  {
    "posicao": 4,
    "nome": "Bulbasaur",
    "episodio": "EP010 - Bulbasaur e a Vila Escondida",
    "metodo_obtencao": "Entrou para a equipe após batalhar para defender a Vila Escondida",
    "tipo": ["Grama", "Venenoso"]
  },
  {
    "posicao": 5,
    "nome": "Charmander",
    "episodio": "EP011 - Charmander, o Pokémon Perdido",
    "metodo_obtencao": "Resgatado após ter sido abandonado pelo treinador Damian",
    "tipo": ["Fogo"]
  },
  {
    "posicao": 6,
    "nome": "Squirtle",
    "episodio": "EP012 - A Esquadra de Squirtle",
    "metodo_obtencao": "Entrou voluntariamente para a equipe como líder do Esquadrão Squirtle",
    "tipo": ["Água"]
  },
  {
    "posicao": 7,
    "nome": "Krabby",
    "episodio": "EP013 - O Mistério do Farol",
    "metodo_obtencao": "Capturado na praia e enviado ao laboratório por limite de equipe",
    "tipo": ["Água"]
  },
  {
    "posicao": 8,
    "nome": "Primeape",
    "episodio": "EP025 - Primeape Vai à Loucura!",
    "metodo_obtencao": "Capturado após evoluir de Mankey na Rota 7",
    "tipo": ["Lutador"],
    "observacao": "No EP015, Ash trocou temporariamente Butterfree por um Raticate, mas desfez a troca no mesmo episódio."
  },
  {
    "posicao": 9,
    "nome": "Muk",
    "episodio": "EP030 - A Operação Desentupimento",
    "metodo_obtencao": "Capturado na usina e enviado ao laboratório do Prof. Carvalho devido ao cheiro forte",
    "tipo": ["Venenoso"]
  },
  {
    "posicao": 10,
    "nome": "Tauros",
    "episodio": "EP035 - A Lenda de Dratini",
    "metodo_obtencao": "Capturado na Zona de Safári (Ash capturou um bando de 30 Tauros acidentalmente)",
    "tipo": ["Normal"]
  }
]
]

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => res.type('html').send(html));

app.get('/req', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
});

app.get('/meunome', (req, res) => {
  console.log("Requisição na rota /meunome");
  res.send('Meu nome é Andrey Segobia Reis Cruz')
});

app.get('/tico', (req, res) => {
  console.log("request at /tico");
  res.send('teco')
});

app.get('/pokemon', (req, res) => {
  console.log("request at /pokemon");
  res.json(pokemons);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello Express API 
    </section>
  </body>
</html>
`
