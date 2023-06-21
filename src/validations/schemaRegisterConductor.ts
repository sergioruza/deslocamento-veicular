import { object, string } from 'yup';

const CAMPO_OBRIGATORIO = 'Campo obrigatório';

const schemaRegisterConductor = object({
  nome: string()
    .required(CAMPO_OBRIGATORIO)
    .min(5, 'O campo deve ter no mínimo 5 caracteres'),
  numeroHabilitacao: string()
    .required(CAMPO_OBRIGATORIO)
    .min(8, 'O campo deve ter 8 caracteres'),
  categoriaHabilitacao: string().required(CAMPO_OBRIGATORIO),
  vencimentoHabilitacao: string().required(CAMPO_OBRIGATORIO)
});

export default schemaRegisterConductor;
