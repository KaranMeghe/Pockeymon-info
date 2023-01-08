import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";

const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
            PokeDex |{" "}
            <a href="https://www.pokemon.com/us" className="has-text-info">
              pokemon.com
            </a>
          </p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns is-flex-wrap-wrap">
            <div className="column is-4">
              <ProfileCard
                number="#001"
                name="Bulbasaur"
                description="There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger."
                image="https://archives.bulbagarden.net/media/upload/2/21/001Bulbasaur.png"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                number="#002"
                name="Ivasaur"
                description="When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs and become more aggressive"
                image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                number="#003"
                name="Venusaur"
                description="Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight. sunbath is favorite"
                image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                number="#005"
                name="Charmander"
                description="It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail. loves to play"
                image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                number="#005"
                name="Charmeleon "
                description="It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws."
                image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                number="#006"
                name="Charizard"
                description="It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames. lazy but agrresive."
                image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                number="#007"
                name="Squirtle"
                description="When it retracts its long neck into its shell, it squirts out water with vigorous force."
                image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                number="#008"
                name="Wartortle"
                description="It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old."
                image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                number="#009"
                name="Blastoise"
                description="It crushes its foe under its heavy body to cause fainting. it will withdraw inside its shell."
                image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default App;
