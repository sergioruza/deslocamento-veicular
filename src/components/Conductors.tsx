import React, { useEffect, useState } from 'react';

export type conductor = {
  id: number;
  nome: string;
  numeroHabilitacao: string;
  catergoriaHabilitacao: string;
  vencimentoHabilitacao: string;
};

export type car = {
  id: number;
  placa: string;
  marcaModelo: string;
  anoFabricacao: number;
  kmAtual: number;
};

interface IConductorProps {
  conductors: conductor[] | undefined;
  setIdConductor: React.Dispatch<React.SetStateAction<number | undefined>>;
  cars: car[] | undefined;
  setIdCar: React.Dispatch<React.SetStateAction<number | undefined>>;
}

function Conductors({
  conductors,
  setIdConductor,
  cars,
  setIdCar
}: IConductorProps) {
  const [drivers, setDrivers] = useState<conductor[]>([]);
  const [newCars, setCars] = useState<car[]>();
  const [msg, setMsg] = useState(false);

  useEffect(() => {
    chooseConductor();
  }, []);

  const chooseConductor = () => {
    const choose: conductor[] = [];
    const carsSort: car[] = [];

    if (!conductors || !cars) {
      return setMsg(true);
    }

    for (let i = 0; i < 2; i++) {
      const index = Math.floor(Math.random() * conductors.length);
      choose.push(conductors[index]);
      conductors.splice(index, 1);
    }

    for (let i = 0; i < 2; i++) {
      const index = Math.floor(Math.random() * cars.length);
      carsSort.push(cars[index]);
      cars.splice(index, 1);
    }

    setCars(carsSort);
    setDrivers(choose);
  };

  return (
    <div>
      {msg ? (
        <span>Algo de errado aconteceu. Tente novamente</span>
      ) : (
        <>
          <div>
            <span>Selecione um motorista</span>
            {drivers.map(({ nome, id }) => (
              <span key={id} onClick={() => setIdConductor(id)}>
                Condutor: {nome}
              </span>
            ))}
          </div>
          <div>
            <span>Selecione um veíclulo</span>
            {newCars?.map(({ marcaModelo, id }) => (
              <span key={id} onClick={() => setIdCar(id)}>
                Carro: {marcaModelo}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Conductors;
