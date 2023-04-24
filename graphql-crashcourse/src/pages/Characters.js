import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";

export default function Characters() {
  const { data, loading, error } = useCharacter(2);
  console.log({
    error,
    loading,
    data
  });
  if (error) return <div>something went wrong</div>;
  if (loading) return <div>Loading content...</div>;
  return (
    <div className="Character">
      <img
        src={data.character.image}
        width={750}
        height={750}
        alt="character pictures"
      />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map(episode => {
            return (
              <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
