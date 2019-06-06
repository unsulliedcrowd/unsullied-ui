import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Users from '../data/users';

function Dashboard() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h6" className="TitleBar">
          Dashboard
        </Typography>

        <Users />
      </Container>
    </React.Fragment>
  );
}

export default Dashboard;
