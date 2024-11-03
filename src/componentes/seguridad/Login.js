import { Avatar, Button, Card, Container, Grid, Icon,  TextField, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../themes/useStyles';
import {Link } from 'react-router-dom';

const Login = () => {
    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para manejar el inicio de sesión
        console.log("Formulario enviado");
    };

    return (
        <Container className={classes.containermt}>
            <Grid container justifyContent="center"> {/* Cambiado a justifyContent */}
                <Grid item lg={5} md={6}>
                    <Card className={classes.Card} align="center">
                        <Avatar className={classes.avatar}>
                            <Icon className={classes.icon}>face</Icon>
                        </Avatar>
                        <Typography variant='h5' color='primary'>
                            Ingrese su usuario
                        </Typography>
                        <form className={classes.formulario} onSubmit={handleSubmit}> {/* Manejo del evento submit */}
                            <Grid container spacing={2}>
                                <Grid item xs="12" className={classes.gridmb}>
                                    <TextField 
                                        type='email'
                                        label="Email"
                                        variant='outlined'   
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs="12" className={classes.gridmb}>
                                    <TextField 
                                        type='password'
                                        label="Password"
                                        variant='outlined'   
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs="12" className={classes.gridmb}>
                                    <Button 
                                        variant='contained'
                                        color='primary'
                                        fullWidth
                                        type="submit" // Añadido tipo submit
                                    >
                                        Ingresar
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link to="/registrar" className={classes.link}> {/* Cambiado a RouterLink */}
                                No tienes cuenta, registrate
                            </Link>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;