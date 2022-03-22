import { useState } from 'react';
import Layout from '../components/Layout';
import { useFetchStarwars } from '../hooks/useFetchStarwars';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';


import { PersonCard } from '../components/starWars/PersonCard'; 
import { DetailPerson } from '../components/starWars/DetailPerson';

const StarWars = () => { 

    const [ open, setOpen ] = useState(false);
    const [ selectedPage, setSelectedPage ] = useState(1);
    const [ url, setUrl ] = useState('https://swapi.py4e.com/api/people/?page=1');
    const [ person, setPerson ] = useState({});
    const { data, cargando } = useFetchStarwars(url);

    const handlePageStarWars = (selectPage) => {
        setSelectedPage(selectPage);
        setUrl(`https://swapi.py4e.com/api/people/?page=${selectPage}`);
    }

    const handleOpen = (person) => {
        setPerson(person);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);


    return <>     
    
        <Layout page={'Lista de Star Wars'}>
            <h1>Lista de Star Wars</h1>
            <hr />
            <h2>Personajes de Star Wars</h2>       

            {
                cargando ? 
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                    >
                        Cargando personajes de Star Wars... 
                    <CircularProgress color="inherit" />
                </Backdrop> : 

                <div>
                

                    <DetailPerson 
                        person={person}
                        handleClose={handleClose}
                        open={open}
                    /> 

                    <Grid container rowSpacing={3} spacing={1}>
                    {
                        data.people.map(person => (
                            <Grid item xs={4} key={person.name}>
                                <PersonCard 
                                    person={person}
                                    handleOpen={handleOpen}
                                />
                            </Grid>
                        ))
                    }
                    </Grid>

                    <Grid container style={{ marginTop: '15px'}}>
                        <Pagination 
                            page={selectedPage}
                            count={Math.round(data.count / 10)} 
                            color="primary" 
                            size='large'
                            onChange={(event, selectPage) => handlePageStarWars(selectPage)}
                            />
                    </Grid>

                </div>
            }

        </Layout>
    </>
}

export default StarWars;