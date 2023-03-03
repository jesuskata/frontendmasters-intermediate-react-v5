// Components
import { Pet } from './Pet';

export const Results = ({ pets }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {!pets.length ? (
      <h1>No pets found...</h1>
    ) : (
      pets.map((pet) => (
        <Pet
          id={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          location={`${pet.city}, ${pet.name}`}
          images={pet.images}
          key={pet.id}
        />
      ))
    )}
  </div>
);
