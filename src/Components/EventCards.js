import React from 'react'
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Divider, Grid } from '@mui/material';
import { useGetEventsQuery } from '../services/codingNinjaApi';
import Pagination from '@mui/material/Pagination';


const useStyles = makeStyles({
    item: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        display: "inline-block !important",
        margin: "3px"
    },
    title: {
        color: "grey"
    },
    subtitle: {
        color: "black"
    }
});


function EventCards({ params, setParams }) {
    const classes = useStyles();
    const { data, isFetching } = useGetEventsQuery(params);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        setParams(prev => ({
            ...prev,
            offset: page - 1,
        }))
    }, [page, setParams]);

    if (isFetching)
        return "Loading...."

    return (
        <Box margin="30px">

            <Grid container justifyContent="center" spacing={2}>

                {

                    (data?.data?.events.length !== 0) ? (
                        data?.data?.events?.map((event) => (
                            <Grid key={event.id} item xs={12} md={6} className={classes.item}>
                                <Card sx={{ maxWidth: 395 }}>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={event.cover_picture}
                                        alt="green iguana"
                                    />
                                    <CardContent style={{ height: "200px" }}>
                                        <Typography gutterBottom variant="body" component="div" style={{ fontWeight: "700" }}>
                                            {event.name}
                                        </Typography>

                                        <Grid container >
                                            <Grid item xs={6}>
                                                <Typography className={classes.title} variant="body2" >Starts on</Typography>
                                                <Typography className={classes.subtitle} variant="subtitle2">12:15 AM,30 Dec 2021</Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography className={classes.title} variant="body2">Entry Fee</Typography>
                                                <Typography className={classes.subtitle} variant="subtitle2">{event.fees === 0 ? "Free" : event.fees}</Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography className={classes.title} variant="body2">Venue</Typography>
                                                <Typography className={classes.subtitle} variant="subtitle2">{event.venue}</Typography>
                                            </Grid>
                                        </Grid>

                                        <Divider style={{ margin: "10px 0px" }} />

                                        <Typography variant="body2" color="text.secondary">
                                            {event.short_desc}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Grid container>
                                            <Grid item xs={8}>
                                                {
                                                    (event.registered_users?.top_users?.length !== 0) ?
                                                        (
                                                            event.registered_users?.top_users?.map((user, index) => (
                                                                <Avatar
                                                                    key={index}
                                                                    component="span"
                                                                    className={classes.avatar}
                                                                    sx={{ width: 23, height: 23 }}
                                                                    src={user.image_url} />
                                                            ))
                                                        ) : (
                                                            <Avatar
                                                                component="span"
                                                                className={classes.avatar}
                                                                sx={{ width: 23, height: 23 }} />
                                                        )

                                                }

                                                <Typography variant="subtitle2">and <span style={{ fontWeight: "bold" }}>{event.registered_users.other_users_count}</span> others are participating</Typography>
                                            </Grid>

                                            <Grid item xs={4}>
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    style={{ background: "linear-gradient(90deg,#fa7328,#ee9f15)" }}
                                                    disableElevation
                                                >
                                                    Register Now
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </Grid>

                        ))
                    ) : (
                        <Grid>
                            <Typography variant="h4" style={{ color: "black" }}>
                                No events found
                            </Typography>
                        </Grid>
                    )
                }

            </Grid>

            <Box mt={2}>
                (data?.data?.events.length!==0) && <Pagination count={data?.data?.page_count} page={page} color="primary" onChange={(e, value) => setPage(value)} />
            </Box>
        </Box>
    )
}

export default EventCards
