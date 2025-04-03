const PokeApi = "https://pokeapi.co/api/v2/pokemon?limit=1025"
async function conexionLista() {
    const res = await fetch(PokeApi);
    const data = await res.json();
    return data.results;
};
async function General(){
    const infoPokes = await conexionLista();
    mostrarLista(infoPokes);
}