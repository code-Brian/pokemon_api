import { useEffect, useState } from "react"

export const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([])
    // can also be written using async/await using ES7 syntax
    // let response = await fetch("<url>")

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=804&offset=0")
        .then(response => response.json())
        .then(response => setPokemon(response.results))
    },[])

    return (
        <div className="w-full flex flex-col items-center justify-center bg-zinc-200">
            <h2 className="w-1/2 py-4 bg-zinc-700 text-slate-50">Pokemon</h2>
            <ul className="mt-3 bg-zinc-200">
            {
                pokemon?.map((pokemon, index) => {
                    return (<li key={index} className="w-40 p-3 border-b-2 border-black border-solid">{pokemon.name}</li>)
            })}
            </ul>
        </div>
    )
}
