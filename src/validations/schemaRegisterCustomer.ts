import { object, string } from 'yup';

const CAMPO_OBRIGATORIO = 'Campo obrigatório';

const schemaRegisterCustomer = object({
  name: string()
    .required(CAMPO_OBRIGATORIO)
    .min(5, 'O campo deve ter no mínimo 5 caracteres'),
  document: string()
    .required(CAMPO_OBRIGATORIO)
    .min(8, 'O campo deve ter no mínimo 8 caracteres'),
  city: string()
    .required(CAMPO_OBRIGATORIO)
    .min(3, 'O campo deve ter no mínimo 3 caracteres'),
  district: string()
    .required(CAMPO_OBRIGATORIO)
    .min(3, 'O campo deve ter no mínimo 3 caracteres'),
  houseNumber: string()
    .required(CAMPO_OBRIGATORIO)
    .min(3, 'O campo deve ter no mínimo 1 número'),
  publicPlace: string()
    .required(CAMPO_OBRIGATORIO)
    .min(3, 'O campo deve ter no mínimo 3 caracteres'),
  state: string().required(CAMPO_OBRIGATORIO)
});

export default schemaRegisterCustomer;
