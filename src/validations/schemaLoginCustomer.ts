import { object, string } from 'yup';

const schemaLoginCustomer = object({
  name: string()
    .required('Campo obrigatório')
    .min(5, 'O campo deve ter no mínimo 5 caracteres'),
  document: string().required('Número do documento é obrigatório')
});

export default schemaLoginCustomer;
