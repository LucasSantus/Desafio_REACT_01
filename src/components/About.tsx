import { Button, Container, Grid, Typography } from '@mui/material';

export const About: React.FC = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontSize:"52px",
                        }}
                    >
                        Sobre
                    </Typography>
                    <Typography
                        sx={{
                            fontSize:"22px",
                        }}
                    >
                        O objetivo desse desafio é criar um componente utilizando as tecnologias disponíveis do React
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained"
                        sx={{
                            padding:"10px",
                            lineHeight:"20px"
                        }}
                    >
                        Ver Mais
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}