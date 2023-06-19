import { FieldValues, useForm } from 'react-hook-form';

import Button from 'components/Button';
import Input from 'components/Input';

function customer() {
  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors }
  } = useForm();
  const handleSubmit = (event: FieldValues) => {
    console.log(event);
  };

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <Input
        label="Nome"
        name="name"
        register={register}
        placeholder="Digite seu nome"
      />

      <Input
        name="document"
        placeholder="Digite o documento"
        register={register}
        label="Documento"
      />

      <Button type="submit" actionName="Enviar" />
    </form>
  );
}

export default customer;
