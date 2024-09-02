"use client";

import { useState } from "react";

export default function IngredientCalculator({ query }) {
  const [personen, personenSet] = useState(query.aantal_personen);

  function increase() {
    personenSet(personen + 1);
  }

  function decrease() {
    if (personen > 1) {
      personenSet(personen - 1);
    }
  }
  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight mt-8">Ingrediënten:</h2>
      <hr className="my-4" />
      <section className="grid grid-cols-[1fr_2fr]">
        <div>
          {query.ingredienten
            ? query.ingredienten.map((ingredient) => {
                return (
                  <div className="grid grid-cols-[.7fr_1fr] items-center">
                    <div className="text-xl">
                      {(
                        ingredient.hoeveelheid *
                        (personen / query.aantal_personen)
                      ).toFixed(
                        Number.isInteger(
                          ingredient.hoeveelheid *
                            (personen / query.aantal_personen)
                        )
                          ? 0
                          : 1
                      )}
                    </div>{" "}
                    <div>{ingredient.ingredient}</div>
                  </div>
                );
              })
            : null}
        </div>
        <div>
          <span>
            Aantal Personen <span>{personen}</span>{" "}
          </span>
          <span
            onClick={increase}
            className="text-4xl font-bold cursor-pointer"
          >
            +
          </span>
          <span
            onClick={decrease}
            className="text-4xl font-bold cursor-pointer"
          >
            -
          </span>
        </div>
      </section>
    </>
  );
}
