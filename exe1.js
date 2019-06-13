const biblioteca = [
    {
        nome: "Dom Quixote",
        paginas: 401,
        ano: 1605,
        pais: "China"
    },
    {
        nome: "Guerra e Paz",
        paginas: 547,
        ano: 1869,
        pais: "Australia"
    },
    {
        nome: "Cem Anos de Solidão ",
        paginas: 258,
        ano: 1967,
        pais: "Brasil"
    },
    {
        nome: "Ulisses",
        paginas: 745,
        ano: 1922,
        pais: "China"
    },
    {
        nome: "Busca do Tempo Perdido",
        paginas: 111,
        ano: 1913,
        pais: "Argentina"
    }
]

const filtrarPorPais = (pais) => {
    return biblioteca.filter(livro => livro.pais === pais);
};

console.log(filtrarPorPais("China"));

const filtrarPorNumeroDePaginas = (numero) => {
    const livros = [];
    biblioteca.map(livro => {
            if(livro.paginas > numero){
                livros.push({
                    nome: livro.nome,
                    paginas: livro.paginas
                })
            }
        }
    );
    return livros;
}

console.log(filtrarPorNumeroDePaginas(500));

const filtrarPorAno = (ano) => {
    const livros = [];
    biblioteca.map(livro => {
        if(livro.ano > ano){
            livros.push({
                nome: livro.nome,
                ano: livro.ano
            })
        }
    });
    return livros;
}

console.log(filtrarPorAno(1900));

const listaAnos = (ano) => {
    const anos = [];
    biblioteca.map(livro => {
        if(livro.ano > ano){
            anos.push(livro.ano)
        }
    });
    return anos;
}

console.log("Maior que 1900");

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const anos = listaAnos(1900);
const somatorio = listaAnos(1900).reduce(reducer); 
media = somatorio / anos.length;
console.log(anos);

console.log(`Media = ${media}`);

let maisRecente = biblioteca[0];
const livroMaisRecente = () => {
    biblioteca.map(
        livro => {
            if((livro.ano > maisRecente.ano) && (livro.paginas >= 200)){
                maisRecente = livro;
            }
        } 
    );
}
livroMaisRecente();
console.log(maisRecente);


