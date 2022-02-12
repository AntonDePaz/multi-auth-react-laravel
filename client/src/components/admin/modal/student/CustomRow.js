import React, { useState } from 'react'
//import { Grid, IconButton, makeStyles } from '@material-ui/core'
import { Grid, IconButton ,Fab ,Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
//import { MTableBodyRow } from 'material-table'
import {MTableBodyRow} from '@material-table/core'

import GetAppIcon from '@material-ui/icons/Edit';
//import GetAppIcon from '@mui/icons-material/Edit';
//import DeleteIcon from '@mui/icons-material/Delete';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(theme => ({
    btnedit : {
         "&:hover": { color : '#fff' },
        color: 'blue',
        backgroundColor : '#fff',
        borderRadius : '50%',
    },
    btndel : {
       "&:hover": { color : '#fff' },
        color: 'red',
        backgroundColor : '#fff',
        borderRadius : '50%',
    },
    overlayStyle : {
        width: "100%", position: "absolute" , 
    }

}));

const CustomRow = (props) => {

    //console.log('PROPS:',props);
    const classes = useStyles();
    const [show,setShow]=useState(false)
   // const overlayStyle = { width: "100%", position: "absolute"  }
    
    return <Grid style={{ display: "contents" }} 
    onMouseOver={()=>setShow(true)}
    onMouseLeave={()=>setShow(false)}
    >
        {show&&<Grid align="right" className={classes.overlayStyle}>

            <Grid sm={2} align="center" >
                {/* <IconButton title="Edit" className={classes.btnedit} onClick={()=>props.handleEdit(props.data.user.id)}> */}
                  <Fab size="small"   color='primary' aria-label="add" className={classes.btnedit}  onClick={()=>props.handleEdit(props.data.user.id)}>
                      <GetAppIcon /> 
                    </Fab>
                {/* </IconButton> */}
                   <Fab size="small"  color='secondary' aria-label="add" className={classes.btndel} onClick={()=>props.handleDelete(props.data.user.id)}>
                      <DeleteIcon />
                    </Fab>
                {/* <IconButton title="Delete" className={classes.btndel} onClick={()=>props.handleDelete(props.data.user.id)}>
                  
                </IconButton> */}
            </Grid>
        </Grid>}
        <MTableBodyRow {...props} />
    </Grid>

}

export default CustomRow