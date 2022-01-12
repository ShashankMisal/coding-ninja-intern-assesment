import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import { useGetEventTagsQuery } from '../services/codingNinjaApi';

const useStyles = makeStyles({

    typography: {
        background: '#eee',
        color: '#6d5757',
        padding: "4px 8px",
    },
    typographySelected: {
        background: '#fa7328',
        color: '#ffffff',
        borderRadius: 3,
        padding: "4px 8px",
    }
});


function TagList({setParams}) {

    const classes = useStyles();
    const { data, isFetching } = useGetEventTagsQuery();

    const [selected, setSelected] = React.useState([]);

    
    React.useEffect(()=>{
        setParams((prev) => {
            return {
                ...prev,
                tag_list: selected.toString(),
            }
        })
    },[selected,setParams])    
    
    const handleSelect = (tag) => {
        if (!selected.includes(tag)) {
            setSelected([...selected,tag]);
            
        } else {
            setSelected(pre=>pre.filter((a)=>a!==tag))
        }
        
    }
    
    console.log(selected.toString())
    if (isFetching)
        return "Loading"
    
    return (
        <Box padding="10px" marginTop="20px">
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <Typography variant="h6" style={{ fontWeight: "600", color: "grey" }}>TAGS</Typography>
                </Grid>
                {
                    data?.data?.tags?.map((tag, index) => (
                        <Grid key={index} item xs={12} onClick={e => handleSelect(tag)} className={classes.item}>
                            <Typography variant="body2" component="span" className={selected.includes(tag)?classes.typographySelected:classes.typography} >
                                {tag}
                            </Typography>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default TagList
