import { useRouter } from 'next/router';
import React from 'react';
import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';

import Select from './/Select';
import Button from './Button';
import Input from './Input';

import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import useLocalStorage from 'hooks/useLocalStorage';
import schemaRegisterCustomer from 'validations/schemaRegisterCustomer';
const states = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO'
];
interface IRegisterUser {
  nome: string;
  numeroDocumento: string;
  id: string;
}
function FormRegisterCustomer() {
  const route = useRouter();
  const [value, setValue] = useLocalStorage<IRegisterUser>('user', {
    nome: '',
    numeroDocumento: '',
    id: ''
  });
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schemaRegisterCustomer) });
  const handleSubmit = async (newValues: FieldValues) => {
    const request = await axios.post(
      'https://api-deslocamento.herokuapp.com/api/v1/Cliente',
      {
        ...newValues
      }
    );
    if (request.status !== 200) {
      return alert('Algum erro aconteceu, tente novamente');
    }

    if (typeof setValue === 'function') {
      setValue({
        ...value,
        nome: newValues.nome,
        numeroDocumento: newValues.nunumeroDocumento,
        id: request.data
      });
    }

    route.push('/home');
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
        options={['RG', 'CPF']}
        label="Tipo de Documento"
        name="tipoDocumento"
      />

      <Input
        name="numeroDocumento"
        placeholder="Digite o documento"
        register={register as unknown as UseFormRegister<FieldValues>}
        label="Documento"
        errors={errors}
      />

      <Input
        name="logradouro"
        placeholder="Digite o logradouro"
        register={register as unknown as UseFormRegister<FieldValues>}
        label="Logradouro"
        errors={errors}
      />

      <Input
        name="numero"
        placeholder="Digite o numero da casa"
        register={register as unknown as UseFormRegister<FieldValues>}
        label="Número"
        errors={errors}
      />

      <Input
        name="bairro"
        placeholder="Digite o bairro"
        register={register as unknown as UseFormRegister<FieldValues>}
        label="Bairro"
        errors={errors}
      />

      <Input
        name="cidade"
        placeholder="Digite a ciadade"
        register={register as unknown as UseFormRegister<FieldValues>}
        label="Cidade"
        errors={errors}
      />

      <Select
        register={register as unknown as UseFormRegister<FieldValues>}
        options={states}
        label="Estado"
        name="uf"
      />

      <Button type="submit" actionName="Cadastrar" />
    </form>
  );
}

export default FormRegisterCustomer;
