import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';


export default function ReviewCard() {

  return (
    <Card sx={{ width: '100%', maxHeight: '300px', overflowY: 'scroll' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
          dfdsfdsfdsd
          dddfds
          dfdsfd
          dfdsfdsfdsd
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi ipsa reiciendis eos necessitatibus! Fugiat nulla veritatis ad sint hic est, maiores rerum facilis placeat deserunt, quod saepe ullam repudiandae.
        </Typography>
      </CardContent>
    </Card>
  );
}
