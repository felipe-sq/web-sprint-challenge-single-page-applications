import * as yup from 'yup'

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Order name is required')
    .min(2, 'Order name must be at least 2 characters'),
})
