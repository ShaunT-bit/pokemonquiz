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
  },
  {
    id: 7,
    question: "What motivates you most?",
    answers: [
      { text: "Helping others achieve their dreams", traits: ["supportive", "caring"] },
      { text: "Becoming the best version of myself", traits: ["ambitious", "determined"] },
      { text: "Having fun and enjoying life", traits: ["playful", "carefree"] },
      { text: "Learning and understanding the world", traits: ["curious", "intellectual"] }
    ]
  },
  {
    id: 8,
    question: "How do you prefer to communicate?",
    answers: [
      { text: "Through actions rather than words", traits: ["practical", "quiet"] },
      { text: "With humor and jokes", traits: ["funny", "entertaining"] },
      { text: "Directly and honestly", traits: ["straightforward", "honest"] },
      { text: "With empathy and understanding", traits: ["compassionate", "emotional"] }
    ]
  },
  {
    id: 9,
    question: "What's your approach to conflict?",
    answers: [
      { text: "Try to avoid it at all costs", traits: ["peaceful", "cautious"] },
      { text: "Stand up for what's right", traits: ["principled", "brave"] },
      { text: "Find a compromise that works for everyone", traits: ["diplomatic", "fair"] },
      { text: "Use wit and charm to defuse tension", traits: ["charismatic", "clever"] }
    ]
  },
  {
    id: 10,
    question: "What kind of leader are you?",
    answers: [
      { text: "Lead by example and inspire others", traits: ["inspiring", "noble"] },
      { text: "Take charge and make tough decisions", traits: ["decisive", "strong"] },
      { text: "Support the team from behind the scenes", traits: ["supportive", "humble"] },
      { text: "I prefer to follow rather than lead", traits: ["cooperative", "easygoing"] }
    ]
  },
  {
    id: 11,
    question: "What's your learning style?",
    answers: [
      { text: "Learn by doing and experimenting", traits: ["hands-on", "adventurous"] },
      { text: "Study thoroughly before taking action", traits: ["methodical", "careful"] },
      { text: "Learn from others' experiences", traits: ["observant", "wise"] },
      { text: "Follow my instincts and intuition", traits: ["intuitive", "spontaneous"] }
    ]
  },
  {
    id: 12,
    question: "How do you handle stress?",
    answers: [
      { text: "Take a break and recharge alone", traits: ["introverted", "self-reliant"] },
      { text: "Talk it out with friends or family", traits: ["social", "open"] },
      { text: "Channel it into physical activity", traits: ["active", "energetic"] },
      { text: "Stay calm and focus on solutions", traits: ["composed", "rational"] }
    ]
  },
  {
    id: 13,
    question: "What's your relationship with rules?",
    answers: [
      { text: "Rules exist for good reasons and should be followed", traits: ["disciplined", "respectful"] },
      { text: "Rules are guidelines, but flexibility is important", traits: ["adaptable", "pragmatic"] },
      { text: "I make my own rules based on what feels right", traits: ["independent", "rebellious"] },
      { text: "Rules are meant to be broken sometimes", traits: ["mischievous", "free-spirited"] }
    ]
  },
  {
    id: 14,
    question: "What's your ideal vacation?",
    answers: [
      { text: "Exploring ancient ruins and historical sites", traits: ["curious", "thoughtful"] },
      { text: "Relaxing on a tropical beach", traits: ["peaceful", "calm"] },
      { text: "Extreme sports and adrenaline activities", traits: ["thrilling", "bold"] },
      { text: "Visiting bustling cities and meeting new people", traits: ["social", "urban"] }
    ]
  },
  {
    id: 15,
    question: "How do you make decisions?",
    answers: [
      { text: "Carefully weigh all pros and cons", traits: ["analytical", "cautious"] },
      { text: "Go with my gut feeling", traits: ["instinctive", "confident"] },
      { text: "Ask for advice from people I trust", traits: ["collaborative", "trusting"] },
      { text: "Consider how it affects everyone involved", traits: ["considerate", "empathetic"] }
    ]
  },
  {
    id: 16,
    question: "What's your relationship with change?",
    answers: [
      { text: "I embrace change and see it as an opportunity", traits: ["adaptable", "optimistic"] },
      { text: "I'm cautious about change but can adapt when needed", traits: ["careful", "realistic"] },
      { text: "I prefer stability and predictability", traits: ["consistent", "reliable"] },
      { text: "I actively seek out new experiences and changes", traits: ["adventurous", "dynamic"] }
    ]
  },
  {
    id: 17,
    question: "What's your energy level like?",
    answers: [
      { text: "I'm always ready for action and rarely tired", traits: ["energetic", "vibrant"] },
      { text: "I have bursts of energy followed by quiet periods", traits: ["cyclical", "balanced"] },
      { text: "I prefer a steady, moderate pace", traits: ["consistent", "measured"] },
      { text: "I'm more of a night owl with late-night energy", traits: ["nocturnal", "mysterious"] }
    ]
  },
  {
    id: 18,
    question: "How do you show affection?",
    answers: [
      { text: "Through physical gestures like hugs", traits: ["affectionate", "warm"] },
      { text: "By doing helpful things for others", traits: ["service-oriented", "practical"] },
      { text: "With words of encouragement and praise", traits: ["supportive", "verbal"] },
      { text: "By sharing experiences and making memories", traits: ["experiential", "bonding"] }
    ]
  },
  {
    id: 19,
    question: "What's your approach to competition?",
    answers: [
      { text: "I love to win and give it my all", traits: ["competitive", "determined"] },
      { text: "I enjoy the challenge but winning isn't everything", traits: ["sporting", "balanced"] },
      { text: "I prefer collaboration over competition", traits: ["cooperative", "team-oriented"] },
      { text: "Competition makes me nervous, I avoid it", traits: ["non-competitive", "gentle"] }
    ]
  },
  {
    id: 20,
    question: "What legacy do you want to leave?",
    answers: [
      { text: "To be remembered as someone who helped others", traits: ["altruistic", "caring"] },
      { text: "To have achieved great things and broken barriers", traits: ["ambitious", "pioneering"] },
      { text: "To have brought joy and laughter to people's lives", traits: ["joyful", "entertaining"] },
      { text: "To have lived authentically and stayed true to myself", traits: ["authentic", "genuine"] }
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
  },
  {
    id: 6,
    name: "Charizard",
    type: "Fire/Flying",
    funFact: "Charizard's fire burns hotter when it has experienced harsh battles, and it never turns its back on a weaker foe!",
    traits: ["competitive", "determined", "noble", "fierce"]
  },
  {
    id: 9,
    name: "Blastoise",
    type: "Water",
    funFact: "Blastoise can accurately fire water cannons from its shell with enough force to punch through thick steel!",
    traits: ["strong", "reliable", "defensive", "methodical"]
  },
  {
    id: 16,
    name: "Pidgey",
    type: "Normal/Flying",
    funFact: "Pidgey has an excellent sense of direction and can return home from anywhere, no matter how far!",
    traits: ["free-spirited", "observant", "humble", "natural"]
  },
  {
    id: 35,
    name: "Clefairy",
    type: "Fairy",
    funFact: "Clefairy is said to live on the moon and dances under the full moon with other Clefairy!",
    traits: ["mystical", "playful", "magical", "joyful"]
  },
  {
    id: 68,
    name: "Machamp",
    type: "Fighting",
    funFact: "Machamp can deliver 1,000 punches per second and its four arms never tire from throwing punches!",
    traits: ["strong", "determined", "disciplined", "powerful"]
  },
  {
    id: 94,
    name: "Gengar",
    type: "Ghost/Poison",
    funFact: "Gengar hides in shadows and drops room temperature by 10 degrees, enjoying playing pranks on people!",
    traits: ["mischievous", "mysterious", "playful", "nocturnal"]
  },
  {
    id: 12,
    name: "Butterfree",
    type: "Bug/Flying",
    funFact: "Butterfree can locate delicious honey from flowers over 6 miles away and loves to collect nectar!",
    traits: ["gentle", "free-spirited", "natural", "curious"]
  },
  {
    id: 65,
    name: "Alakazam",
    type: "Psychic",
    funFact: "Alakazam's brain never stops growing and it remembers everything that ever happened in its life!",
    traits: ["intellectual", "wise", "analytical", "focused"]
  },
  {
    id: 80,
    name: "Slowbro",
    type: "Water/Psychic",
    funFact: "Slowbro becomes inspired when Shellder bites its tail, but if Shellder lets go, it forgets everything!",
    traits: ["easygoing", "peaceful", "thoughtful", "patient"]
  },
  {
    id: 56,
    name: "Mankey",
    type: "Fighting",
    funFact: "Mankey lives in treetops and gets angry at the slightest provocation, but calms down when no one is around!",
    traits: ["energetic", "emotional", "spontaneous", "honest"]
  },
  {
    id: 58,
    name: "Growlithe",
    type: "Fire",
    funFact: "Growlithe is incredibly loyal and will fearlessly defend its trainer even against stronger opponents!",
    traits: ["loyal", "brave", "friendly", "protective"]
  },
  {
    id: 102,
    name: "Exeggcute",
    type: "Grass/Psychic",
    funFact: "Exeggcute consists of six eggs that communicate telepathically and are drawn to each other if separated!",
    traits: ["cooperative", "mysterious", "bonding", "team-oriented"]
  },
  {
    id: 84,
    name: "Doduo",
    type: "Normal/Flying",
    funFact: "Doduo's two heads take turns sleeping and never think the same thoughts at the same time!",
    traits: ["energetic", "alert", "balanced", "active"]
  },
  {
    id: 90,
    name: "Shellder",
    type: "Water",
    funFact: "Shellder's shell is harder than diamond and it shoots out its tongue to catch prey at lightning speed!",
    traits: ["defensive", "quick", "cautious", "practical"]
  },
  {
    id: 114,
    name: "Tangela",
    type: "Grass",
    funFact: "Tangela's entire body is covered in blue vines that never stop growing and regenerate quickly if cut!",
    traits: ["mysterious", "resilient", "natural", "reclusive"]
  },
  {
    id: 129,
    name: "Magikarp",
    type: "Water",
    funFact: "Magikarp can survive in almost any body of water and live for many years, even in polluted water!",
    traits: ["resilient", "optimistic", "humble", "determined"]
  },
  {
    id: 37,
    name: "Vulpix",
    type: "Fire",
    funFact: "Vulpix has six beautiful tails that become more beautiful as it grows, and each tail contains hot fire!",
    traits: ["elegant", "playful", "warm", "charming"]
  },
  {
    id: 61,
    name: "Poliwhirl",
    type: "Water",
    funFact: "Poliwhirl's spiral pattern hypnotizes enemies, and it's more comfortable in water than on land!",
    traits: ["fluid", "hypnotic", "adaptable", "graceful"]
  },
  {
    id: 92,
    name: "Gastly",
    type: "Ghost/Poison",
    funFact: "Gastly can slip through any obstacle and will envelop opponents to put them to sleep!",
    traits: ["mysterious", "ethereal", "sneaky", "nocturnal"]
  },
  {
    id: 79,
    name: "Slowpoke",
    type: "Water/Psychic",
    funFact: "Slowpoke is incredibly slow to react and often forgets what it was doing, but it's surprisingly wise!",
    traits: ["peaceful", "patient", "easygoing", "thoughtful"]
  },
  {
    id: 77,
    name: "Ponyta",
    type: "Fire",
    funFact: "Ponyta's mane blazes more brightly when it's excited, and its hooves are harder than diamonds!",
    traits: ["graceful", "spirited", "elegant", "free-spirited"]
  },
  {
    id: 106,
    name: "Hitmonlee",
    type: "Fighting",
    funFact: "Hitmonlee can stretch its legs like springs and deliver devastating kicks from any angle!",
    traits: ["disciplined", "athletic", "focused", "determined"]
  },
  {
    id: 107,
    name: "Hitmonchan",
    type: "Fighting",
    funFact: "Hitmonchan punches so fast that its fists become invisible, and it never gives up in battle!",
    traits: ["persistent", "competitive", "strong", "never-give-up"]
  },
  {
    id: 83,
    name: "Farfetch'd",
    type: "Normal/Flying",
    funFact: "Farfetch'd always carries a leek stalk and becomes very upset if someone takes it away!",
    traits: ["quirky", "independent", "resourceful", "unique"]
  },
  {
    id: 124,
    name: "Jynx",
    type: "Ice/Psychic",
    funFact: "Jynx communicates through dance-like movements and can cause people to dance uncontrollably!",
    traits: ["expressive", "rhythmic", "charismatic", "artistic"]
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