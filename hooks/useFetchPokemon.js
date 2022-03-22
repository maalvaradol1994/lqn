import { useEffect, useState } from "react";
import { getPokemons } from "../helpers/getPokemons";

export const useFetchPokemon = () => {

    const [ state, setState ] = useState({
        data: [],
        cargando: true,
    });

    useEffect(() => {

        getPokemons()
        .then( pokemon => {

            setTimeout(() => {

                setState({
                    data: pokemon,
                    cargando: false,
                })

            }, 2000);

        });

    }, []);

    return state;

}