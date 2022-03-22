import Layout from '../components/Layout';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

const NumberLogic = () => { 

    const listaNumeros = [];

    for (let i = 1; i <= 100; i++) {
        listaNumeros.push(i);
    }

    
    return <>
        <Layout page={'Lógica de números'}>
            <h1>Lógica de números</h1>
            <hr />
            <h2>Los multiplos de 5 son de color <span style={{ color: '#2E7D32'}}>verde</span></h2>
            <Grid container rowSpacing={1}>
                {
                    listaNumeros.map(numero => (
                        <Grid item xs={2} key={numero}>
                            <Chip 
                                label={(numero%5 == 0) ? numero + ' bazz' : numero} 
                                color={ (numero%5 == 0) ? 'success' : 'primary' }
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Layout>
    </>
}

export default NumberLogic;