import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MuiNextLink from '@components/core-components/MuiNextLink';
import { Container, Stack } from '@mui/material';
import GetStarted from '@components/GetStarted';
import MintNFT from '@components/web3/mint-nft';

export default function Home() {
  return (
    <Container>
      <Head id="home">
        <title>ᵒoⁿ-cʰₐₑᶦⁿ ᵍoᵇlin ᶠfaʳm</title>
        <meta name="description" content="ᵒoⁿ-cʰₐₑᶦⁿ ᵍaᵇlin ᵒoⁿ-cʰₐₑᶦⁿ gₒbbₗᵢₙₛ ᵒoⁿ-cʰₐₑᶦⁿ GₒBₗᵢₙₙₙₙₙₙₙₙₙ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Goblin Farm
        </h1>

        <p className={styles.description}>
          <Stack spacing={1}>
            <p>
              Coming Soon.
            </p>
            
          </Stack>
        </p>
        {/* <MintNFT /> */}
      </main>
    </Container>
  )
}
