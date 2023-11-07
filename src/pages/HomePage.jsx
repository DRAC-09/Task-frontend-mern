// import { useState } from "react";

function HomePage() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      {/* <button onClick={openModal} className="p-2 bg-blue-500 text-white">
        Abrir ventana modal
      </button>
      <div className="min-h-screen flex items-center justify-center">
        {isModalOpen && (
          <div
            onClick={closeModal} // Cierra la modal al hacer clic en el contenedor principal
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="bg-white p-4 rounded-lg">
              <p>Contenido de la ventana modal</p>
              <button
                onClick={closeModal}
                className="mt-2 p-2 bg-blue-500 text-white"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div> */}
      <ul className="sm:flex">
        <li className="hidden sm:block">Elemento 1</li>
        <li className="hidden sm:block">Elemento 2</li>
        <li className="hidden sm:block">Elemento 3</li>
        <li className="hidden sm:block">Elemento 4</li>
        <li className="block">Elemento Visible en Dispositivos Pequeños</li>
      </ul>
    </div>
  );
}

export default HomePage;
