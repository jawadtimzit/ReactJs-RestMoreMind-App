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
import Logo from '../meditation2.png'
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

export default function RecipeReviewCardtwo() {
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
        title="Everyday ways to practice meditation"
        subheader="November 30, 2021"
      />
      <CardMedia
        component="img"
        height="194"
        image={Logo}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Don't let the thought of meditating the "right" way add to your stress. 
        If you choose to, you can attend special meditation centers or group classes 
        led by trained instructors. But you can also practice meditation easily on your own.
        <br/> <br/> 
        And you can make meditation as formal or informal as you like, however it suits your 
        lifestyle and situation. Some people build meditation into their daily routine. For example, 
        they may start and end each day with an hour of meditation. But all you really need is a few minutes 
        of quality time for meditation.
        <br/> <br/> 
        Here are some ways you can practice meditation on your own, whenever you choose:

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
          <Typography paragraph style={{}}>Breathe deeply:</Typography>
          <Typography paragraph>
          This technique is good for beginners because breathing is a natural function.
          </Typography>
          <Typography paragraph>
          Focus all your attention on your breathing. Concentrate on feeling and listening 
          as you inhale and exhale through your nostrils. Breathe deeply and slowly. When your 
          attention wanders, gently return your focus to your breathing.
          </Typography>
          <Typography paragraph> Scan your body:</Typography>
          <Typography paragraph>
          When using this technique, focus attention on different parts of your body. Become aware 
          of your body's various sensations, whether that's pain, tension, warmth or relaxation.
          </Typography>
          <Typography paragraph> Combine body scanning with breathing exercises and imagine breathing heat or 
          relaxation into and out of different parts of your body.</Typography>
          <Typography paragraph>Repeat a mantra:</Typography>
          
          <Typography paragraph> You can create your own mantra, whether it's religious or secular. Examples of 
          religious mantras include the Jesus Prayer in the Christian tradition, the holy name of God in Judaism,
           or the om mantra of Hinduism, Buddhism and other Eastern religions.
            </Typography>
          <Typography paragraph>Walk and meditate:</Typography>
          <Typography paragraph> Combining a walk with meditation is an efficient and healthy way to relax. 
          You can use this technique anywhere you're walking, such as in a tranquil forest, on a city sidewalk 
          or at the mall.
          </Typography>
          <Typography paragraph>When you use this method, slow down your walking pace so that you can focus on 
          each movement of your legs or feet. Don't focus on a particular destination. Concentrate on your legs 
          and feet, repeating action words in your mind such as "lifting," "moving" and "placing" as you lift each 
          foot, move your leg forward and place your foot on the ground.
          </Typography>
          <Typography paragraph> Engage in prayer:</Typography>
          <Typography paragraph>Prayer is the best known and most widely practiced example of meditation. Spoken and 
          written prayers are found in most faith traditions.
          </Typography>
          <Typography paragraph>You can pray using your own words or read prayers written by others. Check the self-help 
          section of your local bookstore for examples. Talk with your rabbi, priest, pastor or other spiritual leader 
          about possible resources.
          </Typography>
          <Typography paragraph>Read and reflect:</Typography>
          
          <Typography paragraph>Many people report that they benefit from reading poems or sacred texts, and taking a few 
            moments to quietly reflect on their meaning.
        </Typography>
          <Typography paragraph>You can also listen to sacred music, spoken words, or any music you find relaxing or inspiring. 
          You may want to write your reflections in a journal or discuss them with a friend or spiritual leader.
          </Typography>
          <Typography paragraph>Focus your love and gratitude:</Typography>
          <Typography paragraph>In this type of meditation, you focus your attention on a sacred image or being, weaving feelings 
          of love, compassion and gratitude into your thoughts. You can also close your eyes and use your imagination or gaze at 
          representations of the image. </Typography>
          <Typography paragraph> </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
