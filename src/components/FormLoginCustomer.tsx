import { useRouter } from 'next/router';
import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';

export interface IUser {
  nome: string;
  numeroDocumento: string;
}

import Select from './/Select';
import Button from './Button';
import Input from './Input';

import { yupResolver } from '@hookform/resolvers/yup';
import useLocalStorage from 'hooks/useLocalStorage';
import schemaLoginCustomer from 'validations/schemaLoginCustomer';

function FormLoginCustomer() {
  const route = useRouter();
  const [value, setValue] = useLocalStorage<IUser>('user', {
    nome: '',
    numeroDocumento: ''
  });

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schemaLoginCustomer) });
  const handleSubmit = ({ document, name }: FieldValues) => {
    if (typeof setValue === 'function') {
      setValue({ ...value, nome: name, numeroDocumento: document });
    }

    route.push('/home');
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
        name="typeDocument"
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
