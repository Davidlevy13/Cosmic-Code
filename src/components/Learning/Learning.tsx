import { useState } from 'react'

function Learning() {
  const [showModal, setShowModal] = useState(false)

  const fullText = `
Dans son voyage à travers l’espace, Biome a besoin de ton aide pour résoudre des énigmes de programmation.

🪐 À chaque planète visitée, une nouvelle série de question apparaît. Tu dois choisir la bonne réponse parmi plusieurs propositions.

💡 Les défis couvrent aussi bien les fondamentaux du code que des concepts un peu plus avancés. Pas besoin d’être un expert : chaque bonne réponse te fait progresser.

Plus tu aides Biome, plus tu progresses toi aussi dans l’univers du code !

Prêt à relever le défi ?
  `.trim()

  return (
    <>
      
      <div className="bg-gradient-to-b to-black shadow-white/40 text-white p-6 px-2 rounded-2xl shadow-lg flex flex-col items-center gap-4 text-center">
        <span className="text-4xl">🧠</span>
        <h1 className="text-2xl font-bold">Apprendre</h1>
        <h2 className="text-md font-medium">Apprends <br/> avec Biome !</h2>
        
        <button
          className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-2 py-2 rounded-lg transition"
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
            <h2 className="text-3xl font-bold mb-6 text-center">🧠 Apprendre avec Biome</h2>
            <div className="text-base leading-relaxed space-y-5 whitespace-pre-line">
              {fullText}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Learning
