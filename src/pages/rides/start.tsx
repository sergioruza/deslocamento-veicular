import React, { useEffect, useState } from 'react';

import Conductors from 'components/Conductors';
import { car } from 'components/Conductors';
import FormStartRide from 'components/FormStartRide';

import axios from 'axios';

function startRide() {
  const [idConductor, setIdConductor] = useState<number>();
  const [conductors, setConductores] = useState([]);
  const [cars, setCars] = useState<car[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    conductorAndVeichles();
    setLoading(false);
  }, []);

  const conductorAndVeichles = async () => {
    await axios
      .get('https://api-deslocamento.herokuapp.com/api/v1/Condutor')
      .then(({ data }) => setConductores(data));
    await axios
      .get('https://api-deslocamento.herokuapp.com/api/v1/Veiculo')
      .then(({ data }) => setCars(data));
  };
  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <Conductors setIdConductor={setIdConductor} conductors={conductors} />

          {cars && cars.length > 0 && (
            <FormStartRide cars={cars} idConductor={idConductor} />
          )}
        </>
      )}
    </div>
  );
}

export default startRide;
