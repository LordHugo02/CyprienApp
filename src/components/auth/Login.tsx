import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
        <div className="w-full h-full flex flex-col justify-around items-center relative z-20">
            <form className="nm-flat-white-sm rounded-lg p-8 flex flex-col items-stretch gap-5 group/form">
                <h1 className="text-center font-title text-4xl">Connexion</h1>
                <div className="">
                    <label className="" htmlFor="email">
                        Email
                    </label>
                    <input required className="px-4 py-2 nm-inset-white appearance-none border rounded w-full" id="email" type="text" placeholder="Email"/>
                </div>
                <div className="">
                    <label className="" htmlFor="password">
                        Mot de passe
                    </label>
                    <input required className="px-4 py-2 nm-inset-white appearance-none border rounded w-full" id="password" type="password" placeholder="******************"/>
                </div>
                <Link className="nm-flat-slate-200-sm text-black group-valid/form:nm-flat-blue-base-sm group-valid/form:text-white transition-all duration-500 text-center px-4 py-2 rounded" type="button" to="/gestion">
                Connexion
                </Link>
                <p className="text-sm">Pas encore inscrit ? <Link to="/auth/register" className="text-orange font-bold">Créer un compte</Link></p>
            </form>
        </div>
  );
};

export default Login;
