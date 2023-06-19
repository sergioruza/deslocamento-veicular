import React from 'react';
import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';

import Select from './/Select';
import Button from './Button';
import Input from './Input';

import { yupResolver } from '@hookform/resolvers/yup';
import schemaRegisterCustomer from 'validations/schemaRegisterCustomer';
function FormRegisterCustomer() {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schemaRegisterCustomer) });
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
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

      <Select
        register={register as unknown as UseFormRegister<FieldValues>}
        options={['CPF', 'RG']}
        label="Tipo de Documento"
      />

      <Input
        name="document"
        placeholder="Digite o documento"
        register={register as unknown as UseFormRegister<FieldValues>}
        label="Documento"
        errors={errors}
      />

      <Input
        name="publicPlace"
        placeholder="Digite o logradouro"
        register={register as unknown as UseFormRegister<FieldValues>}
        label="Logradouro"
        errors={errors}
      />

      <Input
        name="houseNumber"
        placeholder="Digite o numero da casa"
        register={register as unknown as UseFormRegister<FieldValues>}
        label="Número"
        errors={errors}
      />

      <Input
        name="district"
        placeholder="Digite o bairro"
        register={register as unknown as UseFormRegister<FieldValues>}
        label="Bairro"
        errors={errors}
      />

      <Input
        name="city"
        placeholder="Digite a ciadade"
        register={register as unknown as UseFormRegister<FieldValues>}
        label="Cidade"
        errors={errors}
      />

      <Input
        name="state"
        placeholder="Digite o Estado"
        register={register as unknown as UseFormRegister<FieldValues>}
        label="UF"
        errors={errors}
      />

      <Button type="submit" actionName="Cadastrar" />
    </form>
  );
}

export default FormRegisterCustomer;
