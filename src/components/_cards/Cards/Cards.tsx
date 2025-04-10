import CardItem from "../CardItem";
import "./Cards.css";

// Group 1
const cards_group1 = [
  {
    src: "images/starship-ruins.jpg",
    text: "Decode alien glyphs inside the wreckage of an ancient starship.",
    label: "XenoTech",
    path: "/missions",
  },
  {
    src: "images/nebula-cruise.jpg",
    text: "Navigate through unstable wormholes beyond the Crimson Nebula.",
    label: "VoidNav",
    path: "/missions",
  },
];

// Group 2
const cards_group2 = [
  {
    src: "images/cyber-lab.jpg",
    text: "Infiltrate a black-site AI research facility lost in time.",
    label: "CyberOps",
    path: "/missions",
  },
  {
    src: "images/frozen-moon.jpg",
    text: "Survive the frost-bitten ruins of Titan’s failed colony.",
    label: "Survival",
    path: "/missions",
  },
  {
    src: "images/quantum-vault.jpg",
    text: "Access the Quantum Vault sealed by interdimensional protectors.",
    label: "ChronoHack",
    path: "/missions",
  },
];

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Technologies</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cards_group1.map((card, index) => (
              <CardItem
                key={index}
                src={card.src}
                text={card.text}
                label={card.label}
                path={card.path}
              />
            ))}
          </ul>

          <ul className="cards__items">
            {cards_group2.map((card, index) => (
              <CardItem
                key={index}
                src={card.src}
                text={card.text}
                label={card.label}
                path={card.path}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
