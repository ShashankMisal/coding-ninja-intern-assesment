import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    item: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '&:hover': {
            cursor:"pointer"
        },
    },
    typography:{
        color:"grey",
        fontWeight:600
    }
    
});

export default function SubCategories({setParams}) {
    const classes = useStyles();
    const [clickedSubCat, setClickedSubCat] = React.useState("1");


    const categoriesList = [
        {
            name: "Upcoming",
            id: "1"
        },
        {
            name: "Archived",
            id: "2"
        },
        {
            name: "All Time Favorites",
            id: "3"
        },
    ]

    const handleSubCategory = (subcategory)=>{
        setParams(prev => {
            setClickedSubCat(subcategory.id);
            return {
                ...prev,
                event_sub_category: subcategory.name
            }
        })
    }

    return (
        <Box width="100" color="black" padding="18px 0px" backgroundColor="#ffffff" borderBottom="1px solid lightgrey">
            <Grid container justifyContent="flex-start">
                {
                    categoriesList.map((subcategory) => (
                        <Grid key={subcategory.id} onClick={() => handleSubCategory(subcategory)} item xs={4} md={2} className={classes.item} >
                            <Typography variant="body" className={classes.typography} style={{ color: (clickedSubCat === subcategory.id) ? "#fa7328" : "grey" }}>
                                {subcategory.name}
                            </Typography>
                        </Grid>
                    ))

                }

            </Grid>
        </Box>
    )
}
