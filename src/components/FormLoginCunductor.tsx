import { useRouter } from 'next/router';
import React from 'react';
import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';

import Button from './Button';
import { IconductorStorage } from './FormRegisterCunductor';
import Input from './Input';

import { yupResolver } from '@hookform/resolvers/yup';
import useLocalStorage from 'hooks/useLocalStorage';
import schemaLoginCunductor from 'validations/schemaLoginConductor';

function FormLoginCunductor() {
  const route = useRouter();
  const [value, setValue] = useLocalStorage<IconductorStorage>('user', {
    nome: '',
    numeroHabilitacao: ''
  });

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schemaLoginCunductor) });
  const handleSubmit = ({ nome, numeroHabilitacao }: FieldValues) => {
    if (typeof setValue === 'function') {
      setValue({ ...value, nome, numeroHabilitacao });
    }

    route.push('/conductor-home');
  };
  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Input
        label="Nome"
        name="name"
        register={register as unknown as UseFormRegister<FieldValues>}
        placeholder="Digite seu nome"
        errors={errors}
      />

      <Input
        name="numeroHabilitacao"
        placeholder="Digite sua habilitação"
        register={register as unknown as UseFormRegister<FieldValues>}
        label="Numero habilitação"
        errors={errors}
      />

      <Button type="submit" actionName="Enviar" />
    </form>
  );
}

export default FormLoginCunductor;
