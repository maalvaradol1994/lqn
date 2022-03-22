import Head from 'next/head';
import Navigation from './Navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Layout = (props) => {

    const {page} = props

    return (
        <>
            <Head>
                <title>Test LQN - {page}</title>
            </Head>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />

            <Navigation />
            <Box style={{ fontFamily: 'Roboto' }} sx={{ textAlign: 'center' }}>
                <Container>
                    {props.children}
                </Container>
            </Box>
        </>
    )
}

export default Layout;