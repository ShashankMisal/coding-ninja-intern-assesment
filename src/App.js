import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Categories from './Components/Categories';
import SubCategories from './Components/SubCategories';

const useStyles = makeStyles({
  container: {
    background: '#ffffff',
    border: 1,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 100, .3)',
    color: 'white',
    height: '100vh',
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

      </Box>
      </Container>
  );
}

export default App;
