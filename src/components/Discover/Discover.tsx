import { useState } from 'react'

function Discover() {
  const [showModal, setShowModal] = useState(false)

  const shortPreview = `Pars à l'aventure avec Biome, un alien intrépide venu de l'espace ! Pour atteindre la Terre, il devra relever des défis de programmation et surmonter des épreuves intergalactiques. À toi de l’aider à réussir !`

  const fullText = `
    Pars à l'aventure avec Biome, un alien intrépide venu des confins de l’espace. 
    Son objectif : atteindre la Terre en résolvant des énigmes de programmation !
    
    À chaque étape de son voyage, Biome fait face à des défis logiques, des obstacles imprévus et des mystères cosmiques. 
    Mais il n’est pas seul : grâce à toi, il peut avancer !

    En surmontant chaque épreuve, Biome se rapproche de son but. 
    Débloque des niveaux, développe tes compétences en codage, et découvre un univers fascinant.

    Prêt à embarquer ? Aide Biome à rentrer chez lui et deviens un véritable explorateur du code !
  `.trim()

  return (
    <>
<div className="bg-gradient-to-b to-black shadow-white/40 text-white p-6 px-2 rounded-2xl shadow-lg flex flex-col items-center gap-4 text-center">
  <span className="text-4xl">👾</span>
  <h1 className="text-2xl font-bold">Découvrir</h1>
  <h2 className="text-md font-medium">L'univers <br/> de Biome !</h2>
  
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
            <h2 className="text-3xl font-bold mb-6 text-center">👾 L'univers de Biome</h2>
            <div className="text-base leading-relaxed space-y-5 whitespace-pre-line">
              {fullText}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Discover
