import * as yup from 'yup'

export const validationSchema = [
  // address validation STEP1
  yup.object({
    fullName: yup.string().required('Full name is required'),
    address1: yup.string().required('Address line 1 is required'),
    address2: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    country: yup.string().required()
  }),
  // review order STEP2(NO VALIDATION NEEDED HERE!)
  yup.object(),
  // payment method STEP3
  yup.object({
    nameOnCard: yup.string().required()
  })
]

