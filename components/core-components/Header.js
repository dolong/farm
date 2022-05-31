import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import MuiNextLink from "@components/core-components/MuiNextLink";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "@components/core-components/BackToTop";
import Connect from "@components/web3/connect";
import { Stack } from "@mui/material";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);


    {/* export const navLinks = [
  { title: 'home', path: '/#home' },
  { title: 'demo', path: '/#demo'},
]; */}


const Header = () => {
  return (
    <>
    {/* <HideOnScroll> */}
        <AppBar position="fixed" sx={{ backgroundColor: '#FFFFFF' }} elevation={0}>
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: `flex`, justifyContent: `space-between`, alignItems: 'center' }}
            >
              
                <MuiNextLink activeClassName="active" href='/'>
                GoblinFarm.WTF
                </MuiNextLink>
              <Stack direction="row" alignItems='center'>
                <Connect />
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      {/* </HideOnScroll> */}
      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="primary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
