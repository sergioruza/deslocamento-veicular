import React, { useEffect, useState } from 'react';

import RidesComponent from 'components/RidesComponent';

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

  return <div>{<RidesComponent rides={rides} />}</div>;
}

export default history;
