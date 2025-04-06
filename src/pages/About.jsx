export const  about = () => {
    return (
        <section className="max-w-xl mx-auto text-center p-4">
            <h2 className="text-2xl font-bold mb-2">Acerca de este proyecto</h2>
            <p className="text-gray-700">
                Este proyecto es una Pokédex construida con <strong>React</strong> y <strong>Vite</strong>, utilizando datos en tiempo real desde la <strong>PokéAPI</strong>.
                El objetivo es practicar el consumo de APIs, manejo de componentes, estados y diseño responsivo con <strong>TailwindCSS</strong>.
                Puedes buscar Pokémon, ver sus detalles y explorar sus estadísticas de una forma rápida y sencilla.
            </p>
        </section>
    );
}