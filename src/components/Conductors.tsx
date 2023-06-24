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
}

function Conductors({ conductors, setIdConductor }: IConductorProps) {
  const [loading, setMsg] = useState(true);

  useEffect(() => {
    setMsg(false);
  }, []);

  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <div>
            <span>Selecione um motorista</span>
            {conductors?.map(({ nome, id }) => (
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
