import * as yup from 'yup';

export const candidateValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  position: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
