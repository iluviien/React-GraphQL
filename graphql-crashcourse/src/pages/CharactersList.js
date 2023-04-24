import React from "react";

import "./CharactersList.css";
import { useCharacters } from "../hooks/useCharacters";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <div>spinner</div>;
  if (error) return <div>Something went wrong!</div>;

  return (
    <div className="CharactersList">
      {data.characters.results.map(character => {
        return (
          <div>
            <img src={character.image} alt="character images" />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
