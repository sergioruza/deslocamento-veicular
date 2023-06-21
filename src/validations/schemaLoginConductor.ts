import { object, string } from 'yup';

const schemaLoginCunductor = object({
  name: string()
    .required('Campo obrigatório')
    .min(5, 'O campo deve ter no mínimo 5 caracteres'),
  numeroHabilitacao: string()
    .required('Número do documento é obrigatório')
    .min(8, 'Esse campo é necessário no mínimo 8 caracteres')
});

export default schemaLoginCunductor;
