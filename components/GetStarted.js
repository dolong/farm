import { Container, Grid } from '@mui/material';
import styles from '../styles/Home.module.css';

const GetStarted = () => {
  return (
    <Container width="100%">
      <Grid container justifyContent="center" alignItems="center">
        <a href="https://github.com/straightupjac/nft-merkle-whitelist-scaffold/tree/main/contracts" target="_blank" rel="noreferrer" className={styles.card}>
          <h2>Contract Setup&rarr;</h2>
          <p>Set up your ERC721 contract, merkle whitelist and deploy.</p>
        </a>
      </Grid>
    </Container>
);
}

export default GetStarted;
