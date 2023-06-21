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

const mock = {
  id: 48,
  kmInicial: 0,
  kmFinal: null,
  inicioDeslocamento: '2023-06-15T16:15:00',
  fimDeslocamento: null,
  checkList: '',
  motivo: '',
  observacao: 'Test 2',
  idCondutor: 94,
  idVeiculo: 50,
  idCliente: 248
};

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
      <span>KM Inicial: {mock.kmInicial}</span>
      <span>KM Final: {mock.kmFinal}</span>
      <span>Início do Deslocamento: {mock.inicioDeslocamento}</span>
      <span>Fim do Deslocamento: {mock.fimDeslocamento}</span>
      <span>CheckList: {mock.checkList}</span>
      <span>Motivo: {mock.motivo}</span>
      <span>Observação: {mock.observacao}</span>
    </div>
  );
}

export default CardRideDetails;
