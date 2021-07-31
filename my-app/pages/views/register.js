import { useForm } from 'react-hook-form'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import logo from '../resource/logo.png'
import { useRouter } from 'next/router'
import swal from "sweetalert"

export default function Login() {
    const router = useRouter()
    const { register, handleSubmit } = useForm()

    function onSubmit(data) {

        fetch('https://dangerlist.herokuapp.com/register', {
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                router.push('/views/login')
            })
            .catch((err) => {
                console.log(err.response);
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
