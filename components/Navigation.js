import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';

const pages = [
    {name:'Inicio', link: '/'}, 
    {name:'Lógica numerica', link: '/numberLogic'}, 
    {name:'Lista de Pokemon', link: '/pokemon'}, 
    {name:'Star Wars', link: '/starWars'},
];

const Navigation = () => {

  return (
    <AppBar position="static" color="secondary" enableColorOnDark={false}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            PRUEBA LQN
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignContent: 'space-between' }}>
            {pages.map((page) => (
            <Link href={page.link} key={page.link}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            </Link>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
