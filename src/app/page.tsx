'use client';
import { useState } from 'react';

import { Box, Button, Link } from '@mui/material';

export default function Home() {
  const [expandido, setExpandido] = useState(false);

  const handleExpandir = () => {
    setExpandido(!expandido);
  };
  return (
    <Box
      sx={{
        margin: '10px',
        backgroundColor: '',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Button color="secondary" variant="contained">
        <Link underline="none" href="/signup-form/conductor">
          Trabalhe como motorista
        </Link>
      </Button>

      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Button
          sx={{ margin: '5px', textDecoration: 'none' }}
          variant="contained"
          onClick={handleExpandir}
        >
          Login
        </Button>
        {expandido && (
          <div>
            <Link href="/signin-form/customer">Cliente</Link>
            <Link href="/signin-form/conductor">Condutor</Link>
          </div>
        )}
        <Button sx={{ margin: '5px' }} variant="contained">
          <Link href="/signup-form/customer">Cadastre-se</Link>
        </Button>
      </Box>
    </Box>
  );
}
