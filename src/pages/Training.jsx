const Training = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-28 px-6">
      
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-16">
          FORMACIÓN EN ACCIÓN
        </h2>

        {/* Video / Imagen */}

        <div className="w-full aspect-video bg-gray-800 mb-12 flex items-center justify-center">
          <p className="text-gray-400">
            Video de formación / clase
          </p>
        </div>

        {/* Texto */}

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
          La barbería no se aprende copiando cortes.  
          Se aprende entendiendo el sistema detrás de cada decisión.
          <br /><br />
          Cada formación está diseñada para que el alumno desarrolle criterio,
          técnica y una forma profesional de pensar el oficio.
        </p>

      </div>

    </section>
  );
};

export default Training;