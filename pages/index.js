import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Divider from '@mui/material/Divider';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ElevateAppBar from '../src/components/ElevateAppBar';
import ScrollTop from '../src/components/ScrollTop';
import Contact from '../src/components/Contact';
import Header from '../src/components/Header';
import Intro from '../src/components/Intro';

export default function Index(props) {
  return (
    <div>
      <Box sx={{ height: '100%' }}>
        <ElevateAppBar />
        <main>
          <Box sx={{ width: '100%', height: '100%' }}>
            <Divider />
            <Header />
            <Intro />
            <Divider />
            <Contact />
          </Box>
        </main>
      </Box>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
