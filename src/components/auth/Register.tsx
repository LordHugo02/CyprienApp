import React from 'react';
import { Link } from 'react-router-dom';

const Register   = () => {
  return (
    <div className="w-full h-full flex flex-col justify-around items-center relative z-20">
      <form className="nm-flat-white-sm rounded-lg p-8 flex flex-col items-stretch gap-5 group/form">
        <h1 className="text-center font-title text-4xl">Inscription</h1>
        <div className="flex flex-row gap-5">
          <div className="flex flex-col">
            <label className="" htmlFor="firstName">
                    Prénom
            </label>
            <input required className="px-4 py-2 nm-inset-white appearance-none border rounded" id="firstname" type="text" placeholder="Prénom"/>
          </div>
          <div className="flex flex-col">
            <label className="" htmlFor="lastName">
                    Nom
            </label>
            <input required className="px-4 py-2 nm-inset-white appearance-none border rounded" id="lastName" type="text" placeholder="Nom"/>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="" htmlFor="email">
                    Email
          </label>
          <input required className="px-4 py-2 nm-inset-white appearance-none border rounded" id="email" type="text" placeholder="Email"/>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="" htmlFor="password">
                    Mot de passe
            </label>
            <input required className="px-4 py-2 nm-inset-white appearance-none border rounded" id="password" type="password" placeholder="******************"/>
          </div>
          <div className="flex flex-col">
            <label className="" htmlFor="passwordConfirmation">
                    Confirmation mot de passe
            </label>
            <input required className="px-4 py-2 nm-inset-white appearance-none border rounded" id="passwordConfirmation" type="password" placeholder="******************"/>
          </div>
        </div>
        <Link className="text-center px-4 py-2 rounded nm-flat-slate-200-sm text-black group-valid/form:nm-flat-blue-base-sm group-valid/form:text-white transition-all duration-500" to="/gestion/stock">
                Inscription
        </Link>
        <p className="text-sm">Déjà inscrit ? <Link to="/auth" className="text-orange font-bold">Se connecter</Link></p>
      </form>
    </div>
  );
};

export default Register ;
