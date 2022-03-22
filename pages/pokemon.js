import Layout from '../components/Layout';
import { useFetchPokemon } from '../hooks/useFetchPokemon';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

const Pokemon = () => { 

    const { data, cargando } = useFetchPokemon();

    return <>
        {
            cargando ? 
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
                >
                    Cargando pokemones... 
                <CircularProgress color="inherit" />
            </Backdrop> : <span></span>            
        }    
        <Layout page={'Lista de pokemon'}>
            <h1>Lista de Pokemon </h1>
            <hr />
            <h2>Nombres de personajes de Pokemon</h2> 
            <Grid container rowSpacing={1}>
                {
                    data.map(pokemon => (
                        <Grid item xs={3} key={pokemon.name}>
                            <Chip 
                                avatar={<Avatar>{ pokemon.name.substr(0,1).toUpperCase() }</Avatar>}
                                label={pokemon.name} 
                                color="secondary"
                                style={{ width: '90%', fontSize: '18px' }}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Layout>
    </>
}

export default Pokemon;