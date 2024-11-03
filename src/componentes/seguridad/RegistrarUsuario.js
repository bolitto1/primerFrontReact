import { Avatar, Button, Card, Container, Grid, Icon, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../themes/useStyles';
import { Link } from 'react-router-dom';

const RegistrarUsuario = () => {
    const classes = useStyles();

  return (
     <Container>
        <Grid container justifyContent='center'>
            <Grid item lg="6" md="8">
                <Card className={classes.Card} align="center">
                    <Avatar className={classes.avatar}>
                        <Icon className={classes.icon}>
                            person_add
                        </Icon>
                    </Avatar>
                    <Typography variant='h5' color='primary' >
                        Registrar usuario</Typography>
                        <form className={classes.formulario}>
                            <Grid container spacing={2}>
                                <Grid item md="6" xs="12" className={classes.gridmb}>
                                    <TextField
                                        label="Nombres" variant='outlined' fullWidth
                                    >
                                    </TextField>
                                    
                                </Grid>
                                <Grid item md="6" xs="12" className={classes.gridmb}>
                                    <TextField
                                        label="Apellidos" variant='outlined' fullWidth
                                    >
                                    </TextField>
                                    
                                </Grid>
                                <Grid item md="12" xs="12" className={classes.gridmb}>
                                    <TextField
                                    label="Email" variant='outlined' fullWidth type='email'
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item md="12" xs="12" className={classes.gridmb}>
                                    <TextField
                                    label="Password" variant='outlined' fullWidth type='password'
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item md="12" xs="12" className={classes.gridmb}>
                                    <Button
                                     variant='contained' fullWidth color='primary'
                                    >Registrar
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link
                                to='/login'
                                variant='body1'
                                className={classes.link}
                            >
                             Ya tienes una cuenta?, Logueate
                            </Link>
                                {/* Primera fila con 3 columnas */}
                           
                        </form>
                </Card>
                
            </Grid>
        </Grid>
     </Container>
  );
};

export default RegistrarUsuario;

