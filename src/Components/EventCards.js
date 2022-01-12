import React from 'react'
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Divider, Grid } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';

const useStyles = makeStyles({
    item:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    avatar:{
        display:"inline-block !important",
        margin:"3px"
    },
    title:{
        color:"grey"
    },
    subtitle:{
        color:"black"
    }
});


function EventCards() {
    const classes = useStyles();

    return (
        <Box margin="30px">

       <Grid container justifyContent="center" spacing={2}>

           <Grid item xs={12} md={6} className={classes.item}> 
                    <Card sx={{ maxWidth: 395 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image="https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
                            alt="green iguana"
                        />
                        <CardContent style={{height:"200px"}}>
                            <Typography gutterBottom variant="h6" component="div" style={{fontWeight:"600"}}>
                                Ninjas Career Camp January 2022
                            </Typography>

                            <Grid container >
                                <Grid item xs={6}>
                                    <Typography className={classes.title} variant="body2" >Starts on</Typography>
                                    <Typography className={classes.subtitle} variant="subtitle2">12:15 AM,30 Dec 2021</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography className={classes.title} variant="body2">Entry Fee</Typography>
                                    <Typography className={classes.subtitle} variant="subtitle2">Free</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography className={classes.title} variant="body2">Venue</Typography>
                                    <Typography className={classes.subtitle} variant="subtitle2">Online,Zoom</Typography>
                                </Grid>
                            </Grid>

                            <Divider style={{ margin:"10px 0px" }} />

                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Grid container>
                                <Grid item xs={8}>
                                    <Avatar component="span" className={classes.avatar} sx={{ width: 23, height: 23}}>H</Avatar>
                                    <Avatar component="span" className={classes.avatar} sx={{ bgcolor: deepOrange[500], width: 23, height: 23 }}>N</Avatar>
                                    <Avatar component="span" className={classes.avatar} sx={{ bgcolor: deepPurple[500], width: 23, height: 23 }}>P</Avatar>
                                    <Avatar component="span" className={classes.avatar} sx={{ bgcolor: deepPurple[500], width: 23, height: 23 }}>P</Avatar>
                                
                                    <Typography variant="subtitle2">and 767 others are participating</Typography>
                                </Grid>
                                <Grid item xs={4}>
                            <Button size="small" variant="contained" disableElevation>Register Now</Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
           </Grid>
          
                <Grid item xs={12} md={6} className={classes.item}>
                    <Card sx={{ maxWidth: 395 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image="https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
                            alt="green iguana"
                        />
                        <CardContent style={{ height: "200px" }}>
                            <Typography gutterBottom variant="h6" component="div">
                                Ninjas Career Camp January 2022
                            </Typography>

                            <Grid container >
                                <Grid item xs={6}>
                                    <Typography variant="body2" >Starts on</Typography>
                                    <Typography variant="subtitle2">12:15 AM,30 Dec 2021</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="body2">Entry Fee</Typography>
                                    <Typography variant="subtitle2">Free</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="body2">Venue</Typography>
                                    <Typography variant="subtitle2">Online,Zoom</Typography>
                                </Grid>
                            </Grid>

                            <Divider style={{ margin: "10px 0px" }} />

                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Grid container>
                                <Grid item xs={8}>
                                    <Avatar component="span" className={classes.avatar} sx={{ width: 23, height: 23 }}>H</Avatar>
                                    <Avatar component="span" className={classes.avatar} sx={{ bgcolor: deepOrange[500], width: 23, height: 23 }}>N</Avatar>
                                    <Avatar component="span" className={classes.avatar} sx={{ bgcolor: deepPurple[500], width: 23, height: 23 }}>P</Avatar>
                                    <Avatar component="span" className={classes.avatar} sx={{ bgcolor: deepPurple[500], width: 23, height: 23 }}>P</Avatar>

                                    <Typography variant="subtitle2">and 767 others are participating</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button size="small" variant="contained" disableElevation>Register Now</Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} className={classes.item}>
                    <Card sx={{ maxWidth: 395 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image="https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
                            alt="green iguana"
                        />
                        <CardContent style={{ height: "200px" }}>
                            <Typography gutterBottom variant="h6" component="div">
                                Ninjas Career Camp January 2022
                            </Typography>

                            <Grid container >
                                <Grid item xs={6}>
                                    <Typography variant="body2" >Starts on</Typography>
                                    <Typography variant="subtitle2">12:15 AM,30 Dec 2021</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="body2">Entry Fee</Typography>
                                    <Typography variant="subtitle2">Free</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="body2">Venue</Typography>
                                    <Typography variant="subtitle2">Online,Zoom</Typography>
                                </Grid>
                            </Grid>

                            <Divider style={{ margin: "10px 0px" }} />

                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Grid container>
                                <Grid item xs={8}>
                                    <Avatar component="span" className={classes.avatar} sx={{ width: 23, height: 23 }}>H</Avatar>
                                    <Avatar component="span" className={classes.avatar} sx={{ bgcolor: deepOrange[500], width: 23, height: 23 }}>N</Avatar>
                                    <Avatar component="span" className={classes.avatar} sx={{ bgcolor: deepPurple[500], width: 23, height: 23 }}>P</Avatar>
                                    <Avatar component="span" className={classes.avatar} sx={{ bgcolor: deepPurple[500], width: 23, height: 23 }}>P</Avatar>

                                    <Typography variant="subtitle2">and 767 others are participating</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button size="small" variant="contained" disableElevation>Register Now</Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} className={classes.item}>
                    <Card sx={{ maxWidth: 395 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image="https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
                            alt="green iguana"
                        />
                        <CardContent style={{ height: "200px" }}>
                            <Typography gutterBottom variant="h6" component="div">
                                Ninjas Career Camp January 2022
                            </Typography>

                            <Grid container >
                                <Grid item xs={6}>
                                    <Typography variant="body2" >Starts on</Typography>
                                    <Typography variant="subtitle2">12:15 AM,30 Dec 2021</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="body2">Entry Fee</Typography>
                                    <Typography variant="subtitle2">Free</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="body2">Venue</Typography>
                                    <Typography variant="subtitle2">Online,Zoom</Typography>
                                </Grid>
                            </Grid>

                            <Divider style={{ margin: "10px 0px" }} />

                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Grid container>
                                <Grid item xs={8}>
                                    <Avatar component="span" className={classes.avatar} sx={{ width: 23, height: 23 }}>H</Avatar>
                                    <Avatar component="span" className={classes.avatar} sx={{ bgcolor: deepOrange[500], width: 23, height: 23 }}>N</Avatar>
                                    <Avatar component="span" className={classes.avatar} sx={{ bgcolor: deepPurple[500], width: 23, height: 23 }}>P</Avatar>
                                    <Avatar component="span" className={classes.avatar} sx={{ bgcolor: deepPurple[500], width: 23, height: 23 }}>P</Avatar>

                                    <Typography variant="subtitle2">and 767 others are participating</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button size="small" variant="contained" disableElevation>Register Now</Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>

       </Grid>
      </Box>  
    )
}

export default EventCards
