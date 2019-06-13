/*const livros = [
    {
      "nome": "Dom Quixote",
      "paginas": 401,
      "ano": 1605,
      "pais": "China",
      "autor": 3
    },
    {
      "nome": "Guerra e Paz",
      "paginas": 547,
      "ano": 1869,
      "pais": "Australia",
      "autor": 2
    },
    {
      "nome": "Cem Anos de Solidão",
      "paginas": 258,
      "ano": 1967,
      "pais": "Brasil",
      "autor": 1
    },
    {
      "nome": "Ulisses",
      "paginas": 745,
      "ano": 1922,
      "pais": "China",
      "autor": 3
    },
    {
      "nome": "Busca do Tempo Perdido",
      "paginas": 111,
      "ano": 1913,
      "pais": "Argentina",
      "autor": 2
    }
  ]

const autores = [
    {
      "id": 1,
      "nome": "João da Silva"
    },
    {
      "id": 2,
      "nome": "Maria Souza"
    },
    {
      "id": 3,
      "nome": "Ana Clara"
    }
]*/

var livros = [];
var autores = [];

const buscarLivros = () => {
    fetch("http://private-ba46ed-softtrainee.apiary-mock.com/books")
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        livros = data;
        console.log(livros);
    })
    .catch(error => {
        console.error(error);
    })
};

const buscarAutores = () =>{
    fetch("http://private-ba46ed-softtrainee.apiary-mock.com/authors")
    .then(function (response){
        return response.json()
    })
    .then(function (data){
        autores = data;
        console.log(autores);
    })
    .catch(error => {
        console.error(error);
    })
}

const buscarAutorPorId = (id) => {
    return autores.filter(autor => autor.id === id);
}; 

const compararLivrosAutores = () => { 
    let livros_autores = [];

    livros.map(livro => {
        let autor = buscarAutorPorId(livro.autor);
        livros_autores.push({
            nomeLivro: livro.nome,
            nomeAutor: autor[0].nome
        })
    });

    return livros_autores;
}    

let livros_autores = compararLivrosAutores();

console.log(compararLivrosAutores());