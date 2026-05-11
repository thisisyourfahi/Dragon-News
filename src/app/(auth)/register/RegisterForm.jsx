'use client'
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async (data) => {
        const {email, name, photo, password} = data;

         const {data: res, error} = await authClient.signUp.email({
            email: email,
            name: name,
            password: password,
            photo: photo,
         })

        if (error) {
            alert("Signup Error:", error.message)
        }
        if (res) {
            alert('Signup Successfull!')
            redirect('/login');
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset rounded-box w-xs p-4">
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" {...register('name', {required: 'Name is required.'})}/>
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}

                <label className="label">Photo URL</label>
                <input type="text" className="input" placeholder="Photo URL" {...register('photo')}/>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" {...register('email', {required: 'Email is required.'})}/>
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" {...register('password', {required: 'Password is required', minLength: {
                    value: 4,
                    message: 'Password length has to be atleast 4'
                }})} />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

                <button className="btn btn-neutral btn-outline mt-4">Register</button>
            </fieldset>
        </form>
    );
};

export default RegisterForm;