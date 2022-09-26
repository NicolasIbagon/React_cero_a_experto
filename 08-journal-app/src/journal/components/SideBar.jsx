import { TurnedInNot } from "@mui/icons-material"
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"



export const SideBar = ({drawerWidth = 240}) => {

    const {displayName} =  useSelector(state => state.auth)

  return (
    <Box 
        component='nav'
        sx= {{width: {sm:drawerWidth}, flexShrink: {sm:0}}}>
            <Drawer variant='permanent' open sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
                }}>
            
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>Nicolas Ibagon</Typography>
                {displayName}
            </Toolbar>
            <Divider/>
            <List>
                { 
                    ['1','2','3','4','5'].map(text => (
                        <ListItem key= {text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>

                                <Grid container>

                                    <ListItemText primary = {text}/>
                                    <ListItemText secondary = {'Velit deserunt et sint dolore proident qui quis anim minim.'}/>
                                    
                                </Grid>
                            </ListItemButton>

                        </ListItem>
                    ))
                    
                }
            </List>

            </Drawer>
        </Box>
  )
}
