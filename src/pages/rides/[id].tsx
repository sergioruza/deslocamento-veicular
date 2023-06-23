import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Button from 'components/Button';
import CardRideDetails from 'components/CardRideDetails';
import { IRides } from 'components/RidesComponent';

import axios from 'axios';
function RideId() {
  const router = useRouter();
  const { id } = router.query;
  const [ride, setRide] = useState<IRides>();
  useEffect(() => {
    const getRide = async (id: string) => {
      const request = await axios.get(
        `https://api-deslocamento.herokuapp.com/api/v1/Deslocamento/${id}`
      );
      setRide(request.data);
    };
    getRide(id as string);
  }, []);

  async function handleClick() {
    await axios.delete(
      `https://api-deslocamento.herokuapp.com/api/v1/Deslocamento/${id}`
    );
    router.push('/rides/history');
  }
  return (
    <div>
      {!ride ? (
        <span>Não foi possível trazer as informações</span>
      ) : (
        <CardRideDetails
          kmInicial={ride.kmInicial}
          kmFinal={ride.kmFinal}
          inicioDeslocamento={ride.inicioDeslocamento}
          fimDeslocamento={ride.fimDeslocamento}
          checkList={ride.checkList}
          motivo={ride.motivo}
          observacao={ride.observacao}
        />
      )}
      <Button
        actionName="Deletar corrida"
        type="button"
        onClick={handleClick}
      />
    </div>
  );
}

export default RideId;
