import React from 'react';

interface ICardRideDetails {
  kmInicial: number;
  kmFinal: number;
  inicioDeslocamento: string;
  fimDeslocamento: string;
  checkList: string;
  motivo: string;
  observacao: string;
}

function CardRideDetails({
  kmInicial,
  kmFinal,
  inicioDeslocamento,
  fimDeslocamento,
  checkList,
  motivo,
  observacao
}: ICardRideDetails) {
  return (
    <div>
      <span>KM Inicial: {kmInicial}</span>
      <span>KM Final: {kmFinal}</span>
      <span>Início do Deslocamento: {inicioDeslocamento}</span>
      <span>Fim do Deslocamento: {fimDeslocamento}</span>
      <span>CheckList: {checkList}</span>
      <span>Motivo: {motivo}</span>
      <span>Observação: {observacao}</span>
    </div>
  );
}

export default CardRideDetails;
