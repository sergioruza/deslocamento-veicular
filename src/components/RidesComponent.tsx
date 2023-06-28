import React from 'react';

import CardRides from './CardRides';

import { Box } from '@mui/material';

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center'
      }}
    >
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
    </Box>
  );
}

export default RidesComponent;
