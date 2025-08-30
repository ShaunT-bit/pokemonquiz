export interface Pokemon {
  id: number;
  name: string;
  type: string;
  funFact: string;
  traits: string[];
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  traits: string[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What's your ideal way to spend a weekend?",
    answers: [
      { text: "Relaxing at home with a good book", traits: ["calm", "intellectual"] },
      { text: "Going on an adventure outdoors", traits: ["brave", "energetic"] },
      { text: "Hanging out with friends", traits: ["social", "friendly"] },
      { text: "Working on a creative project", traits: ["creative", "focused"] }
    ]
  },
  {
    id: 2,
    question: "How do you handle challenges?",
    answers: [
      { text: "Face them head-on with determination", traits: ["brave", "strong"] },
      { text: "Think carefully before acting", traits: ["wise", "intellectual"] },
      { text: "Ask friends for help and support", traits: ["social", "loyal"] },
      { text: "Find a creative or unexpected solution", traits: ["creative", "clever"] }
    ]
  },
  {
    id: 3,
    question: "What's your greatest strength?",
    answers: [
      { text: "My loyalty to friends and family", traits: ["loyal", "caring"] },
      { text: "My ability to stay calm under pressure", traits: ["calm", "wise"] },
      { text: "My boundless energy and enthusiasm", traits: ["energetic", "optimistic"] },
      { text: "My strategic thinking", traits: ["intelligent", "focused"] }
    ]
  },
  {
    id: 4,
    question: "What environment do you thrive in?",
    answers: [
      { text: "By the water - oceans, lakes, or rivers", traits: ["calm", "fluid"] },
      { text: "In nature - forests, mountains, or fields", traits: ["natural", "peaceful"] },
      { text: "In the city - busy, energetic places", traits: ["energetic", "social"] },
      { text: "Somewhere mysterious and magical", traits: ["mystical", "wise"] }
    ]
  },
  {
    id: 5,
    question: "How do your friends describe you?",
    answers: [
      { text: "The reliable one who's always there", traits: ["loyal", "dependable"] },
      { text: "The funny one who makes everyone laugh", traits: ["cheerful", "entertaining"] },
      { text: "The wise one who gives good advice", traits: ["wise", "intellectual"] },
      { text: "The adventurous one who's up for anything", traits: ["brave", "spontaneous"] }
    ]
  },
  {
    id: 6,
    question: "What's your biggest fear?",
    answers: [
      { text: "Being alone or abandoned", traits: ["social", "emotional"] },
      { text: "Not being strong enough to protect others", traits: ["protective", "caring"] },
      { text: "Making the wrong decision", traits: ["careful", "thoughtful"] },
      { text: "Being trapped or confined", traits: ["free-spirited", "independent"] }
    ]
  }
];

export const pokemon: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass/Poison",
    funFact: "Bulbasaur can survive for days without eating thanks to the bulb on its back, which stores energy from sunlight!",
    traits: ["calm", "loyal", "natural", "caring"]
  },
  {
    id: 4,
    name: "Charmander",
    type: "Fire",
    funFact: "The flame on Charmander's tail shows its health and emotions - it burns brighter when excited or angry!",
    traits: ["brave", "energetic", "optimistic", "passionate"]
  },
  {
    id: 7,
    name: "Squirtle",
    type: "Water",
    funFact: "Squirtle can withdraw into its shell for protection and shoot water with incredible accuracy from inside!",
    traits: ["calm", "fluid", "defensive", "adaptable"]
  },
  {
    id: 25,
    name: "Pikachu",
    type: "Electric",
    funFact: "Pikachu stores electricity in its cheek pouches and releases energy through its tail when sleeping!",
    traits: ["energetic", "social", "friendly", "loyal"]
  },
  {
    id: 39,
    name: "Jigglypuff",
    type: "Normal/Fairy",
    funFact: "Jigglypuff's song can put anyone to sleep, and it gets upset when its audience falls asleep before the song ends!",
    traits: ["entertaining", "cheerful", "social", "emotional"]
  },
  {
    id: 52,
    name: "Meowth",
    type: "Normal",
    funFact: "Meowth walks on two legs and can speak human language, though most Meowth prefer to communicate through meowing!",
    traits: ["clever", "independent", "mischievous", "adaptable"]
  },
  {
    id: 54,
    name: "Psyduck",
    type: "Water",
    funFact: "Psyduck's constant headaches trigger powerful psychic abilities, but it never remembers using them!",
    traits: ["confused", "mysterious", "powerful", "unpredictable"]
  },
  {
    id: 59,
    name: "Arcanine",
    type: "Fire",
    funFact: "Arcanine can run 6,200 miles in 24 hours and its magnificent bark is both beautiful and intimidating!",
    traits: ["loyal", "brave", "noble", "protective"]
  },
  {
    id: 63,
    name: "Abra",
    type: "Psychic",
    funFact: "Abra sleeps 18 hours a day but can sense danger even while sleeping and teleport away instantly!",
    traits: ["wise", "mystical", "intelligent", "defensive"]
  },
  {
    id: 104,
    name: "Cubone",
    type: "Ground",
    funFact: "Cubone wears its deceased mother's skull as a helmet and has never been seen without it!",
    traits: ["loyal", "emotional", "protective", "solitary"]
  },
  {
    id: 113,
    name: "Chansey",
    type: "Normal",
    funFact: "Chansey lays highly nutritious eggs every day and shares them with injured people and Pokémon!",
    traits: ["caring", "gentle", "nurturing", "healing"]
  },
  {
    id: 131,
    name: "Lapras",
    type: "Water/Ice",
    funFact: "Lapras loves to ferry people across bodies of water and can understand human speech perfectly!",
    traits: ["gentle", "intelligent", "helpful", "peaceful"]
  },
  {
    id: 133,
    name: "Eevee",
    type: "Normal",
    funFact: "Eevee has the most evolution possibilities of any Pokémon and its genetic code is irregular and unstable!",
    traits: ["adaptable", "versatile", "potential", "evolving"]
  },
  {
    id: 143,
    name: "Snorlax",
    type: "Normal",
    funFact: "Snorlax sleeps almost all day and can weigh over 1,000 pounds, but it's surprisingly gentle and kind!",
    traits: ["calm", "peaceful", "strong", "sleepy"]
  },
  {
    id: 150,
    name: "Mewtwo",
    type: "Psychic",
    funFact: "Mewtwo was created through genetic manipulation and has the most savage heart among all Pokémon!",
    traits: ["powerful", "intelligent", "independent", "complex"]
  }
];

export function calculatePokemonMatch(userTraits: string[]): Pokemon {
  const traitCounts = new Map<number, number>();
  
  pokemon.forEach(p => {
    let matches = 0;
    p.traits.forEach(trait => {
      if (userTraits.includes(trait)) {
        matches++;
      }
    });
    traitCounts.set(p.id, matches);
  });
  
  // Find Pokemon with most trait matches
  let bestMatch = pokemon[0];
  let bestScore = traitCounts.get(pokemon[0].id) || 0;
  
  traitCounts.forEach((score, pokemonId) => {
    if (score > bestScore) {
      bestScore = score;
      const match = pokemon.find(p => p.id === pokemonId);
      if (match) bestMatch = match;
    }
  });
  
  // If no clear winner, return a random popular one
  if (bestScore === 0) {
    return pokemon[Math.floor(Math.random() * Math.min(5, pokemon.length))];
  }
  
  return bestMatch;
}