import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Hello() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h6" className="TitleBar">
          Hello!
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Hello;
