import React, { useEffect, useState } from 'react';

type conductor = {
  id: number;
  nome: string;
  numeroHabilitacao: string;
  catergoriaHabilitacao: string;
  vencimentoHabilitacao: string;
};

interface IConductorProps {
  conductors: conductor[];
  setIdConductor: React.Dispatch<React.SetStateAction<number | undefined>>;
}

function Conductors({ conductors, setIdConductor }: IConductorProps) {
  const [drivers, setDrivers] = useState<conductor[]>([]);

  useEffect(() => {
    chooseConductor();
  }, []);

  const chooseConductor = () => {
    const choose: conductor[] = [];

    for (let i = 0; i < 2; i++) {
      const index = Math.floor(Math.random() * conductors.length);
      choose.push(conductors[index]);
      conductors.splice(index, 1);
    }

    setDrivers(choose);
  };

  return (
    <div>
      {drivers.map(({ nome, id }) => (
        <span key={id} onClick={() => setIdConductor(id)}>
          Condutor: {nome}
        </span>
      ))}
    </div>
  );
}

export default Conductors;
