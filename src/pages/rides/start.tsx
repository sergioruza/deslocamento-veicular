import React, { useState } from 'react';

import Conductors from 'components/Conductors';
import FormStartRide from 'components/FormStartRide';

const mockConductor = [
  {
    id: 1,
    nome: 'Paulo Costa',
    numeroHabilitacao: '1234',
    catergoriaHabilitacao: 'Aasdasdasdaaaaaaaaaaaaa',
    vencimentoHabilitacao: '2028-03-23T00:00:00'
  },
  {
    id: 2,
    nome: 'string',
    numeroHabilitacao: 'string',
    catergoriaHabilitacao: '1233333',
    vencimentoHabilitacao: '2028-06-22T11:08:09.856'
  },
  {
    id: 4,
    nome: 'teste',
    numeroHabilitacao: 'teste',
    catergoriaHabilitacao: 'teste',
    vencimentoHabilitacao: '2023-06-16T03:00:00'
  },
  {
    id: 5,
    nome: 'asd',
    numeroHabilitacao: 'asd',
    catergoriaHabilitacao: 'asd',
    vencimentoHabilitacao: '2023-06-08T03:00:00'
  },
  {
    id: 6,
    nome: 'victor22',
    numeroHabilitacao: '2345',
    catergoriaHabilitacao: 'e',
    vencimentoHabilitacao: '2030-03-23T00:00:00'
  },
  {
    id: 7,
    nome: 'Teste',
    numeroHabilitacao: 'Teste Nro',
    catergoriaHabilitacao: 'olaaaaaaaaaaaaaaaaaa',
    vencimentoHabilitacao: '2023-06-23T12:58:00'
  },
  {
    id: 8,
    nome: 'thiagiteste2344',
    numeroHabilitacao: '2345',
    catergoriaHabilitacao: 'e',
    vencimentoHabilitacao: '1999-03-23T00:00:00'
  },
  {
    id: 9,
    nome: 'teste',
    numeroHabilitacao: '123',
    catergoriaHabilitacao: 'teste',
    vencimentoHabilitacao: '2023-12-29T09:48:00'
  },
  {
    id: 10,
    nome: 'teste 002 G',
    numeroHabilitacao: '88888888',
    catergoriaHabilitacao: 'AB',
    vencimentoHabilitacao: '2023-06-30T03:00:00'
  }
];

function startRide() {
  const [idConductor, setIdConductor] = useState<number>();
  // const [conductors, setConductores] = useState
  return (
    <div>
      <FormStartRide idConductor={idConductor} />
      <Conductors setIdConductor={setIdConductor} conductors={mockConductor} />
    </div>
  );
}

export default startRide;
