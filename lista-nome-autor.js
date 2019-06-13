const buscarLivros = () => {
    fetch(`http://private-ba46ed-softtrainee.apiary-mock.com/books`)
    .then(console.log)
    .catch( error => {
        console.log(`Erro fetch livros: ${error}`)
    })
} 

const buscarAutores = async () => {

    fetch(`http://private-ba46ed-softtrainee.apiary-mock.com/authors`)
    .then( response => {
        response.json().then( autores => {
            console.log(`Autores: ${autores}`);
        })
        .catch(error => {
            console.log(`Erro fetch autores: ${error}`);
        })
    })
    .catch(error => {
        console.log(`Erro buscarAutores: ${error}`);
    })
}  

console.log(`Livros: ${buscarLivros()}`);
console.log(`Autores: ${buscarAutores()}`);
