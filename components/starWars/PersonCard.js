import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const PersonCard = ({handleOpen, person}) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={person.name}
        height="180"
        image="https://a-static.besthdwallpaper.com/logotipo-de-la-pelicula-star-wars-papel-pintado-2160x1440-12610_40.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {person.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Gender: {person.gender}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Hair color: {person.hair_color}
        </Typography>        
      </CardContent>
      <CardActions>
        <Button 
          size="large" 
          color="secondary" 
          fullWidth={true} 
          variant="contained"
          onClick={(event) => handleOpen(person)}
        >Ver Más</Button>
      </CardActions>
    </Card>
  );
}