import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { makeStyles } from '@mui/styles';
import EventIcon from '@mui/icons-material/Event';
import AirplayIcon from '@mui/icons-material/Airplay';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CampaignIcon from '@mui/icons-material/Campaign';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';

const useStyles = makeStyles({
    item: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '&:hover': {
            cursor: "pointer"
        },
    },
    typography: {
        // color: "grey",
        marginLeft: "5px !important",
        fontWeight: 500
    }
});

export default function Categories({setParams}) {
    const classes = useStyles();
    const [clicked,setClicked] = React.useState("1");

    // console.log(setParams);

    const categoriesList = [
        {
            name: "ALL EVENTS",
            icon: <EventIcon />,
            id: "1"
        },
        {
            name: "Webinars",
            icon: <AirplayIcon />,
            id: "2"
        },
        {
            name: "Coding Events",
            icon: <EventAvailableIcon />,
            id: "3"
        },
        {
            name: "Bootcamp Events",
            icon: <CampaignIcon />,
            id: "4"
        },
        {
            name: "Workshop",
            icon: <VideoCameraFrontIcon />,
            id: "5"
        },
    ]



    return (
        <Box width="100" color="grey" padding="18px 0px" backgroundColor="#fef4ee82" borderBottom="1px solid lightgrey">
            <Grid container justifyContent="flex-start">
                {
                    categoriesList.map((category) => (
                        <Grid key={category.id} item xs={4} md={2} className={classes.item} onClick={()=>{
                            setClicked(category.id)
                            return (
                                setParams(prev => ({
                                        ...prev,
                                        event_category: category.name.toUpperCase()
                                    })
                                )  
                            );
                        }} style={{ color: (clicked === category.id) ? "#fa7328" : "grey" }} >
                            {category.icon}
                            <Typography variant="body" className={classes.typography} >
                                {category.name}
                            </Typography>
                        </Grid>
                    ))

                }

            </Grid>
        </Box>
    )
}
