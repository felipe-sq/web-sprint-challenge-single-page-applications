import * as yup from 'yup'

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('**Order name is required**')
    .min(2, '**Order name must be at least 2 characters**'),
  size: yup
    .string()
    .oneOf(['small', 'medium', 'large'], 'Pizza size is required!'),
  pepperoni: yup.boolean(),
  mushrooms: yup.boolean(),
  olives: yup.boolean(),
  sausage: yup.boolean(),
  canadian_bacon: yup.boolean(),
  pineapple: yup.boolean(),
  instructions: yup
    .string()
    .trim(),
})
