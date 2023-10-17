import {useState} from 'react'
import {InputProps} from './useForm.d'

const useForm = <T extends object>() => {
  const [form, setForm] = useState<T>({} as T)

  const isValidForm = () => {
    let rpta = true

    for (const item in form) {
       if (form[item as keyof InputProps].value === '') {
          setForm(prev => ({
            ...prev,
            [item]: {
              ...prev[item],
              error: `${item} is required`
            }
          }))
          rpta = false
       }
    }

    return rpta
  }

  const register = (controlName: string) => {
    const newControl = {
      id: controlName,
      name: controlName,
      value: '',
      error: '',
      onChange: (evt: React.ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({
          ...prev,
          [controlName]: {
            ...prev[controlName],
            value: evt.target.value,
            error: ''
          }
        }))
      }
    }

    if (!form[controlName]) {
      setForm({
        ...form,
        [controlName]: newControl
      })
    }

    return { ...form[controlName] }
  }

  return { register, form, isValidForm }
}

export default useForm