import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { makeStyles } from '@mui/styles';

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
                    categoriesList.map((subcategory) => (
                        <Grid key={subcategory.id} item xs={4} md={2} className={classes.item}>
                            <Typography variant="body" className={classes.typography}>
                                {subcategory.name}
                            </Typography>
                        </Grid>
                    ))

                }

            </Grid>
        </Box>
    )
}
