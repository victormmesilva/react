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

const buscarAutorPorCod = (cod) => {
    return autores.filter(autor => autor.id === cod);
}; 

const compararLivrosAutores = livros.map(livro => {
    console.log(livro);
    let livros_autores = [];
    let autor = buscarAutorPorCod(livro.autorId);
    livros_autores.push({
        nomeLivro: livro.nome,
        nomeAutor: autor.nome
    })
    return livros_autores;
});

let livros_autores = compararLivrosAutores();

console.log(compararLivrosAutores());