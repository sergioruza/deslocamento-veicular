import { useRouter } from 'next/router';
import React from 'react';

import { Card, CardContent, Typography } from '@mui/material';
import { format } from 'date-fns';

interface IRide {
  id: number;
  kmInicial: number;
  kmFinal: number;
  inicioDeslocamento: string;
  fimDeslocamento: string;
}

function CardRides({
  kmInicial,
  kmFinal,
  inicioDeslocamento,
  fimDeslocamento,
  id
}: IRide) {
  const route = useRouter();
  function handleClick(id: number) {
    route.push(`/rides/${id}`);
  }
  const date = new Date(inicioDeslocamento);
  const dateFormat = format(date, 'dd/MM/yyyy');
  return (
    <Card
      sx={{ maxWidth: 300, cursor: 'pointer', border: 'solid red 1px' }}
      onClick={() => handleClick(id)}
    >
      <CardContent>
        <Typography>Km inicial: {kmInicial}</Typography>
        <Typography>Km final: {kmFinal}</Typography>
        <Typography>Inicio: {dateFormat}</Typography>
        <Typography>Chegada: {fimDeslocamento}</Typography>
      </CardContent>
    </Card>
  );
}

export default CardRides;
