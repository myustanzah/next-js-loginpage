import { useForm } from 'react-hook-form'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import logo from '../resource/logo.png'
import { useRouter } from 'next/router'
import axios from 'axios'
import swal from "sweetalert"

export default function Login() {
  const router = useRouter()
  const { register, handleSubmit } = useForm()

  function onSubmit(data) {
    axios({
      url: 'https://dangerlist.herokuapp.com/login',
      method: 'POST',
      data: data
    })
      .then(({ data }) => {
        if (data.token) {
          window.localStorage.setItem('token', data.token)
          router.push('/views/dashboard')
        }
      }).catch((err) => {
        swal("Incorrect!", "Somethink wrong, please try again", "error", {
          button: "OK!"
        });
      })
  }

  function stepToRegister(event) {
    event.preventDefault()
    router.push("/views/register")
  }

  function stepToHome(event) {
    event.preventDefault()
    router.push("/views/login")
  }
  return (
    <div className={styles.login1}>
      <div className={styles.login}>
        <div className={styles.img}>
          <Image src={logo} />
        </div>
        <div className={styles.form}>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" name="email" {...register("email")} required />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" name="password" {...register("password")} required />
            </div>
            <button type="submit" className="btn btn-dark">Login</button>
          </form>
          <div>
            <p>Dont have account ? <a href="#" onClick={stepToRegister}>Register</a> Here</p>
          </div>
        </div>
      </div>
    </div >
  )

}
