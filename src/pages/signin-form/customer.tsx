import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';

import Button from 'components/Button';
import Input from 'components/Input';
import Select from 'components/Select';

import { yupResolver } from '@hookform/resolvers/yup';
import schemaLoginCustomer from 'validations/schemaLoginCustomer';

function customer() {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schemaLoginCustomer) });
  const handleSubmit = (event: FieldValues) => {
    console.log(event);
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

export default customer;
