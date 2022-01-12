import { Box, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Categories from './Components/Categories';
import EventCards from './Components/EventCards';
import SubCategories from './Components/SubCategories';
import TagList from './Components/TagList';

const useStyles = makeStyles({
  container: {
    background: '#ffffff',
    border: 1,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 100, .3)',
    color: 'white',
    height: '100%',
    zIndex: '1',
    // position: 'relative'
  },
});


function App() {
  const classes = useStyles();
  return (
      <Container>
      <Box className={classes.container}>
         <Categories/>
         <SubCategories/>
        <Box backgroundColor="#fef6f1">
            <Grid container>
                <Grid item md={9.5}>
                    <EventCards/>
                </Grid>
                <Grid item md={2.5}>
                    <TagList/>
                </Grid>
            </Grid>
         </Box>
      </Box>
      </Container>
  );
}

export default App;
