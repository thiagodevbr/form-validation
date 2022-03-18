import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from "../styles/Home.module.css";

const schema = yup.object().shape({
  name: yup.string().required('Nome necessário'),
  email: yup.string().required('E-mail necessário'),
  password: yup.string().min(8, 'Mínimo de 8 caracteres'),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSendForm = data => {
    console.log(data)
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(handleSendForm)}>
        <input placeholder="Nome" className={styles.input} type="text" name="name" {...register('name')} /> 
        <span className={styles.error}>{errors.name?.message}</span>  

        <input placeholder="E-mail" className={styles.input} type="email" name="email" {...register('email')} />   
        <span className={styles.error}>{errors.email?.message}</span>       

        <input placeholder="Senha" className={styles.input} type="password" name="password" {...register('password')} />
        <span className={styles.error}>{errors.password?.message}</span>  

        <button className={styles.button} type="submit">Enviar</button>        
      </form>
    </div>
  )
}
