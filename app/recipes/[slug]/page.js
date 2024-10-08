import IngredientCalculator from "@/app/components/IngredientCalculator";
import { getFriendlyUrl } from "@/app/utils/utils";

export default async function Recipe({ params }) {
  let res = await fetch(
    "https://recepten-backend.shentostaging.nl/items/recepten",
    { cache: "no-store" }
  );
  let data = await res.json();
  let matchingRecipe = await data.data.find(
    (matchingRecipe) => getFriendlyUrl(matchingRecipe.name) === params.slug
  );
  return (
    <article>
      <section className="grid md:grid-cols-2 items-center justify-center w-full h-[100vh]">
        <div>
          <div className="flex flex-col items-center">
            <p className="uppercase text-center bg-black text-white px-2 py-1 text-sm mb-4">
              recipe
            </p>
            <h1 className="text-5xl font-bold text-center">
              {matchingRecipe.name}
            </h1>
          </div>
        </div>
        <div className="relative w-screen h-full">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={`https://recepten-backend.shentostaging.nl/assets/${matchingRecipe.featuredImage}`}
            alt=""
          />
        </div>
      </section>
      <section className="container mt-32 max-w-[800px] relative md:left-[-200px]">
        {" "}
        <IngredientCalculator query={matchingRecipe} />
        <h2 className="mt-16 mb-4 text-3xl font-bold tracking-tight">Instructies</h2>
        <hr className="mb-4" />{" "}
        <div dangerouslySetInnerHTML={{ __html: matchingRecipe.instructies }} />{" "}
      </section>
    </article>
  );
}
