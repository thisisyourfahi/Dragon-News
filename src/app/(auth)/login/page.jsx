import Link from "next/link";
import LoginForm from "./LoginForm";

export const metadata = {
    title: "Login | Dragon News",
    description: "Best Online news portal in Bangladesh",
};

const LoginPage = () => {
    return (
        <div className='container mx-auto mt-10 flex items-center justify-center'>
            <div className="bg-base-300 p-4 rounded-md">
                <h2 className="text-2xl font-bold">Login to Dragon News</h2>
                <LoginForm />
                <p>Don&apos;t have an account? <Link className="text-blue-400" href={'/register'}>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;