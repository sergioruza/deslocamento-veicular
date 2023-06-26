import React, { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import Button from './Button';
import Input from './Input';
import Select from './Select';

import axios from 'axios';
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
function FormProfile() {
  const [isEditing, setIsEditing] = useState(true);
  useEffect(() => {
    const getInfoUser = async () => {
      const id = JSON.parse(localStorage.getItem('user') as string).id;
      await axios
        .get(`https://api-deslocamento.herokuapp.com/api/v1/Cliente/${id}`)
        .then(({ data }) => reset(data));
    };
    getInfoUser();
  }, []);

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors },
    reset
  } = useForm();

  const handleSubmit = async (newValues: FieldValues) => {
    delete newValues.id;
    await axios
      .post('https://api-deslocamento.herokuapp.com/api/v1/Cliente', newValues)
      .then(() => window.location.reload());
  };

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Input
        name="numeroDocumento"
        placeholder="Digite o número do documento"
        register={register}
        label="Número do Documento"
        errors={errors}
        disabled={isEditing}
      />
      <Select
        name="tipoDocumento"
        options={['CPF', 'RG']}
        register={register}
        label="Tipo do documento"
        disabled={isEditing}
      />
      <Input
        name="nome"
        placeholder="Digite seu nome"
        register={register}
        label="Nome:"
        errors={errors}
        disabled={isEditing}
      />{' '}
      <Input
        name="logradouro"
        placeholder="Digite seu logradouro"
        register={register}
        label="Logradouro"
        errors={errors}
        disabled={isEditing}
      />{' '}
      <Input
        name="numero"
        placeholder="Digite o número"
        register={register}
        label="número"
        type={'number'}
        errors={errors}
        disabled={isEditing}
      />{' '}
      <Input
        name="bairro"
        placeholder="Digite o bairro"
        register={register}
        label="Bairro"
        errors={errors}
        disabled={isEditing}
      />{' '}
      <Input
        name="cidade"
        placeholder="Digite o cidade"
        register={register}
        label="Cidade"
        errors={errors}
        disabled={isEditing}
      />{' '}
      <Select
        name="uf"
        options={states}
        register={register}
        label="Número do Documento"
        disabled={isEditing}
      />
      <Button
        actionName="Editar"
        type="button"
        onClick={() => setIsEditing(false)}
      />
      <Button actionName="Atualizar dados cadastrais" type="submit" />
    </form>
  );
}

export default FormProfile;
