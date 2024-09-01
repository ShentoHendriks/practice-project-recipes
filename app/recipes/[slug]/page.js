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
    <article className="container pt-8">
      {matchingRecipe.featuredImage ? (
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={`https://recepten-backend.shentostaging.nl/assets/${matchingRecipe.featuredImage}`}
            alt=""
          />
        </div>
      ) : null}
      <section className="prose container mt-8">
        <h1>{matchingRecipe.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: matchingRecipe.instructies }} />
      </section>
    </article>
  );
}

<style></style>;
