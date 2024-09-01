import { getFriendlyUrl } from "@/app/utils/utils";
import Link from "next/link";
import Image from "next/image";

export default async function RecipesGrid() {
  let data = await fetch(
    "https://recepten-backend.shentostaging.nl/items/recepten?sort=date_created",
    { cache: "no-store" }
  );
  let recepten = await data.json();

  return (
    <>
      <h2 className="text-2xl mt-8 mb-4">Nieuwste Recepten</h2>
      <section className="grid grid-cols-3 gap-4">
        {recepten.data.map((recept) => {
          return (
            <Link
              href={`/recipes/${getFriendlyUrl(recept.name)}`}
              className="aspect-square bg-gray-500 text-white p-8 relative"
              key={recept.id}
            >
              <h3 className="text-2xl font-bold z-10 absolute left-5 bottom-5">
                {recept.name}
              </h3>
              {recept.featuredImage ? (
                <img
                  src={`https://recepten-backend.shentostaging.nl/assets/${recept.featuredImage}`}
                  alt=""
                  className="w-full h-full absolute top-0 left-0"
                />
              ) : (
                <Image
                  className="w-full h-full absolute top-0 left-0 object-cover brightness-50"
                  src={"/placeholder.webp"}
                  width={500}
                  height={500}
                />
              )}
            </Link>
          );
        })}
      </section>
    </>
  );
}
