import RecipesGrid from "./components/RecipesGrid/RecipesGrid";

export default function Home() {
  return (
    <main className="container pt-8 prose">
      <h1 className="text-4xl">
        Recepten van Shento Hendriks en Marieke Venderbosch
      </h1>
      <p className="">
        Op deze website worden er allemaal recepten geplaatst van Shento.
      </p>
      <RecipesGrid />
    </main>
  );
}
