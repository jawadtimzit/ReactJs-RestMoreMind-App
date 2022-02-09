import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Logo from '../meditation1.jpg'
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCardone() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 650,marginBottom:5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Types of Meditation"
        subheader="November 30, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image={Logo}
        alt="Meditation logo"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Meditation is an umbrella term for the many ways to a relaxed state of being. 
        There are many types of meditation and relaxation techniques that have meditation components. 
        All share the same goal of achieving inner peace.
        <br/> <br/> 
        Ways to meditate can include:

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{}}>Guided Meditation:</Typography>
          <Typography paragraph>
          Sometimes called guided imagery or visualization, with this method of meditation
           you form mental images of places or situations you find relaxing.
          </Typography>
          <Typography paragraph>
          You try to use as many senses as possible, such as smells, sights, sounds and textures. 
          You may be led through this process by a guide or teacher.
          </Typography>
          <Typography paragraph> Mantara Meditation:</Typography>
          <Typography paragraph>
          In this type of meditation, you silently repeat a calming word, thought or phrase to prevent 
          distracting thoughts.
          </Typography>
          <Typography paragraph> Mindfulness meditation:</Typography>
          <Typography paragraph> This type of meditation is based on being mindful, or having an increased 
            awareness and acceptance of living in the present moment. 
          </Typography>
          <Typography paragraph> In mindfulness meditation, you broaden your conscious awareness. You focus 
           on what you experience during meditation, such as the flow of your breath. You can observe your 
            thoughts and emotions, but let them pass without judgment.
            </Typography>
          <Typography paragraph>Qi gong:</Typography>
          <Typography paragraph> This practice generally combines meditation, relaxation, physical movement 
            and breathing exercises to restore and maintain balance. Qi gong (CHEE-gung) is part of traditional 
            Chinese medicine.
          </Typography>
          <Typography paragraph>Tai chi:</Typography>
          <Typography paragraph> This is a form of gentle Chinese martial arts. In tai chi (TIE-CHEE), 
          you perform a self-paced series of postures or movements in a slow, graceful manner while 
          practicing deep breathing.</Typography>
          <Typography paragraph>Transcendental Meditation:</Typography>
          <Typography paragraph>Transcendental Meditation is a simple, natural technique. In Transcendental 
          Meditation, you silently repeat a personally assigned mantra, such as a word, sound or phrase, in a 
          specific way.
          </Typography>
          <Typography paragraph>This form of meditation may allow your body to settle into a state of profound 
          rest and relaxation and your mind to achieve a state of inner peace, without needing to use concentration 
          or effort. 
          </Typography>
          <Typography paragraph>Yoga</Typography>
          <Typography paragraph>You perform a series of postures and controlled breathing exercises to promote a more 
          flexible body and a calm mind. As you move through poses that require balance and concentration, you're encouraged 
          to focus less on your busy day and more on the moment. 
          </Typography>
          <Typography paragraph> </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
