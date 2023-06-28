import React, { useEffect, useState } from 'react';

import RidesComponent from 'components/RidesComponent';

import { Box } from '@mui/material';
import axios from 'axios';

function history() {
  const [rides, setRides] = useState([]);
  useEffect(() => {
    const getRides = async () => {
      const request = await axios.get(
        'https://api-deslocamento.herokuapp.com/api/v1/Deslocamento'
      );
      setRides(request.data);
    };
    getRides();
  }, []);

  return (
    <Box
      sx={{
        border: 'solid red 1px',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      {<RidesComponent rides={rides} />}
    </Box>
  );
}

export default history;
