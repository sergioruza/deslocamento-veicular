import React, { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import Button from './Button';
import Input from './Input';
import Select from './Select';

import axios from 'axios';

function ProfileEditConductor() {
  const [isEditing, setIsEditing] = useState(true);
  useEffect(() => {
    const getInfoConductor = async () => {
      const id = JSON.parse(localStorage.getItem('conductor') as string).id
        ? JSON.parse(localStorage.getItem('conductor') as string).id
        : 0;
      await axios
        .get(`https://api-deslocamento.herokuapp.com/api/v1/Condutor/${id}`)
        .then(({ data }) => reset(data));
    };
    getInfoConductor();
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
      .post('https://api-deslocamento.herokuapp.com/api/v1/Condutor', newValues)
      .then(() => window.location.reload());
  };

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Input
        name="numeroHabilitacao"
        placeholder="Digite o número do documento"
        register={register}
        label="Número do Documento"
        errors={errors}
        disabled={isEditing}
      />
      <Select
        name="categoriaHabilitacao"
        options={['A', 'B', 'C', 'D']}
        register={register}
        label="Categoria"
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
        name="vencimentoHabilitacao"
        placeholder="Digite o vencimento"
        register={register}
        label="Vencimento:"
        errors={errors}
        disabled={isEditing}
      />{' '}
      <Button
        actionName="Editar"
        type="button"
        onClick={() => setIsEditing(false)}
      />
      <Button actionName="Atualizar dados cadastrais" type="submit" />
    </form>
  );
}

export default ProfileEditConductor;
