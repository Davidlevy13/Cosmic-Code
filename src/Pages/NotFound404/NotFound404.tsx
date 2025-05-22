import React from 'react';
import { Link } from 'react-router-dom';

const NotFound404 = () => {
  return (
    <div className="text-white p-15 px-2  flex flex-col items-center gap-4 text-center">
      <h1 className="text-3xl font-bold">Erreur 404</h1>
      <img src="/public/reponse-fausse.png" alt="logo-triste"  className="w-40 flex item-center mt-2" />
      <p className="text-xl text-wine-900 mb-6">Oups ! Cette page n'existe pas.</p>
      <Link
        to="/"
        className="mt-2 hover:text-orange-600 text-white font-semibold px-2 py-2 rounded-lg transition"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound404;
