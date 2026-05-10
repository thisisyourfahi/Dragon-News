'use client'
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log('data', data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset rounded-box w-xs p-4">
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" {...register('email', {required: "Email is required."})}/>
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" {...register('password', {required: 'Password is required.', minLength: {
                    value: 4,
                    message: "Password length has to be atleast 4"
                }})} />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                {errors.password < 4 && <span className="text-red-500 text-sm">{errors.password.message}</span>}


                <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </form>
    );
};

export default LoginForm;