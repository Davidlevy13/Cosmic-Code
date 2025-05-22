import { useState } from 'react'

function Progress() {
  const [showModal, setShowModal] = useState(false)

  const fullText = `
Maintenant que tu as exploré l’univers et appris les bases, il est temps d'aller plus loin.

Avec Biome, tu vas affiner tes compétences, relever des défis plus complexes et débloquer de nouveaux secrets du codage.

🔁 Un voyage vers l’expertise  
Avec Biome, prépare-toi à explorer des planètes uniques, chacune dédiée à une technologie du web et à un thème bien à elle. À chaque escale, de nouvelles mécaniques, de nouveaux défis… et de grandes découvertes !

Biome compte sur toi pour résoudre des énigmes toujours plus corsées et repousser les limites de tes capacités.

🚀 Es-tu prêt à franchir un cap ?  
Grâce à ton aide, Biome progresse à toute vitesse vers son objectif ultime. Et toi, tu développes ta logique, ta rigueur et ta créativité comme un(e) vrai(e) développeur(se) !

Le cosmos n’attend que toi ! ✨
`.trim()

  return (
    <>
      {/* Encart Progresser */}
      <div className="bg-gradient-to-b to-black shadow-white/50 text-white p-6 px-2 rounded-2xl shadow-lg flex flex-col items-center gap-4 text-center">
        <span className="text-4xl">🚀</span>
        <h1 className="text-2xl font-bold">Progresser</h1>
        <h2 className="text-lg font-medium">Maîtrise le code avec Biome !</h2>
        
        <button
          className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition"
          onClick={() => setShowModal(true)}
        >
          En savoir plus
        </button>
      </div>

      {/* Pop-up */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 md:px-8">
          <div className="bg-white text-black w-full max-w-4xl md:max-w-4xl  h-[90vh] overflow-y-auto p-8 md:p-12 rounded-xl md:rounded-3xl relative shadow-2xl md:border md:border-gray-300">
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-red-600"
              onClick={() => setShowModal(false)}
              aria-label="Fermer la fenêtre"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-6 text-center">🚀 Progresser avec Biome</h2>
            <div className="text-base leading-relaxed space-y-5 whitespace-pre-line">
              {fullText}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Progress