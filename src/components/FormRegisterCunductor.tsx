import { useRouter } from 'next/router';
import React from 'react';
import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';

import Button from './Button';
import Input from './Input';
import Select from './Select';

import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { format } from 'date-fns';
import useLocalStorage from 'hooks/useLocalStorage';
import schemaRegisterConductor from 'validations/schemaRegisterConductor';

export interface IconductorStorage {
  id: string;
  nome: string;
}

function FormRegisterCunductor() {
  const route = useRouter();
  const [value, setValue] = useLocalStorage<IconductorStorage>('conductor', {
    id: '',
    nome: ''
  });
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schemaRegisterConductor) });
  const handleSubmit = async ({
    nome,
    numeroHabilitacao,
    categoriaHabilitacao,
    vencimentoHabilitacao
  }: FieldValues) => {
    // if (request.status !== 200) {
    //   return alert('Algum erro aconteceu, tente novamente');
    // }

    const formatDate = format(
      new Date(vencimentoHabilitacao),
      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
    );
    const request = await axios.post(
      'https://api-deslocamento.herokuapp.com/api/v1/Condutor',
      {
        nome,
        numeroHabilitacao,
        categoriaHabilitacao,
        vencimentoHabilitacao: formatDate
      }
    );
    if (typeof setValue === 'function') {
      setValue({
        id: request.data,
        nome
      });
    }
    route.push('/conductor-home');
  };
  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Input
        label="Nome"
        name="nome"
        register={register as unknown as UseFormRegister<FieldValues>}
        placeholder="Digite seu nome"
        errors={errors}
      />

      <Select
        register={register as unknown as UseFormRegister<FieldValues>}
        options={['A', 'B', 'C', 'D', 'E']}
        label="Categoria da habilitação"
        name="categoriaHabilitacao"
      />

      <Input
        name="numeroHabilitacao"
        placeholder="Digite o documento"
        register={register as unknown as UseFormRegister<FieldValues>}
        label="Numero da Habilitação"
        errors={errors}
        type="number"
      />

      <Input
        name="vencimentoHabilitacao"
        placeholder="Digite o logradouro"
        register={register as unknown as UseFormRegister<FieldValues>}
        label="Vencimento"
        errors={errors}
        type="date"
      />

      <Button type="submit" actionName="Cadastrar como cundutor" />
    </form>
  );
}

export default FormRegisterCunductor;
