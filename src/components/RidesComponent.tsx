import React from 'react';

import CardRides from './CardRides';

export interface IRides {
  id: number;
  kmInicial: number;
  kmFinal: number;
  inicioDeslocamento: string;
  fimDeslocamento: string;
  checkList: string;
  motivo: string;
  observacao: string;
  idCondutor: number;
  idVeiculo: number;
  idCliente: number;
}

interface CardRidesProps {
  rides: IRides[];
}

function RidesComponent({ rides }: CardRidesProps) {
  return (
    <div>
      {rides.map(
        ({ kmInicial, kmFinal, inicioDeslocamento, fimDeslocamento, id }) => {
          return (
            <CardRides
              key={id}
              kmInicial={kmInicial}
              kmFinal={kmFinal}
              inicioDeslocamento={inicioDeslocamento}
              fimDeslocamento={fimDeslocamento}
              id={id}
            />
          );
        }
      )}
    </div>
  );
}

export default RidesComponent;
