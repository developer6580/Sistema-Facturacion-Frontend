import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Stack
} from '@mui/material';

const Login = () => {
  return (
    <Container maxWidth="xs">
      <Grid
        container
        justifyContent="center"
        direction="column"
        minHeight={{ xs: '100vh' }}
      >
        <Card>
          <CardContent>
            <Box display="flex" justifyContent="center">
              <img src="/static/images/logo/Logotipo.png" width="120px" />
            </Box>
            <TextField
              fullWidth
              id="email"
              label="Correo Electrónico"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              id="password"
              label="Contraseña"
              variant="outlined"
              margin="normal"
            />
            <Stack
              sx={{ marginTop: 2 }}
              justifyContent={'space-between'}
              spacing={{ xs: 1 }}
              direction={{ xs: 'column', sm: 'row' }}
            >
              <Button variant="contained" color="primary">
                Iniciar Sesión
              </Button>
              <Button variant="text" color="secondary">
                ¿Olvidaste tu contraseña?
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

export default Login;
