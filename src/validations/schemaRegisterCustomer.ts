import { object, string } from 'yup';

const CAMPO_OBRIGATORIO = 'Campo obrigatório';

const schemaRegisterCustomer = object({
  nome: string()
    .required(CAMPO_OBRIGATORIO)
    .min(5, 'O campo deve ter no mínimo 5 caracteres'),
  numeroDocumento: string()
    .required(CAMPO_OBRIGATORIO)
    .min(8, 'O campo deve ter no mínimo 8 caracteres'),
  cidade: string()
    .required(CAMPO_OBRIGATORIO)
    .min(3, 'O campo deve ter no mínimo 3 caracteres'),
  bairro: string()
    .required(CAMPO_OBRIGATORIO)
    .min(3, 'O campo deve ter no mínimo 3 caracteres'),
  numero: string()
    .required(CAMPO_OBRIGATORIO)
    .min(3, 'O campo deve ter no mínimo 1 número'),
  logradouro: string()
    .required(CAMPO_OBRIGATORIO)
    .min(3, 'O campo deve ter no mínimo 3 caracteres')
});

export default schemaRegisterCustomer;
