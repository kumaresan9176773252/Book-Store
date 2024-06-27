import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 20, background: 'black' }}
          variant='contained'
        >
          <Typography variant='h2'>VIEW ALL PRODUCTS</Typography>
        </Button>
      </Box>
    </div>
  )
}

export default Home;
