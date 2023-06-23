import React, { useEffect, useState } from 'react';

import Conductors from 'components/Conductors';
import { car } from 'components/Conductors';
import FormStartRide from 'components/FormStartRide';

import axios from 'axios';

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

const mockCar = [
  {
    id: 1,
    placa: '1234',
    marcaModelo: '1234',
    anoFabricacao: 1234,
    kmAtual: 1234
  },
  {
    id: 6,
    placa: '2345ba',
    marcaModelo: 'gol',
    anoFabricacao: 2005,
    kmAtual: 392989
  },
  {
    id: 7,
    placa: 'MJFD7443',
    marcaModelo: 'Porsche - 911',
    anoFabricacao: 1985,
    kmAtual: 7000
  },
  {
    id: 8,
    placa: 'fdsafdsfsd',
    marcaModelo: 'Fiat - Uno',
    anoFabricacao: 1970,
    kmAtual: 5455
  },
  {
    id: 9,
    placa: '123ABC',
    marcaModelo: 'Fiat',
    anoFabricacao: 2012,
    kmAtual: 2000
  },
  {
    id: 10,
    placa: 'adasd',
    marcaModelo: 'sadsad',
    anoFabricacao: 0,
    kmAtual: 0
  },
  {
    id: 11,
    placa: 'asdsad',
    marcaModelo: 'sdasda',
    anoFabricacao: 0,
    kmAtual: 0
  },
  {
    id: 12,
    placa: 'sadasd',
    marcaModelo: 'ads',
    anoFabricacao: 0,
    kmAtual: 0
  },
  {
    id: 13,
    placa: 'asd',
    marcaModelo: 'asdasda',
    anoFabricacao: 1231,
    kmAtual: 0
  },
  {
    id: 14,
    placa: 'asdasd',
    marcaModelo: 'sadd',
    anoFabricacao: 3123,
    kmAtual: 12
  },
  {
    id: 15,
    placa: 'dsadsa',
    marcaModelo: 'asdads',
    anoFabricacao: 1234,
    kmAtual: 23031
  },
  {
    id: 17,
    placa: 'FAK-908',
    marcaModelo: 'KIA',
    anoFabricacao: 2020,
    kmAtual: 1900
  }
];
function startRide() {
  const [idConductor, setIdConductor] = useState<number>();
  const [conductors, setConductores] = useState([]);
  const [cars, setCars] = useState<car[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    conductorAndVeichles();
    setLoading(false);
  }, []);

  const conductorAndVeichles = async () => {
    await axios
      .get('https://api-deslocamento.herokuapp.com/api/v1/Condutor')
      .then(({ data }) => setConductores(data));
    await axios
      .get('https://api-deslocamento.herokuapp.com/api/v1/Veiculo')
      .then(({ data }) => setCars(data));
  };
  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <Conductors setIdConductor={setIdConductor} conductors={conductors} />

          {cars && cars.length > 0 && (
            <FormStartRide cars={cars} idConductor={idConductor} />
          )}
        </>
      )}
    </div>
  );
}

export default startRide;
