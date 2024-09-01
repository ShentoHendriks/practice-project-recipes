export default async function RecipesGrid() {
  let data = await fetch(
    "https://recepten-backend.shentostaging.nl/items/recepten",
    { cache: "no-store" }
  );
  let recepten = await data.json();

  return (
    <>
      <h2 className="text-2xl mt-8 mb-4">Nieuwste Recepten</h2>
      <section className="grid grid-cols-3 gap-4">
        {recepten.data.map((recept) => {
          return (
            <div
              className="aspect-square bg-gray-500 text-white p-8"
              key={recept.id}
            >
              <h3 className="text-2xl font-bold">{recept.name}</h3>
            </div>
          );
        })}
      </section>
    </>
  );
}
