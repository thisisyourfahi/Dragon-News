import Link from "next/link";
import RegisterForm from "./RegisterForm";

export const metadata = {
    title: "Register | Dragon News",
    description: "Best Online news portal in Bangladesh",
};

const RegisterPage = () => {
    return (
        <div className='container mx-auto mt-10 flex items-center justify-center'>
            <div className="bg-base-300 p-4 rounded-md">
                <h2 className="text-2xl font-bold">Create an account</h2>
                <RegisterForm />
                <p>Already have an account? <Link className="text-blue-400" href={'/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;