import CharacterData from "./CharacterData";

export default function CharacterList({ charactersData }) {
    return (
        <section className="py-5">
            <div className="row row-cols-1 row-cols-md-2 g-4">

                {charactersData?.results?.map(character => (

                    <CharacterData character={character} key={character.id}></CharacterData>
                ))}
            </div>
        </section>
    )
}