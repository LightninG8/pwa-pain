import React, {Suspense} from 'react';
import { Box, Container } from '@material-ui/core';
import { Counter } from './components';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: '100%'
    }
  }),
);

const App: React.FC = () => {
  const s = useStyles();

  return (
    <Suspense fallback={'loading...'}>
      <Box component="div" className='app'>
        <Container maxWidth="xs" disableGutters className={s.container}>
          <Counter/>
        </Container>
      </Box>
    </Suspense>
  );
};

export default App;
