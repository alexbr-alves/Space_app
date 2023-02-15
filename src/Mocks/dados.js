const dadosPlanets = [
    {
      planet: "Mercury",
      description: "It is the closest planet to the Sun and the smallest in the solar system. It has an extremely rocky and rugged surface, with deep craters and steep cliffs. The temperature on its surface can reach over 400 degrees Celsius during the day, but drops to -180 degrees Celsius at night.",
      circumference: 15.329,
      moons: 0,
      distanceFromSun: "57.9 Mi",
      orbitalPeriod: 88,
      view3d: true,
      noSistemaSolar: null,
      image: require("../../assets/planetasIMG/mercury.png")
    },
    {
      planet: "Venus",
      description: "it is the second closest planet to the Sun and is often called Earth's 'twin' due to its similar size. However, Venus has a dense atmosphere composed mostly of carbon dioxide and an extremely hot surface temperature that reaches over 450 degrees Celsius.",
      circumference: 38.025,
      moons: 0,
      distanceFromSun: "108.2Mi",
      orbitalPeriod: 225,
      view3d: true,
      noSistemaSolar: null,
      image: require("../../assets/planetasIMG/venus.png")
    },
    {
      planet: "Earth",
      description: "It is the third planet from the Sun and the only known planet that harbors life. The Earth is made up of a variety of ecosystems, from forests and mountains to oceans and deserts.",
      circumference: 40.075,
      moons: 1,
      distanceFromSun: "149.6M",
      orbitalPeriod: 365,
      view3d: true,
      noSistemaSolar: null,
      image: require("../../assets/planetasIMG/terra.png")
    },
    {
      planet: "Mars",
      description: "it is the fourth planet from the Sun and is often called the 'Red Planet' due to its reddish appearance. It has volcanoes, canyons and an arid and dusty landscape. Mars also has two small moons: Phobos and Deimos.",
      circumference: 21.297,
      moons: 2,
      distanceFromSun: "227.9 Mi",
      orbitalPeriod: 687,
      view3d: true,
      noSistemaSolar: null,
      image: require("../../assets/planetasIMG/mars.png")
    },
    {
      planet: "Jupiter",
      description: "It is the largest planet in the solar system and has a ring system and dozens of moons. Jupiter is a gaseous planet, mostly composed of hydrogen and helium, and has a turbulent atmosphere with huge storms, including the Great Red Spot, a storm that has lasted for hundreds of years.",
      circumference: 439.264,
      moons: "More than 75",
      distanceFromSun: "778.5 Mi",
      orbitalPeriod: 4.333,
      view3d: true,
      noSistemaSolar: null,
      image: require("../../assets/planetasIMG/jupiter.png")
    },
    {
      planet: "Saturn",
      description: "it is the second largest planet in the solar system and is known for its spectacular rings, composed mainly of ice and dust. Saturn also has dozens of moons, including the largest, Titan, which has its own thick atmosphere.",
      circumference: 365.882,
      moons: "More than 80",
      distanceFromSun: "1.4 Bi",
      orbitalPeriod: 10.747,
      view3d: true,
      noSistemaSolar: null,
      image: require("../../assets/planetasIMG/saturn.png")
    },
    {
      planet: "Uranus",
      description: "it is a gas giant planet with an axis of rotation tilted to the orbital plane, meaning that it rotates 'lying down' rather than 'upright'. Uranus has a ring system and several moons, including Miranda, which has a surface full of faults and fractures.",
      circumference: 157.592,
      moons: 27,
      distanceFromSun: "2.9 Bi",
      orbitalPeriod: 30.589,
      view3d: true,
      noSistemaSolar: null,
      image: require("../../assets/planetasIMG/uranus.png")
    },
    {
      planet: "Neptune",
      description: "it is the farthest planet from the Sun and is a gas giant like Jupiter, Saturn and Uranus. It has a turbulent atmosphere with winds reaching over 2,000 km/h. Neptune also has a ring system and several moons, including Triton, which is covered in ice and has nitrogen volcanoes.",
      circumference: 152.995,
      moons: 14,
      distanceFromSun: "4.5 Bi",
      orbitalPeriod: 59.800,
      view3d: true,
      noSistemaSolar: null,
      image: require("../../assets/planetasIMG/neptune.png")
    },
    {
      planet: "Sun",
      description: "The Sun is a star at the center of the Solar System. It is a nearly perfect spherical ball of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth.",
       circumference: null,
      moons: null,
      distanceFromSun: null,
      orbitalPeriod: null,
      view3d: true,
      noSistemaSolar: null,
      image: require('../../assets/planetasIMG/Sun.png')
    },
    {
      planet: "Pluto",
      description: "Pluto is a celestial body located in the region known as the Kuiper Belt, beyond the orbit of Neptune. It is composed mainly of ice and rock, and has a thin atmosphere composed of nitrogen, methane and carbon monoxide. Pluto has five known moons, the largest of which is called Charon.",
      circumference:  2.377,
      moons: 5,
      distanceFromSun: "4.4 - 7.4 BI",
      orbitalPeriod: null,
      view3d: false,
      noSistemaSolar: null,
      image: require('../../assets/planetasIMG/pluto.png')
    },
    { planet: "Alpha Centauri Bb", 
    description:  "Is an exoplanet that orbits the star Alpha Centauri B, the closest to our Sun. It is slightly larger than Earth and orbits very close to its star, making it one of the hottest and most uninhabitable planets ever discovered. Alpha Centauri Bb was the first exoplanet discovered in the Alpha Centauri star system and its study is of great importance for understanding the formation and evolution of planetary systems.", 
    circumference: null,
    moons: null,
    distanceFromSun: null,
    orbitalPeriod: null,
    noSistemaSolar: "No SOLAR SYSTEM",
    image: require('../../assets/planetasIMG/alpha.png')
    },
    { 
      planet: "Kepler-22b",
      description: "Is an exoplanet with a size and orbit similar to that of Earth, located about 600 light-years away. It is considered one of the best candidates to have conditions for the existence of extraterrestrial life, as it is located in a habitable zone around its star and may have liquid water on its surface. Kepler-22b was discovered in 2011 by NASA's Kepler mission, and its study is critical to the search for life beyond our solar system.", 
       circumference: null,
      moons: null,
      distanceFromSun: null,
      orbitalPeriod: null,
      view3d: false,
      noSistemaSolar: "No SOLAR SYSTEM",
      image: require('../../assets/planetasIMG/kepler.png')
    },
    { 
      planet: "HD 209458 b", 
      description: " Is a Jupiter-like exoplanet located about 150 light-years from Earth. It is known to have an atmosphere rich in hydrogen, helium, and water vapor and is one of the first exoplanets whose atmosphere was detected. HD 209458 b is also known to be one of the most studied exoplanets, as it allows scientists to obtain valuable information about the atmospheres of planets beyond our solar system.", 
       circumference: null,
      moons: null,
      distanceFromSun: null,
      orbitalPeriod: null,
      view3d: false,
      noSistemaSolar: "No SOLAR SYSTEM",
      image: require('../../assets/planetasIMG/hd.png')
    },
    {
       planet: "Proxima Centauri b", 
       description: " Is an exoplanet that orbits the star Proxima Centauri, the closest to our Sun. It is slightly larger than Earth and orbits in a habitable zone around its star, which means it could have liquid water on its surface. Proxima Centauri b was discovered in 2016 and is considered one of the most promising exoplanets for the search for extraterrestrial life.",
       circumference: null,
       moons: null,
       distanceFromSun: null,
       orbitalPeriod: null,
       view3d: false, 
       noSistemaSolar: "No SOLAR SYSTEM",
       image: require('../../assets/planetasIMG/proxima.png')
      },
    { 
      planet: "TRAPPIST-1d", 
      description: "Is one of the seven exoplanets that orbit the ultra-cool star TRAPPIST-1, located about 40 light-years from Earth. It is considered one of the best candidates to have conditions for the existence of extraterrestrial life, as it is located in a habitable zone around its star and is one of the most studied exoplanets to date. TRAPPIST-1d is also known to have a highly variable climate and is one of the few exoplanets with a known density.", 
       circumference: null,
      moons: null,
      distanceFromSun: null,
      orbitalPeriod: null,
      view3d: false,
      noSistemaSolar: "No SOLAR SYSTEM",
      image: require('../../assets/planetasIMG/trappist.png')
    },
    {
       planet: "WASP-12b", 
       description: "Is a Jupiter-like exoplanet located about 600 light-years from Earth. It is known to be one of the hottest planets ever discovered, with an estimated temperature of about 2,200 degrees Celsius. WASP-12b is also known to have a very close orbit to its star, making it one of the most uninhabitable planets.", 
       circumference: null,
       moons: null,
       distanceFromSun: null,
       orbitalPeriod: null,
       view3d: false,
       noSistemaSolar: "No SOLAR SYSTEM",
       image: require('../../assets/planetasIMG/wasp.png')
      },
  ];
  
  export default dadosPlanets;