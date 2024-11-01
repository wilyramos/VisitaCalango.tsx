import { useState } from 'react';

const recomendaciones = [
  { titulo: 'Tour de Aventura', descripcion: 'Explora emocionantes rutas en Calango.', imagenUrl: 'https://via.placeholder.com/500', calificacion: 4.5, categoria: 'Aventura', duracion: '3h', precio: 50 },
  { titulo: 'Experiencia Cultural', descripcion: 'Sumérgete en la historia y cultura local.', imagenUrl: 'https://via.placeholder.com/500', calificacion: 4.7, categoria: 'Cultura', duracion: '4h', precio: 30 },
  { titulo: 'Caminata en la Naturaleza', descripcion: 'Descubre los paisajes naturales de Calango.', imagenUrl: 'https://via.placeholder.com/500', calificacion: 4.8, categoria: 'Naturaleza', duracion: '2h', precio: 20 },
  { titulo: 'Tour Gastronómico', descripcion: 'Prueba los sabores únicos de la región.', imagenUrl: 'https://via.placeholder.com/500', calificacion: 4.6, categoria: 'Gastronomía', duracion: '5h', precio: 70 },
];

const categorias = ['Todas', 'Aventura', 'Cultura', 'Naturaleza', 'Gastronomía'];

export default function Recomendations() {
  const [categoria, setCategoria] = useState('Todas');
  const [precio, setPrecio] = useState(0);

  const filtradas = recomendaciones.filter(rec => 
    (categoria === 'Todas' || rec.categoria === categoria) &&
    (precio === 0 || rec.precio <= precio)
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Explora Calango</h2>
      
      <div className="flex justify-center space-x-2 mb-6">
        {categorias.map(c => (
          <button 
            key={c} 
            className={`px-3 py-1 rounded-full ${c === categoria ? 'bg-green-500 text-white' : 'bg-gray-200'}`} 
            onClick={() => setCategoria(c)}>
            {c}
          </button>
        ))}
        <input 
          type="number" 
          placeholder="Max precio" 
          className="border p-1 rounded"
          onChange={(e) => setPrecio(Number(e.target.value))} 
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtradas.map((rec, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4">
            <img className="w-full h-32 object-cover rounded" src={rec.imagenUrl} alt={rec.titulo} />
            <h3 className="mt-4 text-xl font-semibold">{rec.titulo}</h3>
            <p className="text-gray-600">{rec.descripcion}</p>
            <div className="text-sm mt-2 text-green-700">Calificación: {rec.calificacion}</div>
            <div className="text-sm text-gray-500">Duración: {rec.duracion} | Precio: ${rec.precio}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
