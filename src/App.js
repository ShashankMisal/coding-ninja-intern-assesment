import React from 'react'
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
    boxShadow: '0 3px 5px 2px rgba(255, 205, 200, .3)',
    color: 'white',
    height: '100%',
    zIndex: '1',
    // position: 'relative'
  },
});


function App() {
  const classes = useStyles();
  const [params, setParams] = React.useState({
    event_category: "ALL EVENTS",
    event_sub_category: "Upcoming",
    tag_list: "",
    offset: 0
  });

  console.log(params);


 
  return (
      <Container>
        <Box className={classes.container}>
          <Categories setParams={setParams}/>
          <SubCategories setParams={setParams}/>
          <Box backgroundColor="#fef4ee82">
              <Grid container>
                  <Grid item md={9.5}>
              <EventCards params={params} setParams={setParams}  />
                  </Grid>
                  <Grid item md={2.5}>
                <TagList setParams={setParams}/>
                  </Grid>
              </Grid>
          </Box>
        </Box>
      </Container>
  );
}

export default App;
