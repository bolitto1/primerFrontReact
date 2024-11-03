import { AppBar, Button, Container, Drawer, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from '../../themes/useStyles';
import {Link} from 'react-router-dom';

const MenuAppBar = () => {
    const [open,setOpen] = useState(false);

    const classes = useStyles(); 
    const openToggle = () => {
        setOpen(true);
    };
    const closeToggle = () => {
        setOpen(false);
    }

  return (
    <div>
       <AppBar position="static" >
            <Container>
                <Toolbar>
                    <div className={classes.sectionMobile}>
                        <IconButton color='inherit' onClick={openToggle} >
                            <Icon fontSize='large'>
                                menu
                            </Icon>

                        </IconButton>
                    </div>
                    <Drawer open={open}
                        onClose={closeToggle}
                    >
                        <div className={classes.list}>
                        
                            <List>
                                <ListItem button className={classes.listItem} onClick={closeToggle}>
                                    <Link to="/login" className={classes.linkAppBarMobile}>
                                    <ListItemIcon className={classes.listItemIcon}>
                                        <Icon>person</Icon>
                                    </ListItemIcon>
                                    <ListItemText>Login</ListItemText>
                                    </Link>
                                </ListItem>
                                <ListItem button className={classes.listItem} onClick={closeToggle}>
                                    <Link to="/registrar" className={classes.linkAppBarMobile}>
                                    <ListItemIcon className={classes.listItemIcon}>
                                        <Icon>person_add</Icon>
                                    </ListItemIcon>
                                    <ListItemText>Registrar</ListItemText>
                                    </Link>
                                </ListItem>
                            </List>
                        </div>

                    </Drawer>
                    <div className= {classes.grow} >
                        <Link to="/" color="inherit" underline='none' className= {classes.linkMenuBarLogo} >
                            <Icon fontSize ="large" className={classes.mr} >
                                store
                            </Icon>
                            <Typography variant='h5'>
                                GuayasDigital
                            </Typography>
                        </Link>
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>    
                        
                        <Button color="inherit" className={classes.buttonIcono}>
                            <Link to="/login" className={classes.LinkAppBarDesktop}>
                            <Icon className={classes.mr}>person</Icon>
                            Login
                            </Link>
                        </Button>
                        <Button color="inherit" className={classes.buttonIcono}>
                            <Link to="/registrar" className={classes.LinkAppBarDesktop}>
                            <Icon className={classes.mr}>person_add</Icon>
                            Registrar
                            </Link>
                        </Button>
                    </div>
                </Toolbar>
            </Container>

       </AppBar>
    </div>
  );
};

export default MenuAppBar;