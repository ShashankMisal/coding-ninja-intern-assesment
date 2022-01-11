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
        alignItems: "center"
    },
    typography:{
        color:"grey",
        fontWeight:600
    }
    
});

export default function SubCategories() {
    const classes = useStyles();

    const categoriesList = [
        {
            name: "Upcoming",
            id: "1"
        },
        {
            name: "Archieved",
            id: "2"
        },
        {
            name: "All Time Favorites",
            id: "3"
        },
    ]

    return (
        <Box width="100" color="black" padding="18px 0px" backgroundColor="#ffffff" borderBottom="1px solid lightgrey">
            <Grid container justifyContent="flex-start">
                {
                    categoriesList.map((category) => (
                        <Grid item xs={4} md={2} className={classes.item}>
                            <Typography variant="body" className={classes.typography}>
                                {category.name}
                            </Typography>
                        </Grid>
                    ))

                }

            </Grid>
        </Box>
    )
}
