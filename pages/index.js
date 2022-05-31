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
        <meta property="og:title" content="Goblin Farm: On-chain Goblin Farming Gaming"/>
        <meta property="og:description" content="No Roadmap, CC0, on-chain!"/>
        <meta property="og:image" content="https://www.goblinfarm.wtf/bg.png"/>
        <meta property="og:site_name" content="Goblin Farm: On-chain Goblin Farming Gaming"/>
        <meta property="keywords" content="GoblinFarm, NFT, Game"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:image" content=".png"/>
        <link rel="icon" href="/img/favicons/favicon-32x32.png"/><meta name="next-head-count" content="11"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Gᵤbˡin farᵣₘ
        </h1>

        <p className={styles.description}>
          <Stack spacing={1}>
            <p>
            Cᵃmmin ₛune.
            </p>
            
          </Stack>
        </p>
        {/* <MintNFT /> */}
      </main>
    </Container>
  )
}
