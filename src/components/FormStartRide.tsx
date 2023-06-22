import { useRouter } from 'next/router';
import React from 'react';
import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';

import Button from './Button';
import Input from './Input';

import { yupResolver } from '@hookform/resolvers/yup';
import schemaStartRide from 'validations/schemaStartRide';

interface IFormStartRideProps {
  idConductor: number | undefined;
}

function FormStartRide({ idConductor }: IFormStartRideProps) {
  const route = useRouter();

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors }
  } = useForm();
  const handleSubmit = ({
    kmInicial,
    checkList,
    motivo,
    observacao
  }: FieldValues) => {
    console.log(idConductor);
  };
  return (
    <div>
      <form onSubmit={onSubmit(handleSubmit)}>
        <Input
          label="Km inicial:"
          name="kmInicial"
          type="number"
          register={register as unknown as UseFormRegister<FieldValues>}
          placeholder="Digite o KM inicial nome"
          errors={errors}
        />

        <Input
          name="checkList"
          placeholder="Digite seu checklist"
          register={register as unknown as UseFormRegister<FieldValues>}
          label="Numero habilitação"
          errors={errors}
        />

        <Input
          name="motivo"
          placeholder="Digite o motivo"
          register={register as unknown as UseFormRegister<FieldValues>}
          label="Motivo"
          errors={errors}
        />

        <Input
          name="observacao"
          placeholder="Digite uma observação"
          register={register as unknown as UseFormRegister<FieldValues>}
          label="Observacao"
          errors={errors}
        />

        <Button type="submit" actionName="Começar" />
      </form>
    </div>
  );
}

export default FormStartRide;
