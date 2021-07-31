import { useForm } from 'react-hook-form'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import logo from '../resource/logo.png'
import { useRouter } from 'next/router'
import swal from "sweetalert"
import axios from "axios"

export default function Login() {
    const router = useRouter()
    const { register, handleSubmit } = useForm()

    function onSubmit(data) {
        axios({
            url: 'https://dangerlist.herokuapp.com/register',
            method: 'POST',
            data: data
        })
            .then(({ data }) => {
                swal("Good job!", "Register success", "success", {
                    button: "OK!"
                });
                router.push('/views/login')
            }).catch((err) => {
                swal("Incorrect!", "Somethink wrong, please try again", "error", {
                    button: "OK!"
                });
            })
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
                    <a href="#" onClick={stepToHome}>Back to Home</a>
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
                        <button type="submit" className="btn btn-dark">Register</button>
                    </form>
                </div>
            </div>
        </div >
    )

}
