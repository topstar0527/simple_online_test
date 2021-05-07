import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})
export default function Plan(props) {
    
    const classes = useStyles();

    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
          {props.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.description}
          </Typography>
        </CardContent>
        <CardActionArea>
            <Box display="flex" justifyContent="center"><Button size="small">Price {props.price}</Button></Box>
          
        </CardActionArea>
      </Card>
    );
  }
  

