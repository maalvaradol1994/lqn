import { useEffect, useState } from "react";
import {getStarWars} from '../helpers/getStarWars';

export const useFetchStarwars = (resource) => {

    const [ state, setState ] = useState({
        data: [],
        cargando: true,
    });

    useEffect(() => {

        setState({
            cargando: true,
        });

        getStarWars(resource)
        .then( data => {

            setTimeout(() => {

                setState({
                    data: data,
                    cargando: false,
                })

            }, 2000);

        });

    }, [resource]);

    return state;

}