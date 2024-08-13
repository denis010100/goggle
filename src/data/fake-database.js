const searchData = [
  // A
  { searchWord: 'apple', title: 'Apple', description: 'A sweet fruit that comes in many varieties.', link: 'https://en.wikipedia.org/wiki/Apple' },
  { searchWord: 'astronomy', title: 'Astronomy', description: 'The study of celestial objects and the universe.', link: 'https://en.wikipedia.org/wiki/Astronomy' },
  { searchWord: 'architecture', title: 'Architecture', description: 'The art and science of designing buildings.', link: 'https://en.wikipedia.org/wiki/Architecture' },

  // B
  { searchWord: 'banana', title: 'Banana', description: 'A long, yellow fruit that is sweet and soft inside.', link: 'https://en.wikipedia.org/wiki/Banana' },
  { searchWord: 'biology', title: 'Biology', description: 'The science of life and living organisms.', link: 'https://en.wikipedia.org/wiki/Biology' },
  { searchWord: 'butterfly', title: 'Butterfly', description: 'An insect with large, often brightly colored wings.', link: 'https://en.wikipedia.org/wiki/Butterfly' },

  // C
  { searchWord: 'cat', title: 'Cat', description: 'A small domesticated carnivorous mammal with soft fur.', link: 'https://en.wikipedia.org/wiki/Cat' },
  { searchWord: 'chemistry', title: 'Chemistry', description: 'The science that deals with the properties of substances.', link: 'https://en.wikipedia.org/wiki/Chemistry' },
  { searchWord: 'cinema', title: 'Cinema', description: 'The art of making motion pictures; movies.', link: 'https://en.wikipedia.org/wiki/Cinema' },

  // D
  { searchWord: 'dog', title: 'Dog', description: 'A domesticated carnivorous mammal that typically has a long snout.', link: 'https://en.wikipedia.org/wiki/Dog' },
  { searchWord: 'dinosaur', title: 'Dinosaur', description: 'A diverse group of reptiles of the clade Dinosauria.', link: 'https://en.wikipedia.org/wiki/Dinosaur' },
  { searchWord: 'democracy', title: 'Democracy', description: 'A system of government by the whole population.', link: 'https://en.wikipedia.org/wiki/Democracy' },

  // E
  { searchWord: 'elephant', title: 'Elephant', description: 'A large herbivorous mammal with a trunk and tusks.', link: 'https://en.wikipedia.org/wiki/Elephant' },
  { searchWord: 'electricity', title: 'Electricity', description: 'A form of energy resulting from charged particles.', link: 'https://en.wikipedia.org/wiki/Electricity' },
  { searchWord: 'ecology', title: 'Ecology', description: 'The study of the relationships between living organisms.', link: 'https://en.wikipedia.org/wiki/Ecology' },

  // F
  { searchWord: 'frog', title: 'Frog', description: 'A small tailless amphibian with smooth skin.', link: 'https://en.wikipedia.org/wiki/Frog' },
  { searchWord: 'fossil', title: 'Fossil', description: 'The remains or impression of a prehistoric organism.', link: 'https://en.wikipedia.org/wiki/Fossil' },
  { searchWord: 'forest', title: 'Forest', description: 'A large area covered chiefly with trees and undergrowth.', link: 'https://en.wikipedia.org/wiki/Forest' },

  // G
  { searchWord: 'giraffe', title: 'Giraffe', description: 'A tall African mammal with a very long neck.', link: 'https://en.wikipedia.org/wiki/Giraffe' },
  { searchWord: 'geology', title: 'Geology', description: 'The science that deals with the earth\'s physical structure.', link: 'https://en.wikipedia.org/wiki/Geology' },
  { searchWord: 'galaxy', title: 'Galaxy', description: 'A system of millions or billions of stars.', link: 'https://en.wikipedia.org/wiki/Galaxy' },

  // H
  { searchWord: 'horse', title: 'Horse', description: 'A large, solid-hoofed domesticated mammal.', link: 'https://en.wikipedia.org/wiki/Horse' },
  { searchWord: 'history', title: 'History', description: 'The study of past events, particularly in human affairs.', link: 'https://en.wikipedia.org/wiki/History' },
  { searchWord: 'harmony', title: 'Harmony', description: 'The combination of musical notes to produce a pleasing sound.', link: 'https://en.wikipedia.org/wiki/Harmony' },

  // I
  { searchWord: 'iguana', title: 'Iguana', description: 'A large arboreal tropical American lizard.', link: 'https://en.wikipedia.org/wiki/Iguana' },
  { searchWord: 'island', title: 'Island', description: 'A piece of land surrounded by water.', link: 'https://en.wikipedia.org/wiki/Island' },
  { searchWord: 'invention', title: 'Invention', description: 'The action of creating something, typically a device.', link: 'https://en.wikipedia.org/wiki/Invention' },

  // J
  { searchWord: 'jaguar', title: 'Jaguar', description: 'A large wild cat native to the Americas.', link: 'https://en.wikipedia.org/wiki/Jaguar' },
  { searchWord: 'jellyfish', title: 'Jellyfish', description: 'A free-swimming marine coelenterate with a gelatinous umbrella-shaped body.', link: 'https://en.wikipedia.org/wiki/Jellyfish' },
  { searchWord: 'journalism', title: 'Journalism', description: 'The activity or profession of writing for newspapers.', link: 'https://en.wikipedia.org/wiki/Journalism' },

  // K
  { searchWord: 'kangaroo', title: 'Kangaroo', description: 'A large plant-eating marsupial with powerful hind legs.', link: 'https://en.wikipedia.org/wiki/Kangaroo' },
  { searchWord: 'kaleidoscope', title: 'Kaleidoscope', description: 'A toy for viewing changing patterns of colored glass.', link: 'https://en.wikipedia.org/wiki/Kaleidoscope' },
  { searchWord: 'kitchen', title: 'Kitchen', description: 'A room or area where food is prepared and cooked.', link: 'https://en.wikipedia.org/wiki/Kitchen' },

  // L
  { searchWord: 'lion', title: 'Lion', description: 'A large wild cat with a muscular build, known as the king of the jungle.', link: 'https://en.wikipedia.org/wiki/Lion' },
  { searchWord: 'literature', title: 'Literature', description: 'Written works, especially those considered of superior or lasting artistic merit.', link: 'https://en.wikipedia.org/wiki/Literature' },
  { searchWord: 'lighthouse', title: 'Lighthouse', description: 'A tower with a light that is used to guide ships at sea.', link: 'https://en.wikipedia.org/wiki/Lighthouse' },

  // M
  { searchWord: 'monkey', title: 'Monkey', description: 'A small to medium-sized primate typically with a long tail.', link: 'https://en.wikipedia.org/wiki/Monkey' },
  { searchWord: 'mathematics', title: 'Mathematics', description: 'The abstract science of number, quantity, and space.', link: 'https://en.wikipedia.org/wiki/Mathematics' },
  { searchWord: 'museum', title: 'Museum', description: 'A building in which objects of historical, scientific, or artistic interest are stored and exhibited.', link: 'https://en.wikipedia.org/wiki/Museum' },

  // N
  { searchWord: 'nightingale', title: 'Nightingale', description: 'A small songbird known for its powerful and beautiful song.', link: 'https://en.wikipedia.org/wiki/Nightingale' },
  { searchWord: 'nebula', title: 'Nebula', description: 'A cloud of gas and dust in outer space.', link: 'https://en.wikipedia.org/wiki/Nebula' },
  { searchWord: 'nutrition', title: 'Nutrition', description: 'The process of providing or obtaining the food necessary for health and growth.', link: 'https://en.wikipedia.org/wiki/Nutrition' },

  // O
  { searchWord: 'octopus', title: 'Octopus', description: 'A soft-bodied, eight-armed mollusk found in the ocean.', link: 'https://en.wikipedia.org/wiki/Octopus' },
  { searchWord: 'orchestra', title: 'Orchestra', description: 'A large group of musicians who play together on various instruments.', link: 'https://en.wikipedia.org/wiki/Orchestra' },
  { searchWord: 'oxygen', title: 'Oxygen', description: 'A chemical element necessary for most forms of life on Earth.', link: 'https://en.wikipedia.org/wiki/Oxygen' },

  // P
  { searchWord: 'penguin', title: 'Penguin', description: 'A flightless seabird found in the Southern Hemisphere.', link: 'https://en.wikipedia.org/wiki/Penguin' },
  { searchWord: 'philosophy', title: 'Philosophy', description: 'The study of the fundamental nature of knowledge, reality, and existence.', link: 'https://en.wikipedia.org/wiki/Philosophy' },
  { searchWord: 'pyramid', title: 'Pyramid', description: 'A monumental structure with a square or triangular base and sloping sides that meet in a point at the top.', link: 'https://en.wikipedia.org/wiki/Pyramid' },

  // Q
  { searchWord: 'quartz', title: 'Quartz', description: 'A hard, crystalline mineral composed of silicon and oxygen atoms.', link: 'https://en.wikipedia.org/wiki/Quartz' },
  { searchWord: 'quokka', title: 'Quokka', description: 'A small wallaby with a short tail and a friendly demeanor.', link: 'https://en.wikipedia.org/wiki/Quokka' },
  { searchWord: 'quiver', title: 'Quiver', description: 'A container for holding arrows, bolts, or darts.', link: 'https://en.wikipedia.org/wiki/Quiver' },

  // R
  { searchWord: 'rabbit', title: 'Rabbit', description: 'A small mammal with long ears, long hind legs, and a short tail.', link: 'https://en.wikipedia.org/wiki/Rabbit' },
  { searchWord: 'rainbow', title: 'Rainbow', description: 'A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.', link: 'https://en.wikipedia.org/wiki/Rainbow' },
  { searchWord: 'robotics', title: 'Robotics', description: 'The branch of technology that deals with the design, construction, and operation of robots.', link: 'https://en.wikipedia.org/wiki/Robotics' },
  { searchWord: 'react', title: 'React', description: 'A JavaScript library for building user interfaces, maintained by Facebook.', link: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)' },
  { searchWord: 'redux', title: 'Redux', description: 'A predictable state container for JavaScript apps, commonly used with React.', link: 'https://en.wikipedia.org/wiki/Redux_(software)' },
  { searchWord: 'react 18', title: 'React 18', description: 'The latest major version of React, featuring automatic batching, transitions, and concurrent rendering.', link: 'https://reactjs.org/docs/react-18.html' },
  { searchWord: 'react router', title: 'React Router', description: 'A collection of navigational components that compose declaratively with your application.', link: 'https://en.wikipedia.org/wiki/React_Router' },
  { searchWord: 'react query', title: 'React Query', description: 'A library for managing, caching, synchronizing, and updating server state in React applications.', link: 'https://tanstack.com/query/latest' },
  { searchWord: 'react hook form', title: 'React Hook Form', description: 'A performant, flexible, and extensible forms library for React.', link: 'https://react-hook-form.com/' },
  { searchWord: 'react', title: 'React', description: 'A JavaScript library for building user interfaces, maintained by Facebook.', link: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)' },
  { searchWord: 'redux', title: 'Redux', description: 'A predictable state container for JavaScript apps, commonly used with React.', link: 'https://en.wikipedia.org/wiki/Redux_(software)' },
  { searchWord: 'react 18', title: 'React 18', description: 'The latest major version of React, featuring automatic batching, transitions, and concurrent rendering.', link: 'https://reactjs.org/docs/react-18.html' },
  { searchWord: 'react router', title: 'React Router', description: 'A collection of navigational components that compose declaratively with your application.', link: 'https://en.wikipedia.org/wiki/React_Router' },
  { searchWord: 'react query', title: 'React Query', description: 'A library for managing, caching, synchronizing, and updating server state in React applications.', link: 'https://tanstack.com/query/latest' },
  { searchWord: 'react hook form', title: 'React Hook Form', description: 'A performant, flexible, and extensible forms library for React.', link: 'https://react-hook-form.com/' },
  { searchWord: 'react', title: 'React', description: 'A JavaScript library for building user interfaces, maintained by Facebook.', link: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)' },
  { searchWord: 'redux', title: 'Redux', description: 'A predictable state container for JavaScript apps, commonly used with React.', link: 'https://en.wikipedia.org/wiki/Redux_(software)' },
  { searchWord: 'react 18', title: 'React 18', description: 'The latest major version of React, featuring automatic batching, transitions, and concurrent rendering.', link: 'https://reactjs.org/docs/react-18.html' },
  { searchWord: 'react router', title: 'React Router', description: 'A collection of navigational components that compose declaratively with your application.', link: 'https://en.wikipedia.org/wiki/React_Router' },
  { searchWord: 'react query', title: 'React Query', description: 'A library for managing, caching, synchronizing, and updating server state in React applications.', link: 'https://tanstack.com/query/latest' },
  { searchWord: 'react hook form', title: 'React Hook Form', description: 'A performant, flexible, and extensible forms library for React.', link: 'https://react-hook-form.com/' },

  // S
  { searchWord: 'snake', title: 'Snake', description: 'A long, legless, carnivorous reptile.', link: 'https://en.wikipedia.org/wiki/Snake' },
  { searchWord: 'symphony', title: 'Symphony', description: 'An elaborate musical composition for full orchestra.', link: 'https://en.wikipedia.org/wiki/Symphony' },
  { searchWord: 'solar', title: 'Solar', description: 'Related to or determined by the sun.', link: 'https://en.wikipedia.org/wiki/Solar' },
  { searchWord: 'saxophone', title: 'Saxophone', description: 'A woodwind instrument with a conical body and a single reed.', link: 'https://en.wikipedia.org/wiki/Saxophone' },
  { searchWord: 'solar system', title: 'Solar System', description: 'The collection of eight planets and their moons in orbit around the sun.', link: 'https://en.wikipedia.org/wiki/Solar_System' },
  { searchWord: 'sociology', title: 'Sociology', description: 'The study of the development, structure, and functioning of human society.', link: 'https://en.wikipedia.org/wiki/Sociology' },
  { searchWord: 'sunset', title: 'Sunset', description: 'The time in the evening when the sun disappears or daylight fades.', link: 'https://en.wikipedia.org/wiki/Sunset' },
  { searchWord: 'surrealism', title: 'Surrealism', description: 'A 20th-century avant-garde movement in art and literature.', link: 'https://en.wikipedia.org/wiki/Surrealism' },

  // T
  { searchWord: 'tiger', title: 'Tiger', description: 'A large wild cat with a reddish-orange coat and black stripes.', link: 'https://en.wikipedia.org/wiki/Tiger' },
  { searchWord: 'technology', title: 'Technology', description: 'The application of scientific knowledge for practical purposes.', link: 'https://en.wikipedia.org/wiki/Technology' },
  { searchWord: 'telescope', title: 'Telescope', description: 'An optical instrument designed to make distant objects appear nearer.', link: 'https://en.wikipedia.org/wiki/Telescope' },

  // U
  { searchWord: 'umbrella', title: 'Umbrella', description: 'A device used for protection from rain or sun.', link: 'https://en.wikipedia.org/wiki/Umbrella' },
  { searchWord: 'universe', title: 'Universe', description: 'All existing matter and space considered as a whole.', link: 'https://en.wikipedia.org/wiki/Universe' },
  { searchWord: 'urban', title: 'Urban', description: 'Relating to, or characteristic of a city or town.', link: 'https://en.wikipedia.org/wiki/Urban_area' },

  // V
  { searchWord: 'violin', title: 'Violin', description: 'A string instrument which is played with a bow.', link: 'https://en.wikipedia.org/wiki/Violin' },
  { searchWord: 'volcano', title: 'Volcano', description: 'A mountain or hill with a crater through which lava, rock fragments, hot vapor, and gas are being or have been erupted from the earth\'s crust.', link: 'https://en.wikipedia.org/wiki/Volcano' },
  { searchWord: 'vulture', title: 'Vulture', description: 'A large bird of prey that typically scavenges on carrion.', link: 'https://en.wikipedia.org/wiki/Vulture' },

  // W
  { searchWord: 'whale', title: 'Whale', description: 'A very large marine mammal with a streamlined body and horizontal tail fin.', link: 'https://en.wikipedia.org/wiki/Whale' },
  { searchWord: 'windmill', title: 'Windmill', description: 'A building with sails or vanes that turn in the wind and generate power to grind grain into flour.', link: 'https://en.wikipedia.org/wiki/Windmill' },
  { searchWord: 'wizard', title: 'Wizard', description: 'A person who practices magic; a sorcerer or magician.', link: 'https://en.wikipedia.org/wiki/Wizard' },

  // X
  { searchWord: 'xylophone', title: 'Xylophone', description: 'A musical instrument played by striking a row of wooden bars of graduated length with one or more small wooden or plastic beaters.', link: 'https://en.wikipedia.org/wiki/Xylophone' },
  { searchWord: 'xenon', title: 'Xenon', description: 'A chemical element that is a colorless, dense, odorless noble gas.', link: 'https://en.wikipedia.org/wiki/Xenon' },
  { searchWord: 'x-ray', title: 'X-ray', description: 'A form of electromagnetic radiation that can pass through solid objects, including the body, to create an image of what is inside.', link: 'https://en.wikipedia.org/wiki/X-ray' },

  // Y
  { searchWord: 'yacht', title: 'Yacht', description: 'A medium-sized sailboat equipped for cruising or racing.', link: 'https://en.wikipedia.org/wiki/Yacht' },
  { searchWord: 'yoga', title: 'Yoga', description: 'A group of physical, mental, and spiritual practices originating in ancient India.', link: 'https://en.wikipedia.org/wiki/Yoga' },
  { searchWord: 'yellow', title: 'Yellow', description: 'A color like that of a lemon or gold, or the yolk of an egg.', link: 'https://en.wikipedia.org/wiki/Yellow' },

  // Z
  { searchWord: 'zebra', title: 'Zebra', description: 'An African wild horse with black-and-white stripes and an erect mane.', link: 'https://en.wikipedia.org/wiki/Zebra' },
  { searchWord: 'zenith', title: 'Zenith', description: 'The highest point reached by a celestial or other object.', link: 'https://en.wikipedia.org/wiki/Zenith' },
  { searchWord: 'zoology', title: 'Zoology', description: 'The branch of biology concerned with the animal kingdom and animal life.', link: 'https://en.wikipedia.org/wiki/Zoology' }
];

  export default searchData;  