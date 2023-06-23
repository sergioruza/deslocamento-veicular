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
}

function Conductors({ conductors, setIdConductor, cars }: IConductorProps) {
  const [drivers, setDrivers] = useState<conductor[]>([]);
  const [msg, setMsg] = useState(false);

  useEffect(() => {
    chooseConductor();
  }, []);

  const chooseConductor = () => {
    const choose: conductor[] = [];

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
      cars.splice(index, 1);
    }

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
            {drivers?.map(({ nome, id }) => (
              <span key={id} onClick={() => setIdConductor(id)}>
                Condutor: {nome}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Conductors;
