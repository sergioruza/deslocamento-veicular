import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';

import Select from './/Select';
import Button from './Button';
import Input from './Input';

import { yupResolver } from '@hookform/resolvers/yup';
import schemaLoginCustomer from 'validations/schemaLoginCustomer';

function FormLoginCustomer() {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schemaLoginCustomer) });
  const handleSubmit = ({ document, name, typeDocument }: FieldValues) => {
    console.log(document);
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

      <Button type="submit" actionName="Enviar" />
    </form>
  );
}

export default FormLoginCustomer;
