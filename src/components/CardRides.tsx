import { useRouter } from 'next/router';
import React from 'react';

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
  return (
    <div onClick={() => handleClick(id)}>
      <span>Km inicial: {kmInicial}</span>
      <span>Km final: {kmFinal}</span>
      <span>Inicio: {inicioDeslocamento}</span>
      <span>Chegada: {fimDeslocamento}</span>
    </div>
  );
}

export default CardRides;
