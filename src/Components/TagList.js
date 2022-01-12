import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({

    typography: {
        background: '#eee',
        color: '#6d5757',
        padding: "4px 8px",
        borderRadius: 3,

    }
});


function TagList() {

    const classes = useStyles();

    const taglist = [
        {
            tagName: "Interview Preparation"
        },
        {
            tagName: "Contest Solution"
        },
        {
            tagName: "Compitative Programming"
        },
        {
            tagName: "Web Development"
        },
        {
            tagName: "Coding Concept"
        },
        {
            tagName: "Android"
        },
        {
            tagName: "Interview Mocks"
        },
    ]

    return (
        <Box padding="10px" marginTop="20px">
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <Typography variant="h6" style={{ fontWeight: "600", color: "grey" }}>TAGS</Typography>
                </Grid>
                {
                    taglist.map((tag,index) => (
                        <Grid key={index} item xs={12} className={classes.item}>
                            <Typography variant="body2" component="span" className={classes.typography} >
                                {tag.tagName}
                            </Typography>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default TagList
