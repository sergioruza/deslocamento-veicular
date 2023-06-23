import { object, string } from 'yup';

const CAMPO_OBRIGATORIO = 'Campo obrigatório';

const schemaStartRide = object({
  kmInicial: string()
    .required(CAMPO_OBRIGATORIO)
    .min(1, 'O campo deve ter no mínimo 1 caracter'),
  checkList: string().required(CAMPO_OBRIGATORIO),
  motivo: string().required(CAMPO_OBRIGATORIO),
  observacao: string()
});

export default schemaStartRide;
