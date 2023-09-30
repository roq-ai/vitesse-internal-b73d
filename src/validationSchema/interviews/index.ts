import * as yup from 'yup';

export const interviewValidationSchema = yup.object().shape({
  date: yup.date().required(),
  location: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  candidate_id: yup.string().nullable().required(),
});
