var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This book introduces the fundamental ideas of physics, with an emphasis on Newtonian mechanics, through a satirical storyline. In this storyline, a group of freshmen at a university decide to steal back their beloved mascot, a 500 kg bronze statue of Richard Feynman, from the clutches of their wealthy, obnoxious rival university. It is meant to be a fun and engaging introduction to physics for those who are new to the subject, as well as a refresher for those who have some background in physics but want to learn more about the subject in a more lighthearted way.  The book begins with an introduction to measurements. This section outlines how we make measurements, how we think about the uncertainties in those measurements, and how we can use those measurements to understand the world around us. With these tools in hand, we can then start to understand the motion of objects, which is the subject of the next few chapters. We will be using the measurements we made in the first chapter to understand the motion of a van, which is a key part of our storyline.  The next few chapters will be focused on basic concepts regarding forces and energy. We cover the standard materials, such as Newton's laws, work and energy, and momentum, but we also cover some more advanced topics, such as non-inertial reference frames, when appropriate. We will be using the concepts we learn in these chapters to understand how to plan and execute a heist.  This book will not cover the Lagrangian formulation, Hamiltonian formulation, or field theory. Regrettably, while these theories represent some of the most beautiful culminations of human thought, their abstraction renders them inaccessible without years of mathematical training.  In terms of math, I will be using calculus and linear algebra throughout the book, but I will not be assuming any prior knowledge of these subjects. I will be introducing the necessary mathematical concepts as we go along, and I will be providing exercises and further reading for those who want to learn more about the math. I will hold your hand through some of the mathematical details. ( Of course this is not in a literal sense. I don't think you would want me to actually hold your hand. ) However, many of the mathematical details will be left as exercises or further reading, so that you can practice doing the math yourself.  "
},
{
  "id": "sec-the-international-system-of-units",
  "level": "1",
  "url": "sec-the-international-system-of-units.html",
  "type": "Section",
  "number": "1.1",
  "title": "The International System of Units",
  "body": " The International System of Units   Welcome to the first section of the first chapter! In this section, we will discuss the units of measurement, which are the standard ways of expressing the dimensions of quantities.  There is a storyline we shall tell throughout this book. An eccentric, wildly unqualified group of freshmen (otherwise commonly known as \"physics students\") decides to steal back their university's beloved mascot, a 500 kg bronze statue of Richard Feynman, from the clutches of their wealthy, obnoxious rival university. To even begin with this, they need to figure out how to move the statue without getting caught by the security guards. This involves making measurements of the statue and the van they will be using to transport it, and then using those measurements to plan their heist.  If you want to steal a 500 kg statue, you can't just \"eyeball it.\" Welcome to the first step of the plan. In this section, we define the units of measurement the universal language of physics that ensures our getaway van doesn't bottom out and our ropes don't snap. Before we can outsmart the rival university, we have to agree on how we measure the world.    The Seven Quantities  Every measurement in this heist has a dimension (the \"what\"), a magnitude (the \"how much\"), and a unit (the \"compared to what\"). Dave, our team leader, insists on using the International System of Units (SI) . Sarah, however, measured the statue's height in Subway sandwiches. This is why we need standards.   The \"Subway\" Incident   Sarah reports the Feynman statue is 10.5 Subway Footlongs tall. Dave's blueprints say it is 1.85 meters. Using the conversion , determine: (1) The dimensions of these measurements, and (2) Which measurement claims the statue is taller?    The dimension is Length . Converting Sarah's measurement: . Sarah's measurement is significantly taller—suggesting she either found a giant statue or, more likely, used a very non-standard sandwich.    The most common system of dimensions and units is the International System of Units, abbreviated SI for the French Système international d'unités . It has a rich history, and it is the most widely used system of units in the world. The SI system is based on seven fundamental quantities, stated in the following table.   International System of Units    Dimension  Base SI Unit  Heist Relevance    Length  meter (m)  Distance to the getaway van.    Mass  kilogram (kg)  Weight of the Feynman statue.    Time  second (s)  The window before security arrives.    Electric current  ampere (A)  Powering the van's electronics.    Temperature  kelvin (K)  Ensuring the ropes don't snap in the cold.    Amount of substance  mole (mol)  Calculating the number of sandwiches needed for the heist.    Luminous intensity  candela (cd)  Measuring the brightness of the getaway van's headlights.     These are known as the base units because they define the dimensions of all other quantities. To measure the velocity of the van, we need to measure the length it travels and the time it takes to travel that length. The dimension of velocity is length divided by time, and the unit of velocity is meters per second, . The acceleration of the van has the dimension of velocity divided by time, which is length divided by time squared, and the unit of acceleration is meters per second squared, . If we apply a force to the van, the dimension of the force is mass times acceleration, which is mass times length divided by time squared, and the unit of force is kilogram meter per second squared, , which is also known as a newton (N).  If we were to measure the energy of the van, we would find that it has the units of , which is also known as a joule (J). Units like the newton and the joule are called derived units because they are derived from the base units.  Now there's a big problem: how do I know that my 1 second is the same as your 1 second? How do I know that my 1 meter is the same as your 1 meter? It would appear that we need some kind of standard to define our units. The SI system incorporates a set of defining constants , which are fundamental physical constants that are used to define the base units. We shall now go on a tour of each of the seven base units and their defining constants.    How Do We Define the Second?  The first unit we will discuss is the second, which is the SI base unit of time. In a heist, \"about a minute\" is a death sentence. We need to know exactly how long a second is. Historically, many of these units were defined in terms of physical objects or phenomena, such as the length of a particular metal bar for the meter, or the mass of a particular lump of platinum for the kilogram.  Prior to 1960, one second was defined as 1\/86,400 of a mean solar day, which is the average time it takes for the Earth to complete one rotation on its axis. This was sufficient for most purposes measuring the time it takes for a van to travel a certain distance, for example. With the advent of atomic clocks, we were able to measure time with a precision of one in seconds. For our heist, if our timing is off by a fraction of a second, the laser alarms might catch us.  In 1960, the second was redefined by Resolution 9 of the 11th General Conference on Weights and Measures, abbreviated CGPM for the French Conférence générale des poids et mesures , as one in 31,556,925.9747 of the tropical year for 1900 January 0 at 12 hours ephemeris time. You can read every resolution in the appendix of .  The modern definition, as adopted in 1967 by Resolution 1 of the 13th CGPM, is based on the properties of the caesium 133 atom. Its most recent definition, as adopted in 2018 by Resolution 1 of the 26th CGPM, is as follows:   The second, symbol s, is the SI unit of time. It is defined by taking the fixed numerical value of the caesium frequency, , the unperturbed ground-state hyperfine transition frequency of the caesium 133 atom, to be 9,192,631,770 when expressed in the unit , which is equal to .    What the heck does that even mean? To begin, if you have studied general chemistry before, you will know that electrons in an atom can only occupy certain energy levels, and that they can transition between these energy levels by absorbing or emitting photons of specific frequencies. In caesium 133, the ground state of the atom splits into two hyperfine levels due to electromagnetic interactions between the nucleus and the electrons. is the frequency of the photon emitted when an electron in a caesium 133 atom transitions between the and hyperfine levels of the ground state electronic state.  Therefore, we have the exact relation , and thus .  In words, the second is defined as the duration of 9,192,631,770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the caesium 133 atom.  In order to realize this definition, we can use an atomic clock. A primary frequency standard is a device that uses the defining constant to realize the unit. In this case, a caesium atomic clock uses the caesium frequency to realize the second. During this measurement, systematic errors must be carefully controlled. One of the most significant sources of systematic error in an atomic clock is gravity, for instance.  In the near future, the second will likely be redefined using optical frequency standards , which use optical transitions in atoms or ions instead of microwave transitions. These optical transitions have much higher frequencies than microwave transitions, which allows for even greater precision in timekeeping .    How Do We Define the Meter?  The meter is the SI base unit of length. In the past, the meter was defined as one ten-millionth of the distance from the equator to the North Pole along a meridian through Paris. This definition was based on the idea that the Earth is a perfect sphere. The Earth is, in actuality, an oblate spheroid, meaning that it is slightly flattened at the poles and bulging at the equator.  In 1889, the meter was redefined as the distance between two marks on a platinum-iridium bar, or the \"International Prototype Meter\", by the 1st CGPM. It was precisely calibrated for effects such as temperature, humidity, and atmospheric pressure, and it was the standard for length measurements for over 80 years. This definition was more practical, but it still had some issues, such as the fact that the bar could be damaged or lost. It is quite funny, if you think about it, that people had to ship a bar of metal around the world in order to have a standard unit of length.  Later on, in 1960, the meter was redefined as 1,650,763.73 wavelengths of the orange-red emission line of the krypton 86 atom (the transition), by Resolution 6 of the 11th CGPM.  The modern definition, as adopted in 1983 by Resolution 1 of the 17th CGPM, is based on the properties of light. It is as follows:   The metre, symbol m, is the SI unit of length. It is defined by taking the fixed numerical value of the speed of light in vacuum, , to be 299,792,458 when expressed in the unit  , where the second is defined in terms of the caesium frequency .   The exact relation is , and thus .  In words, the meter is defined as the length of the path traveled by light in vacuum during a time interval of 1\/299,792,458 of a second.  This new, very precise definition of the meter is realized via laser interferometry, which is a technique that uses the interference of light waves to measure distances with extremely high precision.    How Do We Define the Kilogram?  This is the big one. The Feynman statue is 500 kg. It was defined as the mass of the International Prototype Kilogram, which is a platinum-iridium cylinder that was kept at the International Bureau of Weights and Measures, or BIPM for the French Bureau international des poids et mesures , in Sèvres, France. But this block of metal was literally losing mass over time.  In the 26th CGPM in 2018, the kilogram was finally redefined without reference to a physical object, using Planck's constant as the defining constant. It is defined as follows.   The kilogram, symbol kg, is the SI unit of mass. It is defined by taking the fixed numerical value of the Planck constant, h, to be when expressed in the unit , which is equal to , where the metre and the second are defined in terms of and .   Under the previous definition, the mass of the kilogram was determined by weighing the International Prototype Kilogram against other objects. Planck's constant was to be experimentally determine. Using the new definition, the value of Planck's constant is fixed, and the mass of the kilogram is determined by measuring Planck's constant.    Identify the exact relation using this new definition, and thus derive an expression for the kilogram in terms of the defining constants , , and .    The exact relation using the new definition is , so .    To realize this new definition, one can use a Kibble balance, which is a device that measures the Planck constant by balancing the gravitational force on a mass against an electromagnetic force.    How Do We Define the Ampere?  It may seem strange that the SI uses current as a fundamental quantity, rather than charge. Charge, by itself, is quite difficult to measure. The flow of charge current, on the other hand, can be measured by measuring the magnetic field it produces, which is much easier to do with high precision. Indeed, if two parallel wires carry a current, they will produce a magnetic force on each other, causing them to attract or repel each other depending on the direction of the currents. This force is equal to , where and are the currents in the wires and is the distance between the wires. So if we know the distance between the wires and the force they exert on each other, we can determine the current in the wires.  As such, the SI base unit of electric current, the ampere, was historically defined as the constant current that, if maintained in two straight parallel conductors of infinite length and negligible circular cross-section, and placed one meter apart in vacuum, would produce between these conductors a force equal to newtons per meter of length.  This definition fixes the value of , the vacuum magnetic permeability, to be exactly henries per meter.  By Resolution 1 of the 26th CGPM in 2019, the ampere was redefined in terms of the elementary charge , which is the charge of a single proton (or the negative of the charge of a single electron). It is defined as follows.   The ampere, symbol A, is the SI unit of electric current. It is defined by taking the fixed numerical value of the elementary charge, , to be when expressed in the unit , which is equal to , where the second is defined in terms of .     Identify the exact relation using this new definition, and thus derive an expression for the ampere in terms of the defining constants and . Explain, in words, what this new definition means.    The exact relation using the new definition is , so .  In words, the ampere is defined as the electric current corresponding to the flow of elementary charges per second.    Instead of fixing , the new definition of the ampere forces to be experimentally determined, instead fixing the value of the elementary charge .  If you know about electromagnetic theory, you may be wondering how this definition affects the value of the vacuum electric permittivity , as well as the relation . As aforementioned, the speed of light is fixed by the definition of the meter, and the vacuum magnetic permeability is no longer fixed by the definition of the ampere, so the vacuum electric permittivity must be experimentally determined.    How Do We Define the Kelvin?  We're almost done, hang in there. The kelvin is the SI base unit of thermodynamic temperature. As with the other base units, it was historically defined in terms of a physical object or phenomenon.  The original definition of the kelvin, as established in 1954 by Resolution 3 of the 10th CGPM, was based on the triple point of water , which is the temperature and pressure at which water can coexist in all three phases: solid, liquid, and gas. This definition set the temperature of the triple point of water to be exactly kelvins.  The modern definition, as adopted in 2018 by Resolution 1 of the 26th CGPM, is based on the properties of the Boltzmann constant . It is defined as follows.   The kelvin, symbol K, is the SI unit of thermodynamic temperature. It is defined by taking the fixed numerical value of the Boltzmann constant, , to be when expressed in the unit , which is equal to , where the kilogram, metre and second are defined in terms of , and .     Identify the exact relation using this new definition, and thus derive an expression for the kelvin in terms of the defining constants , , , and . What does this new definition mean, in words?    The exact relation using the new definition is , so .  In words, the kelvin is defined as the change in thermodynamic temperature that results in a change of joules of energy per particle.      How Do We Define the Mole?  The mole is the SI base unit of amount of substance. It is similar to the word \"dozen\", which is a unit of counting that represents 12 objects. The mole is just a much larger unit of counting. It was historically defined such that carbon-12 ( ) had a molar mass of exactly kilograms per mole, resulting in one mole being approximately entities, which is known as Avogadro's number (with the symbol and units of ).  More recently, this definition was flipped, and the mole was redefined by Resolution 1 of the 26th CGPM in 2018 as follows.   The mole, symbol mol, is the SI unit of amount of substance. It is defined by taking the fixed numerical value of the Avogadro constant, , to be when expressed in the unit .   The exact relation using this new definition is , so .  In words, the mole is defined as the amount of substance that contains exactly elementary entities, which can be atoms, electrons, molecules, ions, or other particles.    How Do We Define the Candela?  If we want to measure the brightness of the getaway van's headlights, we need a unit of luminous intensity. There are a few different ways to go about this, and we need to understand how light travels and interacts.  A radian is a unit of angular measurement such that a full circle is radians. There are many advantages to using radians instead of degrees. If you trace out a circle of radius , the length of the arc corresponding to an angle of radians is just . The area of the sector corresponding to an angle of radians is just . Moreover, in radians, the small angle approximations , , and work without any additional conversion factors.  A steradian is a unit of solid angle the three-dimensional analogue of the radian. A full sphere corresponds to steradians. The area of a spherical cap corresponding to a solid angle of steradians on a sphere of radius is just .  As light travels, it spreads out over a larger and larger area, so the intensity of the light decreases with distance. Luminous intensity is a measure of the amount of light emitted in a particular direction per unit solid angle. The SI base unit of luminous intensity is the candela , which is defined as follows.   The candela, symbol cd, is the SI unit of luminous intensity in a given direction. It is defined by taking the fixed numerical value of the luminous efficacy of monochromatic radiation of frequency Hz, , to be 683 when expressed in the unit , which is equal to , or , where the kilogram, metre and second are defined in terms of , and .     Identify the exact relation using this new definition, and thus derive an expression for the candela in terms of the defining constants , , , and . What does this new definition mean, in words?    The exact relation using the new definition is , so .  In words, the candela is defined as the luminous intensity of a source that emits monochromatic radiation of frequency terahertz and has a radiant intensity of watts per steradian in that direction.    And we're all done! This set of defining constants and definitions allows us to have a precise and consistent system of units that we can use to measure the various quantities involved in our heist, from the distance to the getaway van to the brightness of its headlights.   SI Units and Definitions    Base SI Unit  Defining Constant  Exact Relation    second (s)      meter (m)      kilogram (kg)      ampere (A)      kelvin (K)      mole (mol)      candela (cd)       Almost any physical quantity can be expressed in terms of these seven base units, and thus in terms of the defining constants.    Other Systems of Units  In addition to the SI, there are other systems of units that are used in specific fields or contexts.  Your chemist friend might prefer to use the CGS system of units, which stands for \"centimeter-gram-second\". In this system, the base units are the centimeter (cm) for length, the gram (g) for mass, and the second (s) for time. In electromagnetism, the CGS system has two variants: the Gaussian units and the Heaviside-Lorentz units. The Gaussian units are commonly used in theoretical physics, while the Heaviside-Lorentz units are often used in particle physics and quantum field theory.  The more deranged physicist might prefer to use natural units, which are a system of units in which certain fundamental constants are set to 1. This includes , , and .   "
},
{
  "id": "subsec-the-seven-quantities-2",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-the-seven-quantities-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dimension magnitude unit International System of Units (SI) "
},
{
  "id": "subsec-the-seven-quantities-3",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-the-seven-quantities-3",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "The \"Subway\" Incident.",
  "body": " The \"Subway\" Incident   Sarah reports the Feynman statue is 10.5 Subway Footlongs tall. Dave's blueprints say it is 1.85 meters. Using the conversion , determine: (1) The dimensions of these measurements, and (2) Which measurement claims the statue is taller?    The dimension is Length . Converting Sarah's measurement: . Sarah's measurement is significantly taller—suggesting she either found a giant statue or, more likely, used a very non-standard sandwich.   "
},
{
  "id": "subsec-the-seven-quantities-5",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-the-seven-quantities-5",
  "type": "Table",
  "number": "1.1.2",
  "title": "International System of Units",
  "body": " International System of Units    Dimension  Base SI Unit  Heist Relevance    Length  meter (m)  Distance to the getaway van.    Mass  kilogram (kg)  Weight of the Feynman statue.    Time  second (s)  The window before security arrives.    Electric current  ampere (A)  Powering the van's electronics.    Temperature  kelvin (K)  Ensuring the ropes don't snap in the cold.    Amount of substance  mole (mol)  Calculating the number of sandwiches needed for the heist.    Luminous intensity  candela (cd)  Measuring the brightness of the getaway van's headlights.    "
},
{
  "id": "subsec-the-seven-quantities-6",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-the-seven-quantities-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base units "
},
{
  "id": "subsec-the-seven-quantities-7",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-the-seven-quantities-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "derived units "
},
{
  "id": "subsec-the-seven-quantities-8",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-the-seven-quantities-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "defining constants "
},
{
  "id": "subsec-si-def-second-7",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-si-def-second-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hyperfine levels "
},
{
  "id": "subsec-si-def-second-10",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-si-def-second-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "primary frequency standard systematic errors "
},
{
  "id": "subsec-si-def-second-11",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-si-def-second-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "optical frequency standards "
},
{
  "id": "subsec-si-def-kilogram-6",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-si-def-kilogram-6",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "",
  "body": "  Identify the exact relation using this new definition, and thus derive an expression for the kilogram in terms of the defining constants , , and .    The exact relation using the new definition is , so .   "
},
{
  "id": "subsec-si-def-ampere-7",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-si-def-ampere-7",
  "type": "Checkpoint",
  "number": "1.1.4",
  "title": "",
  "body": "  Identify the exact relation using this new definition, and thus derive an expression for the ampere in terms of the defining constants and . Explain, in words, what this new definition means.    The exact relation using the new definition is , so .  In words, the ampere is defined as the electric current corresponding to the flow of elementary charges per second.   "
},
{
  "id": "subsec-si-def-kelvin-3",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-si-def-kelvin-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "triple point of water "
},
{
  "id": "subsec-si-def-kelvin-6",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-si-def-kelvin-6",
  "type": "Checkpoint",
  "number": "1.1.5",
  "title": "",
  "body": "  Identify the exact relation using this new definition, and thus derive an expression for the kelvin in terms of the defining constants , , , and . What does this new definition mean, in words?    The exact relation using the new definition is , so .  In words, the kelvin is defined as the change in thermodynamic temperature that results in a change of joules of energy per particle.   "
},
{
  "id": "subsec-si-def-mole-2",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-si-def-mole-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Avogadro's number "
},
{
  "id": "subsec-si-def-candela-3",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-si-def-candela-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "radian "
},
{
  "id": "subsec-si-def-candela-4",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-si-def-candela-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "steradian "
},
{
  "id": "subsec-si-def-candela-5",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-si-def-candela-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Luminous intensity candela "
},
{
  "id": "subsec-si-def-candela-7",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-si-def-candela-7",
  "type": "Checkpoint",
  "number": "1.1.6",
  "title": "",
  "body": "  Identify the exact relation using this new definition, and thus derive an expression for the candela in terms of the defining constants , , , and . What does this new definition mean, in words?    The exact relation using the new definition is , so .  In words, the candela is defined as the luminous intensity of a source that emits monochromatic radiation of frequency terahertz and has a radiant intensity of watts per steradian in that direction.   "
},
{
  "id": "subsec-si-def-candela-9",
  "level": "2",
  "url": "sec-the-international-system-of-units.html#subsec-si-def-candela-9",
  "type": "Table",
  "number": "1.1.7",
  "title": "SI Units and Definitions",
  "body": " SI Units and Definitions    Base SI Unit  Defining Constant  Exact Relation    second (s)      meter (m)      kilogram (kg)      ampere (A)      kelvin (K)      mole (mol)      candela (cd)      "
},
{
  "id": "sec-dimensions-and-uncertainties",
  "level": "1",
  "url": "sec-dimensions-and-uncertainties.html",
  "type": "Section",
  "number": "1.2",
  "title": "Dimensions and Uncertainties",
  "body": " Dimensions and Uncertainties   Now that we are familiar with the SI units, we can start talking about how to make measurements. Our goal in this section is twofold: first, we want to understand how to think about the dimensions of our measurements, and second, we want to understand how to think about the uncertainties in our measurements. Indeed, in a heist, a small mistake in the math does not just incur a lower grade on a homework assignment, but can lead to the 500 kg statue of Feynman dropping through the floor of a stolen van.    Dimensional Analysis  Let's begin by discussing the dimensions of our measurements. In our story, the van is moving at a certain speed. The dimension of speed is length over time. We shall write the dimension of length as and the dimension of time as . Therefore, the dimension of speed is   The following exercises should help you get a feel for how to ascertain the dimensions of a quantity.    Sarah (the Engineer) is hyper-caffeinated and scribbling formulas for the winch system, which will be used to pull the statue into the van. She hands Dave, the team leader, a formula for the required power of the winch system: . She argues that the formula makes sense because with more mass and more speed, we need more power.  But Dave, using only his brain, is able to determine that the formula is nonsense, without even looking at the numbers or referencing any physical principles. Do you see the issue?    The dimension of power is , where is the dimension of mass.    The formula given by Sarah has the dimension which is not the dimension of power. So the dimensions of both sides do not match.      Dave is trying to figure a way to fix Sarah's formula for the power of the winch system. He proposes that , where is a dimensionless constant, and , , and are constants that we need to determine. Can you determine the values of , , and by using dimensional analysis?    This is quite straightforward. The dimension of the right hand side is We want this to match the dimension of power, which is . Therefore, we need to have , , and , which gives us .    To further refine the formula, we need to use certain laws of physics to figure out the constants. Sarah argues, in her derivation, that we need to take gravity into account. According to Isaac Newton, when two objects with masses and are separated by a distance , they exert a gravitational force on each other given by where is a constant.    What are the dimensions of ?    The dimension of the left hand side is and the dimension of the right hand side is Therefore, we need to have     Let's take another example to illustrate the power of dimensional analysis. A pendulum is a system consisting of a mass hanging from a string of length . The time it takes for the pendulum to complete one full swing back and forth is called the period, which we will denote as . The maximum angle that the pendulum makes with the vertical is called the amplitude, which we will denote as . The gravitational acceleration is denoted as . We can now use dimensional analysis to figure out how the period of the pendulum depends on the other parameters.  We first write down the most general formula for the period of the pendulum that we can think of: , where is some function of the amplitude, and , , and are constants that we need to determine. The period of the pendulum has the dimension of time, which we will denote as . The other parameters have the following dimensions: . The dimension of the right hand side is . We want this to match the dimension of time, which is . Therefore, we need to have , , and , which gives us and . Therefore, the period of the pendulum is given by . The function cannot be determined by dimensional analysis, but it can be determined by using the laws of physics. It turns out that for small angles, , which gives us the well-known formula for the period of a pendulum:   With dimensional analysis, we were able to figure out a close expression for the period of the pendulum, without even looking at the equations of motion. Crucially, we were able to figure out that the period does not depend on the mass of the pendulum, which is something not obvious from first glance.    Uncertainties and Errors  \"Measure twice, steal once,\" is Dave's new motto. During their midnight scouting mission, the team measured the statue's base. The meter stick they used had a smallest division of 1 mm (0.1 cm).  When we measure anything, we never get the exact value of the quantity we are trying to measure. There is always a range of possible values that the quantity could take, and we can only say that the true value of the quantity is likely to be within that range. For instance, if Sarah measures the length of the statue's base to be 80.2 cm, she might say that the length ranges from 80.15 cm to 80.25 cm, which means that the true length of the statue's base is likely to be within that range. We write this as . The number after the plus-minus sign is called the uncertainty of the measurement. We say that a measuring device is more precise if it has a smaller uncertainty.  Because Sarah's hands were shaking from too much espresso, they got three different results: cm, cm, and cm. When we have multiple measurements of the same quantity, we report the mean of the measurements as the value of the quantity, and we report the standard error of the measurements as the uncertainty of the quantity. The standard error is given by the formula , where is the standard deviation of the measurements, and is the number of measurements. The mean is given by , and the standard deviation is given by . Therefore, the standard error is given by . And so we would report the length of the statue's base as .  Why did the value vary so much? This is because of random errors , which are errors that arise from unpredictable fluctuations in the measurement process. Sarah's shaky hands caused random errors in her measurements, which is why she got highly variable results. Random errors can be reduced by taking more measurements and averaging them, which is what we did to get the mean and standard deviation. Had Sarah taken 30 measurements instead of 3, the standard deviation would have been smaller, and we would have had a more precise measurement of the length of the statue's base.  Sarah, in her hyper-caffeinated state, also misplaced the meter stick. She placed it at an angle from the base of the statue, which led to a larger measurement than the true length of the statue's base. This is an example of a systematic error , which is an error that arises from a consistent bias in the measurement process. Systematic errors cannot be reduced by taking more measurements and averaging them, because they affect all measurements in the same way. To reduce systematic errors, we need to identify the source of the error and correct it. In this case, Sarah could have used a level to make sure that the meter stick was placed horizontally, which would have reduced the systematic error in her measurements.  In an experimental report, it is good practice to report all known sources of error, and to estimate the magnitude of those errors. If we were writing a report on the measurements of the statue's base, we would include a \"Sources of Error\" section, where we would discuss the random errors and systematic errors in our measurements, and we would estimate the magnitude of those errors.    A random error is an error that arises from unpredictable fluctuations in the measurement process. They are reduced by taking more measurements.      A systematic error is an error that arises from a consistent bias in the measurement process. They cannot be reduced by taking more measurements, and they are reduced by identifying the source of the error and correcting it.      You are estimating the height of a window on the second floor of a building by throwing a rock from the window and measuring the time it takes for it to hit the ground using a stopwatch. Then, you use the formula to estimate the height of the window, where is the gravitational acceleration and is the time it takes for the rock to hit the ground. What are some sources of error in this experiment?       One source of error is the random error in the measurement of time using the stopwatch. You are never perfectly precise when you start and stop the stopwatch, so there is an uncertainty in the measurement of time.    Another random error is the initial speed of the rock when you throw it. If you throw the rock with a nonzero initial speed, then the formula is not accurate, because it assumes that the rock is dropped from rest.    A systematic error is the air resistance acting on the rock as it falls. The formula does not take air resistance into account, so it will overestimate the height of the window.         You are estimating the power emitted from a candle by measuring how much it heats up a beaker of water placed above it. You measure the temperature of the water at regular intervals, and you find that the temperature increases by 10 degrees Celsius in 5 minutes. You use the formula to estimate the power emitted from the candle, where is the mass of the water, is a constant (the specific heat capacity of water), is the change in temperature, and is the change in time. What is one systematic error in this experiment? How can you reduce this error?    A systematic error is the heat loss to the surroundings. The formula assumes that all the heat emitted from the candle goes into heating up the water, but in reality, some of the heat will be lost to the surroundings, which will lead to an underestimate of the power emitted from the candle.  To reduce this error, you could place a lid on the beaker to reduce heat loss, or you could perform the experiment in a draft-free environment to minimize heat loss due to air currents.      The relative uncertainty of a measurement is the ratio of the uncertainty to the value of the measurement.      Uncertainty Propagation  The real danger comes when we use our measurements to calculate other quantities. The original uncertainties will propagate through our calculations, and the final result will thus also have an uncertainty. What is the uncertainty of the final result?  In our situation, we can use some formulas to calculate the uncertainty of the final result.  If we are adding two lengths , the uncertainty in is given by , where and are the uncertainties in and , respectively.  If we are multiplying two lengths , the relative uncertainty in is given by .  If we are dividing two lengths , the relative uncertainty in is given by .  If we are raising a length to a power , the relative uncertainty in is given by .    To transport the statue, we need to carry it onto the van using a ramp. The calculations involve determining the kinetic energy of the statue as it moves up the ramp, which is given by , where is the mass of the statue and is its velocity. If the mass of the statue is measured to be kg and its velocity is measured to be m\/s, what is the uncertainty in the kinetic energy of the statue?    The relative uncertainty in the kinetic energy is given by . Therefore, the uncertainty in the kinetic energy is given by .     By the way, there is a general formula for uncertainty propagation, which you can explore if you're proficient in calculus. If we have a function , where are the (independent) measured quantities with uncertainties , then the uncertainty in is given by . This formula can be derived using the Taylor expansion of around the mean values of , and it reduces to the formulas we have given above for addition, multiplication, division, and exponentiation.  To take an example, consider the function . The uncertainty in is given by .    Will it Fit?   Suppose the van door is cm wide, and the statue base is cm wide. Dave needs to know the gap width and its uncertainty.    The gap is cm. The uncertainty is . So the gap is cm. Dave realizes that in the worst case, the gap could be as small as cm dangerously tight for a high-speed extraction.      Representing Data Visually  Dave knows that a single data point is a suggestion, but a graph is a proof. To ensure the getaway van doesn't bottom out under the weight of a bronze physicist, the team conducted a load test. They added mass to the van and measured the compression of the suspension springs.  When we plot data, we almost always plot the relationship between two variables. The independent variable is the variable that we control, and the dependent variable is the variable that we measure.    What are the independent variable and the dependent variable in the load test experiment?    The independent variable is the mass added to the van, and the dependent variable is the compression of the suspension springs.    The independent variable is placed on the horizontal axis, and the dependent variable is placed on the vertical axis. For our experiment, let's call the mass added to the van , and let's call the compression of the suspension springs . Each data point on the graph corresponds to a pair of values. We can denote the data points as , , and so on.   "
},
{
  "id": "subsec-dimensional-analysis-4",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#subsec-dimensional-analysis-4",
  "type": "Checkpoint",
  "number": "1.2.1",
  "title": "",
  "body": "  Sarah (the Engineer) is hyper-caffeinated and scribbling formulas for the winch system, which will be used to pull the statue into the van. She hands Dave, the team leader, a formula for the required power of the winch system: . She argues that the formula makes sense because with more mass and more speed, we need more power.  But Dave, using only his brain, is able to determine that the formula is nonsense, without even looking at the numbers or referencing any physical principles. Do you see the issue?    The dimension of power is , where is the dimension of mass.    The formula given by Sarah has the dimension which is not the dimension of power. So the dimensions of both sides do not match.   "
},
{
  "id": "subsec-dimensional-analysis-5",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#subsec-dimensional-analysis-5",
  "type": "Checkpoint",
  "number": "1.2.2",
  "title": "",
  "body": "  Dave is trying to figure a way to fix Sarah's formula for the power of the winch system. He proposes that , where is a dimensionless constant, and , , and are constants that we need to determine. Can you determine the values of , , and by using dimensional analysis?    This is quite straightforward. The dimension of the right hand side is We want this to match the dimension of power, which is . Therefore, we need to have , , and , which gives us .   "
},
{
  "id": "subsec-dimensional-analysis-7",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#subsec-dimensional-analysis-7",
  "type": "Checkpoint",
  "number": "1.2.3",
  "title": "",
  "body": "  What are the dimensions of ?    The dimension of the left hand side is and the dimension of the right hand side is Therefore, we need to have    "
},
{
  "id": "subsec-uncertainties-and-errors-3",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#subsec-uncertainties-and-errors-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uncertainty precise "
},
{
  "id": "subsec-uncertainties-and-errors-4",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#subsec-uncertainties-and-errors-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mean standard error "
},
{
  "id": "subsec-uncertainties-and-errors-5",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#subsec-uncertainties-and-errors-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "random errors "
},
{
  "id": "subsec-uncertainties-and-errors-6",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#subsec-uncertainties-and-errors-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "systematic error "
},
{
  "id": "def-random-error",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#def-random-error",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "  A random error is an error that arises from unpredictable fluctuations in the measurement process. They are reduced by taking more measurements.   "
},
{
  "id": "def-systematic-error",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#def-systematic-error",
  "type": "Definition",
  "number": "1.2.5",
  "title": "",
  "body": "  A systematic error is an error that arises from a consistent bias in the measurement process. They cannot be reduced by taking more measurements, and they are reduced by identifying the source of the error and correcting it.   "
},
{
  "id": "subsec-uncertainties-and-errors-10",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#subsec-uncertainties-and-errors-10",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "  You are estimating the height of a window on the second floor of a building by throwing a rock from the window and measuring the time it takes for it to hit the ground using a stopwatch. Then, you use the formula to estimate the height of the window, where is the gravitational acceleration and is the time it takes for the rock to hit the ground. What are some sources of error in this experiment?       One source of error is the random error in the measurement of time using the stopwatch. You are never perfectly precise when you start and stop the stopwatch, so there is an uncertainty in the measurement of time.    Another random error is the initial speed of the rock when you throw it. If you throw the rock with a nonzero initial speed, then the formula is not accurate, because it assumes that the rock is dropped from rest.    A systematic error is the air resistance acting on the rock as it falls. The formula does not take air resistance into account, so it will overestimate the height of the window.      "
},
{
  "id": "subsec-uncertainties-and-errors-11",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#subsec-uncertainties-and-errors-11",
  "type": "Checkpoint",
  "number": "1.2.7",
  "title": "",
  "body": "  You are estimating the power emitted from a candle by measuring how much it heats up a beaker of water placed above it. You measure the temperature of the water at regular intervals, and you find that the temperature increases by 10 degrees Celsius in 5 minutes. You use the formula to estimate the power emitted from the candle, where is the mass of the water, is a constant (the specific heat capacity of water), is the change in temperature, and is the change in time. What is one systematic error in this experiment? How can you reduce this error?    A systematic error is the heat loss to the surroundings. The formula assumes that all the heat emitted from the candle goes into heating up the water, but in reality, some of the heat will be lost to the surroundings, which will lead to an underestimate of the power emitted from the candle.  To reduce this error, you could place a lid on the beaker to reduce heat loss, or you could perform the experiment in a draft-free environment to minimize heat loss due to air currents.   "
},
{
  "id": "def-relative-uncertainty",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#def-relative-uncertainty",
  "type": "Definition",
  "number": "1.2.8",
  "title": "",
  "body": "  The relative uncertainty of a measurement is the ratio of the uncertainty to the value of the measurement.   "
},
{
  "id": "subsec-uncertainty-propagation-8",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#subsec-uncertainty-propagation-8",
  "type": "Checkpoint",
  "number": "1.2.9",
  "title": "",
  "body": "  To transport the statue, we need to carry it onto the van using a ramp. The calculations involve determining the kinetic energy of the statue as it moves up the ramp, which is given by , where is the mass of the statue and is its velocity. If the mass of the statue is measured to be kg and its velocity is measured to be m\/s, what is the uncertainty in the kinetic energy of the statue?    The relative uncertainty in the kinetic energy is given by . Therefore, the uncertainty in the kinetic energy is given by .   "
},
{
  "id": "subsec-uncertainty-propagation-9",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#subsec-uncertainty-propagation-9",
  "type": "Remark",
  "number": "1.2.10",
  "title": "",
  "body": " By the way, there is a general formula for uncertainty propagation, which you can explore if you're proficient in calculus. If we have a function , where are the (independent) measured quantities with uncertainties , then the uncertainty in is given by . This formula can be derived using the Taylor expansion of around the mean values of , and it reduces to the formulas we have given above for addition, multiplication, division, and exponentiation.  To take an example, consider the function . The uncertainty in is given by .  "
},
{
  "id": "subsec-uncertainty-propagation-10",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#subsec-uncertainty-propagation-10",
  "type": "Checkpoint",
  "number": "1.2.11",
  "title": "Will it Fit?",
  "body": " Will it Fit?   Suppose the van door is cm wide, and the statue base is cm wide. Dave needs to know the gap width and its uncertainty.    The gap is cm. The uncertainty is . So the gap is cm. Dave realizes that in the worst case, the gap could be as small as cm dangerously tight for a high-speed extraction.   "
},
{
  "id": "subsec-representing-data-visually-3",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#subsec-representing-data-visually-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "independent variable dependent variable "
},
{
  "id": "subsec-representing-data-visually-4",
  "level": "2",
  "url": "sec-dimensions-and-uncertainties.html#subsec-representing-data-visually-4",
  "type": "Checkpoint",
  "number": "1.2.12",
  "title": "",
  "body": "  What are the independent variable and the dependent variable in the load test experiment?    The independent variable is the mass added to the van, and the dependent variable is the compression of the suspension springs.   "
},
{
  "id": "sec-motion-in-one-dimension",
  "level": "1",
  "url": "sec-motion-in-one-dimension.html",
  "type": "Section",
  "number": "2.1",
  "title": "Motion in One Dimension",
  "body": " Motion in One Dimension   Our universe has three spatial dimensions. At least, that's what sane people think; don't ask the string theorists. But for now, let's just consider motion in one dimension. This is a good starting point, and it will allow us to build up our understanding of calculus without dealing with pesky little vectors.    Position  I said in the introduction that the universe has three dimensions. So how can we just consider motion in one dimension? Well, we can just pretend that the van is moving along a straight line, and we can ignore any motion in the other two dimensions. We just work with a subspace of the universe.  Anyways, in one dimension, we essentially treat space as a number line (the real numbers ). The coordinate along this line is a single letter, typically , and it can be positive, negative, or zero. The point at zero is the origin . The choice of origin, as well as which direction is positive, is arbitrary.  But this won't suffice, for there is another parameter that we need to consider: time. We treat time as another number line, with its own coordinate, typically . We usually choose the origin of time to be the moment we start observing the system, so is when we start watching the van. Time only moves forward, so we only consider non-negative values of .  To describe the motion of the van, we need to know its position at each moment in time. We can represent this as a function , which gives the position of the van at time . This function is called the position .   Position as a function of time, graphed as a two-dimensional plot.      Average Velocity  We shall begin with a simple question: how fast is the van moving? Suppose your friend is on the sidewalk, and he takes two pictures of your van, ten seconds apart. He wants to time your van in order to plan the heist, and he thinks that taking pictures is a good way to do that. After looking at the pictures, he tells you that in the first picture, your van is 0 meters from a certain lamppost, and in the second picture, your van is 100 meters from the same lamppost.  Let's now ask the question: if we knew all of this, how much would the van move after twenty seconds?  Of course, the first thing to do is transform this information into a mathematical function. Let's denote the time of the first picture as seconds, and the time of the second picture as seconds. The average velocity between these two times can be calculated as the change in position divided by the change in time.    The average velocity of an object moving in one dimension between times and is given by the formula:     Ooo scary... \"Definition 1.1.2\" doesn't that sound fancy? Well, in this book (or course? Website? Set of notes by someone unqualified to speak on the topic? I don't know what to call it), we will be using a lot of definitions, theorems, and proofs.  On a graph of position over time (when we say over , we mean that is on the vertical axis and is on the horizontal axis), the average velocity between two times is the slope of a line connecting the two points on the graph corresponding to those times. This line is called a secant line .   Average velocity as the slope of the secant line connecting two points on a graph of position as a function of time.    Anyways, let's apply this definition to our problem. We have seconds, seconds, meters, and meters. Plugging these values into the formula, we get .  So, the average velocity of the van between the two pictures is 10 . This means that, on average, the van is moving at a speed of 10 meters per second in the positive direction. However, this doesn't necessarily mean that the van is always moving at 10 ; it could be accelerating or decelerating. The figure below shows three graphs of position as a function of time, all of which have the same average velocity of 10 between and seconds. But they clearly look different (and you certainly wouldn't want to drive a van that looks like the red graph).   Three different graphs of position as a function of time, all with the same average velocity of 10  between and seconds.    Now, let's go back to our original question: how much would the van move after another ten seconds? We can use the average velocity to make a prediction. Let's introduce some notational conventions to make this easier. If the two times we are considering are and , we can denote the time interval as , and the change in position as . With this notation, the formula for average velocity can be rewritten as . Then, it is obvious that we can rearrange this formula to find the change in position: . Therefore, if we assume that the van continues to move at the same average velocity of 10 for another ten seconds, we can calculate the change in position as .    Instantaneous Velocity  You would have to be pretty crazy to drive at a constant speed of 10 (which is about 22 mph) on a highway. In fact, you would be breaking the law, and you would probably get a ticket for driving too slow. But how fast can you drive? How fast are you driving right now?  Notice the subtlety. In the previous example, we were able to calculate the average velocity over a time interval of ten seconds, but we couldn't say anything about the velocity at any specific moment in time. Now, we want to know how fast the van is moving at a specific moment in time, say at seconds. In other words, what does your speedometer say at that moment? This is what we call the instantaneous velocity .   But what does that even mean? How can we define the velocity at a specific moment in time? If, hypothetically speaking, you were to take a picture of the van at exactly seconds, you would see the van at a specific position, but you wouldn't be able to tell how fast it's moving just from that picture (save for motion blur, but let's ignore that for now). So, what does an instantaneous velocity even mean? How can we define it in a way that makes sense? If it seems confusing, don't worry. This exact question challenged the greatest minds in physics for centuries, and it wasn't until the development of calculus that we were able to give a sensible definition of instantaneous velocity. If it does not seem confusing, then you are either a genius or you haven't thought about it deeply enough.   The way we define instantaneous velocity is as follows: take the usual formula for average velocity at some time and some time interval : . Then, as we make the time interval smaller and smaller, we get closer and closer to the instantaneous velocity at time . In the limit as , we define the instantaneous velocity as . Historically, derivatives and integrals were invented by Newton and Leibniz at the same time, but they had different notations for them. Interestingly, limits were not really a thing in the early days of calculus, and they were only formalized later on by Cauchy and others. As per Leibniz's notation, our intuition is that the is replaced by a lowercase , and we write this as . Newton used a dot to denote derivatives with respect to time, so we could also write this as . On a graph of position as a function of time, the instantaneous velocity at a specific time is the slope of the tangent line to the graph at that point (as opposed to the slope of the secant line, which gives the average velocity).    The instantaneous velocity of an object moving in one dimension at time is given by the limit of the average velocity as the time interval approaches zero: .     Instantaneous velocity is the slope of the tangent line to a position-time graph at a specific point.    Note that as the notation suggests, the instantaneous velocity is also a function of time.  It will be important to remember some basic derivatives. If we don't know anything else, we can derive a formula by plugging it into the limit, a process called \"deriving from first principles.\"    Show that for any positive integer .    You will need to use the binomial expansion to expand .    Plugging into the limit gives us . Using the binomial expansion, we can expand as , so . Let's write the first few terms of the sum explicitly; . The cancels out, and we can factor out a from the remaining terms in the numerator: . Now we can cancel the in the numerator and denominator: . Finally, as , all the terms with a factor of go to zero, and we are left with .    Now what about the reverse? If we know the instantaneous velocity as a function of time, can we find how much the van has moved after a certain amount of time? The answer is yes, and this is where integrals come into play.  Indeed, suppose you, on the van, have a speedometer that gives you the instantaneous velocity at each moment in time. Take a video of the speedometer for ten seconds, and then analyze the video to find the velocity at each frame. Suppose each frame has a time interval of seconds, and you find the velocity at each frame, denoted as for the time of the -th frame. Then, during that frame, the van moves approximately meters. If you sum this up for all the frames, you get an approximation of how much the van has moved in those ten seconds: .  Now, just like before, we make the time interval smaller and smaller, and we get closer and closer to the actual displacement traveled by the van. In the limit as , once again, the is replaced by a lowercase . The sigma notation for the sum is replaced by a stretchy S, and we get a formula for the displacement traveled by the van from time to time , in the following theorem.   Fundamental Theorem of Calculus for One-Dimensional Kinematics   The displacement of an object moving in one dimension from time to time can be calculated by integrating the instantaneous velocity over that time interval: .    As there are infinite time intervals, we can't index them with a finite index like , so we use a dummy variable of integration, which means that it is a placeholder that spans all the values of time between and .  By the way, it is important to distinguish between the displacement and the total distance traveled by the van. The displacement is the change in position. In other words, final position minus initial position, regardless of the path taken. The total distance traveled, on the other hand, is the length of the path taken by the van, which can be greater than or equal to the displacement.  In other words, if you were to let a van drive in a circle and return to its starting point, the displacement would be zero, but the total distance traveled would be the circumference of the circle.  Okay. I'm sorry if this was so dry. Back to storytime in the next section.    Acceleration  The crew has successfully stolen the statue and is now driving it back to their university. The car contains the driver and three passengers, who are all very excited about the heist. In addition to the statue, they also have a cooler full of beer, and a bunch of meter sticks for some reason. The driver let's call him Dave is cruising at a constant speed of 10 on the highway, and everyone in the van is feeling pretty good. (In fact, thanks to Galilean relativity, as long as the windows are rolled up and the suspension isn't terrible, they might as well be sitting still in a parking lot. You don't actually feel velocity.)  But then, a flashlight appears in the rearview mirror. It's campus security! They are chasing the van, and they are getting closer and closer. Dave steps on the gas pedal, and the van starts accelerating. Now, everyone in the van feels like they are being pushed back into their seats. That feeling of being shoved back into your seat? That is not velocity. That is a change in velocity. And in physics, a change in velocity over time is called acceleration .    The average acceleration of an object moving in one dimension between times and is given by the change in velocity divided by the change in time:      Let's look at the units again. If velocity is measured in meters per second (m\/s), and we divide that by time in seconds (s), we get meters per second per second. We usually write this as , or more commonly as . It sounds weird, but it just means \"how many meters per second of speed you are gaining every single second.\" There are units that are far more cursed, by the way. Just ask a chemist.   Just like with velocity, knowing the average acceleration over a ten-second panic attack isn't always enough. We want to know exactly how hard the minivan is accelerating at the exact moment Dave's foot hits the floorboard. We need the instantaneous acceleration .    The instantaneous acceleration of an object moving in one dimension at time is given by the limit of the average acceleration as the time interval approaches zero: .    But wait, there's more! Since velocity itself is the derivative of position ( ), acceleration is the derivative of the derivative of position. We call this the second derivative, and we write it like this:   Newton's dot notation is actually quite popular for second derivatives in mechanics, so get used to seeing those two little dots over the .  Dave is now speeding at thirty meters per second. Suddenly, a family of raccoons walks into the road. While he is a terrible gateway driver, he loves animals, so he slams on the brakes to avoid hitting them. The van lurches again, and everyone in the van feels like they are being thrown forward.  While in everyday language we might say that the van is \"decelerating,\" in physics, we just say that the acceleration is negative.    Constant Acceleration  Let's assess the situation. The minivan is moving at (that's the initial velocity). A family of raccoons is crossing the road exactly 50 meters ahead of them. Dave has slammed on the brakes, causing the minivan to accelerate in the opposite direction of its motion.  Physics isn't just about describing what is happening right now. We want to predict the future, preferably with an accuracy exceeding that of a fortune teller. We need to know: will the minivan stop before it hits the raccoons?  To solve this, we are going to make a classic physicist assumption. We are going to assume that the minivan's acceleration is constant . In reality, a car's braking acceleration changes depending on tire temperature, the road surface, and how hard Dave is mashing his foot into the floor mat. But assuming a constant, average acceleration makes the calculus incredibly clean, and it usually gets us close enough to the right answer. Let's assume the brakes provide a constant acceleration of -10 .  Since is just a constant number now, we can pull it out of our integrals. This allows us to derive a set of four magical formulas that govern all motion with constant acceleration. We call them the Kinematic Equations, or SUVAT equations, or the Big Four, or the Holy Grail of Kinematics, or whatever you want to call them.   Kinematic Equations for Constant Acceleration in One Dimension   For an object moving in one dimension with constant acceleration , initial velocity , and initial position , the following equations hold:     The first equation can be derived by integrating the acceleration: . The second equation can be derived by integrating the velocity: . The third equation can be derived by eliminating time from the first two equations. From the first equation, we have . Substituting this into the second equation gives us . Simplifying this expression yields the third equation: . The fourth equation can be derived by eliminating acceleration from the first two equations. From the first equation, we have . Substituting this into the second equation gives us . Simplifying this expression yields the fourth equation: .    We finally have the tools to predict the future. Let's use Equation 3, because we know Dave's initial velocity ( ), we know his final velocity needs to be zero to avoid a tragedy ( ), and we assumed his braking acceleration is . We want to find the stopping distance, . Just doing some algebra, we obtain   The raccoons are 50 meters away. The minivan screeches to a halt exactly 5 meters in front of them. The 500 kg bronze statue of Richard Feynman shifts heavily in the back but stays put. Dave lets out a breath he didn't know he was holding.  Physics saves the day. But they are still on campus, and the security guards have definitely heard the screeching tires. You hear the sound of things being thrown. You look back, and you see the security guards chasing after the van, throwing lemons at it.   "
},
{
  "id": "subsec-position-2",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#subsec-position-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subspace "
},
{
  "id": "subsec-position-3",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#subsec-position-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "origin "
},
{
  "id": "subsec-position-5",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#subsec-position-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "position "
},
{
  "id": "xt-function",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#xt-function",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " Position as a function of time, graphed as a two-dimensional plot.   "
},
{
  "id": "subsec-average-velocity-4",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#subsec-average-velocity-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "average velocity "
},
{
  "id": "def-average-velocity-1d",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#def-average-velocity-1d",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "  The average velocity of an object moving in one dimension between times and is given by the formula:    "
},
{
  "id": "subsec-average-velocity-7",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#subsec-average-velocity-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "secant line "
},
{
  "id": "xt-secant-line",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#xt-secant-line",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": " Average velocity as the slope of the secant line connecting two points on a graph of position as a function of time.   "
},
{
  "id": "xt-graphs",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#xt-graphs",
  "type": "Figure",
  "number": "2.1.4",
  "title": "",
  "body": " Three different graphs of position as a function of time, all with the same average velocity of 10  between and seconds.   "
},
{
  "id": "subsec-instantaneous-velocity-3",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#subsec-instantaneous-velocity-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "instantaneous velocity "
},
{
  "id": "subsec-instantaneous-velocity-4",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#subsec-instantaneous-velocity-4",
  "type": "Remark",
  "number": "2.1.5",
  "title": "",
  "body": " But what does that even mean? How can we define the velocity at a specific moment in time? If, hypothetically speaking, you were to take a picture of the van at exactly seconds, you would see the van at a specific position, but you wouldn't be able to tell how fast it's moving just from that picture (save for motion blur, but let's ignore that for now). So, what does an instantaneous velocity even mean? How can we define it in a way that makes sense? If it seems confusing, don't worry. This exact question challenged the greatest minds in physics for centuries, and it wasn't until the development of calculus that we were able to give a sensible definition of instantaneous velocity. If it does not seem confusing, then you are either a genius or you haven't thought about it deeply enough.  "
},
{
  "id": "def-instantaneous-velocity-1d",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#def-instantaneous-velocity-1d",
  "type": "Definition",
  "number": "2.1.6",
  "title": "",
  "body": "  The instantaneous velocity of an object moving in one dimension at time is given by the limit of the average velocity as the time interval approaches zero: .   "
},
{
  "id": "xt-secant-to-tangent",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#xt-secant-to-tangent",
  "type": "Figure",
  "number": "2.1.7",
  "title": "",
  "body": " Instantaneous velocity is the slope of the tangent line to a position-time graph at a specific point.   "
},
{
  "id": "subsec-instantaneous-velocity-10",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#subsec-instantaneous-velocity-10",
  "type": "Checkpoint",
  "number": "2.1.8",
  "title": "",
  "body": "  Show that for any positive integer .    You will need to use the binomial expansion to expand .    Plugging into the limit gives us . Using the binomial expansion, we can expand as , so . Let's write the first few terms of the sum explicitly; . The cancels out, and we can factor out a from the remaining terms in the numerator: . Now we can cancel the in the numerator and denominator: . Finally, as , all the terms with a factor of go to zero, and we are left with .   "
},
{
  "id": "thm-ftoc-1d-kinematics",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#thm-ftoc-1d-kinematics",
  "type": "Theorem",
  "number": "2.1.9",
  "title": "Fundamental Theorem of Calculus for One-Dimensional Kinematics.",
  "body": " Fundamental Theorem of Calculus for One-Dimensional Kinematics   The displacement of an object moving in one dimension from time to time can be calculated by integrating the instantaneous velocity over that time interval: .   "
},
{
  "id": "subsec-acceleration-3",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#subsec-acceleration-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "acceleration "
},
{
  "id": "def-average-acceleration-1d",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#def-average-acceleration-1d",
  "type": "Definition",
  "number": "2.1.10",
  "title": "",
  "body": "  The average acceleration of an object moving in one dimension between times and is given by the change in velocity divided by the change in time:    "
},
{
  "id": "subsec-acceleration-5",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#subsec-acceleration-5",
  "type": "Remark",
  "number": "2.1.11",
  "title": "",
  "body": " Let's look at the units again. If velocity is measured in meters per second (m\/s), and we divide that by time in seconds (s), we get meters per second per second. We usually write this as , or more commonly as . It sounds weird, but it just means \"how many meters per second of speed you are gaining every single second.\" There are units that are far more cursed, by the way. Just ask a chemist.  "
},
{
  "id": "subsec-acceleration-6",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#subsec-acceleration-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "instantaneous acceleration "
},
{
  "id": "def-instantaneous-acceleration-1d",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#def-instantaneous-acceleration-1d",
  "type": "Definition",
  "number": "2.1.12",
  "title": "",
  "body": "  The instantaneous acceleration of an object moving in one dimension at time is given by the limit of the average acceleration as the time interval approaches zero: .   "
},
{
  "id": "subsec-constant-acceleration-4",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#subsec-constant-acceleration-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constant "
},
{
  "id": "thm-suvat",
  "level": "2",
  "url": "sec-motion-in-one-dimension.html#thm-suvat",
  "type": "Theorem",
  "number": "2.1.13",
  "title": "Kinematic Equations for Constant Acceleration in One Dimension.",
  "body": " Kinematic Equations for Constant Acceleration in One Dimension   For an object moving in one dimension with constant acceleration , initial velocity , and initial position , the following equations hold:     The first equation can be derived by integrating the acceleration: . The second equation can be derived by integrating the velocity: . The third equation can be derived by eliminating time from the first two equations. From the first equation, we have . Substituting this into the second equation gives us . Simplifying this expression yields the third equation: . The fourth equation can be derived by eliminating acceleration from the first two equations. From the first equation, we have . Substituting this into the second equation gives us . Simplifying this expression yields the fourth equation: .   "
},
{
  "id": "sec-motion-in-two-dimensions",
  "level": "1",
  "url": "sec-motion-in-two-dimensions.html",
  "type": "Section",
  "number": "2.2",
  "title": "Motion in Two Dimensions",
  "body": " Motion in Two Dimensions   Dave's quick thinking (and our convenient constant acceleration assumption) saved the raccoons. But the screeching tires echoed across the quad, and now, flashing yellow lights appear in the rearview mirror. It is the Campus Security Night Patrol, riding in a heavily modified, gas-powered golf cart.  Dave floors it again, keeping the minivan moving strictly in one dimension down the perfectly straight, infinitely long campus perimeter road. But the security guards are not playing by 1D rules. The guard in the passenger seat of the golf cart reaches into a crate of stolen dining hall fruit, winds up, and hurls a lemon at the minivan.  We have officially entered two dimensions. Domain expansion. To figure out if Dave's minivan is about to get juiced, we need to understand projectile motion.    Introducing the Vector  Up until now, our velocity has just been a number with a plus or minus sign, because Dave could only go forward or backward. But the guard didn't throw the lemon straight forward or straight up. He threw it at an angle.  Our coordinate system is two-dimensional. This means that there are two directions that we can move in, and thus, we need two numbers to specify the position of an object. Importantly, the horizontal motion and the vertical motion are completely independent. They happen at the same time, but they do not affect one another.  This means that we can assign two separate functions to describe the horizontal and vertical motion of the lemon. We can call these functions and , and they will give us the horizontal and vertical position of the lemon at any time . A combination of these will trace out a curve in the -plane, which is the path of the lemon. The equations that trace out this curve are called the parametric equations of the curve.  Let's suppose we draw an arrow from the origin to the position of the lemon at any time . This arrow is called the position vector of the lemon, and it is denoted by . It is analogous to the position number we had in one dimension, but now its direction is important, so it is a vector a quantity that has both magnitude and direction (for now).  Suppose, for a moment, the lemon is in the air at some time . If you were able to freeze time and look at the lemon, you would be able to measure the components of the position vector, and . Remember the meter sticks in the van? You could use those to measure how far the lemon is from the origin in the horizontal and vertical directions. In fact, for convenience, let the meter stick in the direction be a vector, say , that points in the positive direction and has a length of one meter. Similarly, let the meter stick in the direction be a vector, say , that points in the positive direction and has a length of one meter. Then, we can write the position vector as a linear combination of these two unit vectors: .  When we visualize the position vector, we can draw a curve in the -plane that traces out the path of the lemon. Note that this is NOT the same as the -graph that we used in one dimension, although both graphs seem to be two-dimensional. On the -graph, the horizontal axis is time, and the vertical axis is position. This means that as we move to the right, we are moving forward in time. On the -graph, the horizontal axis is the horizontal position, and the vertical axis is the vertical position. This means that as we move to the right, we are moving to the right in space , not forward in time.  Indeed, on the -graph, the curve is a physical thing that exists in space. Time is not explicitly represented on the graph, but it is implicitly represented by the fact that as time passes, the position vector traces out the curve. In other words, you would have to magically play a video of the lemon's motion in order to see the motion of the lemon on the -graph. Or you can drop points on the curve at regular time intervals to see how the position changes as time passes. If the points are more dense in some region of the curve, that means the lemon is moving slower in that region, and vice versa. On the -graph, no such magic is needed. The motion of the lemon is directly represented on the graph, and you can see how the position changes as time passes just by looking at the graph.  If we have a position vector, there must be a velocity vector and an acceleration vector. How do we differentiate a vector-valued function? Since the horizontal and vertical motions are independent, we can just differentiate the components separately: where and are the horizontal and vertical components of the velocity. We can now define the instantaneous velocity and acceleration of the lemon.   Instantaneous Velocity   The instantaneous velocity of an object at a given time is the limit of the average velocity as the time interval approaches zero: .     Instantaneous Acceleration   The instantaneous acceleration of an object at a given time is the limit of the average acceleration as the time interval approaches zero: .    It may prove insightful to consider how we visualize these derivatives. For a scalar function, the derivative at a point is the slope of the tangent line to the curve at that point. We can't use the same idea for a vector-valued function. On one hand, we can still decompose the position vector into its components which are scalar functions of time and take the derivative of each component separately. Then, each component of the velocity vector is the slope of the tangent line to the corresponding component of the position vector.  On the other hand, if we trace out the curve of the position vector in the -plane, we can draw a tangent line to the curve at any point. Now, our velocity, which is a vector, is tangent to the curve at that point. Its magnitude corresponds to how fast we are moving along the curve.    Projectile Motion  Let's return to the problem at hand: the lemon being thrown at the minivan. We want to know if the lemon will hit the minivan, which is moving along the horizontal axis.    Suppose the lemon is thrown from the origin at time with an initial speed of at an angle of above the horizontal. What are the components of the initial velocity vector, and ?    The components are .    Now that we have the initial velocity, we also need to know the acceleration of the lemon in order to determine its trajectory. The only force acting on the lemon is gravity, which acts downward with a magnitude of . This means that the acceleration of the lemon is . Its components are thus .  We can now use the initial velocity and the acceleration to find the velocity and position of the lemon at any time . Since the horizontal and vertical motions are independent, we can treat them separately, the same way we did in one dimension. The horizontal motion is simple: since there is no acceleration, the horizontal velocity is constant (so the same as the initial horizontal velocity), and the horizontal position is   The vertical motion is also simple, we just use with the appropriate initial conditions: .  In vector form, the trajectory of the lemon is given by .  This equation describes the parabolic trajectory of most projectiles near the surface of the Earth, as long as we can ignore air resistance and other forces.    Will the Lemon Hit?  Suppose the minivan is located at a horizontal distance meters from the origin, and a vertical height meters from the release point of the lemon. We want to know if there is an angle such that the lemon will go through the window of the minivan. In other words, we want to know if there is a solution to the equation . To solve this equation, we can equate the components of the position vector to the components of the target position, giving us the system of equations . Notice: our problem is purely geometric, and the time variable is just a parameter that we can eliminate. As such, we can solve for in the first equation; , and substitute this into the second equation to get an equation for .  This only has real solutions if . To see the derivation, consult in the exercises section.  We know that the minivan is located at meters and meters, so the condition for the lemon to hit the minivan is , which is about 31 miles per hour. If the guard can throw the lemon at that speed, then there will be two angles at which the lemon will hit the minivan.    Derivative Rules  Before proceeding, let's take a moment to derive some useful rules for differentiating vector-valued functions.  As the security guards, riding in the golf cart, are throwing lemons frantically at us, one of the lemons got snagged by a tree branch, which caused the lemon to swing back and forth like a pendulum. The motion of the lemon can be described by the equation .    Using first-principles, derive an expression for the angular velocity of the lemon, .    You might want to use the trigonometric identity to simplify the expression you get after plugging into the limit.    Using the definition of the derivative, we have . Using the trigonometric identity , we can rewrite the numerator as . Therefore, we have . As , we have and , so we get .    The above was a straightforward application of the definition of the derivative, but it was quite tedious. Indeed, if we had to find every derivative using first-principles, we would literally never get anything done. In physics, we like to at least pretend that we are doing anything other than math, so we need some shortcuts for finding derivatives.  Notice the pattern in the above solution: we took the derivative of an expression consisting of an outer function (in this case, the cosine function) and an inner function (in this case, the linear function of time, ), and we ended up with the derivative of the outer function (which is ) multiplied by the derivative of the inner function (which is ). Is this just a coincidence, or is there some deeper reason for this pattern? See the next two exercises for the answer.    Show that more generally, if the trajectory of an object is given by , then the velocity of the object is given by .    Using the definition of the derivative, we have . We can add and subtract in the numerator to get . Notice that the first fraction is the definition of the derivative of with respect to , and the second fraction is the definition of the derivative of with respect to . Therefore, as , the first fraction approaches and the second fraction approaches , so we get .      The statement of the previous exercise is known as the chain rule, and it is one of the most important rules of differentiation. Can you explain why the chain rule makes intuitive sense?    Suppose we want to find out how much changes when we change . Since changes when we change , we know that changes by when we change by . But since changes when we change , we know that changes by when we change by . Therefore, when we change , changes by , which means that the rate of change of with respect to is .    The chain rule allows us to differentiate compositions of functions without having to go back to first-principles every time. What about products of functions? For example, if we have a rectangle with length and width , how do we find the rate of change of the area of the rectangle, which is given by ?    Now suppose we have a rectangle with length and width , where both are functions of time. Can you derive an expression for the rate of change of the area of the rectangle with respect to time, i.e., ?    Draw the rectangle out. If you increase both the length and the width by a small amount, how much does the area increase by?    If we increase the length by a small amount and the width by a small amount , then the area increases by . Dividing both sides by and taking the limit as , we get .      Polar Coordinates and Uniform Circular Motion  Fortunately, the guard is not a professional athlete, and the lemon is not going to hit the minivan. The lemon splatters harmlessly against the pavement behind them. Dave has successfully navigated the 1D perimeter road, but the flashing lights of the security golf cart are still in the rearview mirror.  \"Hang on!\" Dave yells. He yanks the steering wheel to the left, and the minivan screeches into the infamous \"Founder's Quad Traffic Circle\" a massive, perfectly circular roundabout that has claimed the hubcaps of countless freshmen. Inside the van, absolute chaos ensues. Even though Dave is keeping the speedometer pegged at a constant 15 m\/s, everyone is violently shoved against the right-hand doors. In the back, the 500 kg bronze statue of Richard Feynman groans and begins to slide across the carpet.  Wait a minute. If Dave's speed is constant, why is everyone feeling an acceleration? The short answer is that the direction of the velocity is changing, even though its magnitude is not. For a fuller understanding, we need to introduce a new coordinate system that is more natural for circular motion: polar coordinates.  In our usual ( Cartesian ) coordinate system, we specify the position of an object by giving its horizontal and vertical coordinates, and . We don't have to forsake Cartesian coordinates to describe circular motion. We could describe the van using a messy conglomeration of sines and cosines. But think about Dave's perspective. When he looks out the windshield, he doesn't care about his -coordinate. He only cares about two things: \"Am I going forward?\" and \"Am I turning the wheel?\" So, let's invent a coordinate system that rides inside the minivan with Dave.  A coordinate system specifies (1) the origin point, (2) the directions of the axes, (3) which direction is positive, and (4) unit vectors that point in the positive directions of the axes. The origin remains the same in polar coordinates, but the unit vectors are different. The tangential vector , , points in the direction of motion, and the radial vector , , points from the origin to the position of the object. The tangential vector is positive in the direction of motion, and the radial vector is positive in the outward direction.  In Cartesian coordinates, and are constant unit vectors that point in the same direction at all times. In polar coordinates, and are not constant. Their directions change as the object moves around the circle.  At a given point, the polar unit vectors can be expressed in terms of the Cartesian unit vectors as . From this, it is clear that they depend on the position (specifically, the angle ). The Cartesian unit vectors can also be expressed in terms of the polar unit vectors as .  If the polar unit vectors depend on the position, then they also depend on time, since the position depends on time. The natural question is, then, what are the derivatives of the polar unit vectors?    The derivatives of the polar unit vectors are given by .    Here I will present a more visual derivation. A more rigorous derivation is in the exercises section.    As we speak, the minivan is moving around the traffic circle at a constant speed of 15 m\/s. Let's begin by stating the position of the van in polar coordinates: , where is the radius of the traffic circle, and is the radial unit vector that points from the center of the circle to the position of the van at time .  The velocity of the van is the derivative of the position: . The velocity points in the tangential direction, which makes sense since the van is moving around the circle. The term is called the angular velocity , and it is the rate at which the angle changes with respect to time. It is denoted by (Greek letter omega ), so we can write the velocity as . Note that this is only applicable if is constant! If the van were moving in a spiral, then would not be constant, and we would have to use the product rule to find the velocity: .  Next, we can find the acceleration of the van by taking the derivative of the velocity. For uniform circular motion, we have . The first term is zero, since the angular velocity is constant (\"uniform\" circular motion). So .  So this is it! There is an acceleration, even though the speed is constant, because the direction of the velocity, , is changing. This is why everyone in the van is feeling an acceleration, even though the speedometer is pegged at 15 m\/s. This is why the statue of Feynman is sliding across the carpet.  When discussing circular motion, it is very convenient to disregard the radius, and only discuss the angular displacement , the angular velocity , and the angular acceleration  . Mathematically speaking, they are very similar to their linear counterparts, but they have different units and different physical interpretations. In fact, under constant angular acceleration, the equations of motion for angular displacement, velocity, and acceleration are exactly the same:     The van continues to move around the traffic circle at a constant speed of 15 m\/s. The traffic circle has a radius of 15 meters. How long does it take for the van to complete one full revolution around the circle? This quantity is called the period of the motion, and it is denoted by .    The angular velocity of the van is given by .  To complete one full revolution, the van needs to go through an angular displacement of radians. Since the angular velocity is constant, we can use the equation to find the time it takes to complete one full revolution. Substituting in the values, we get .    Following the exercise above, we can define a few quantities that are commonly used in circular motion.   Quantities in Circular Motion   The period of a motion is the time it takes to complete one full cycle of the motion. It is denoted by .  The frequency of a motion is the number of cycles completed per unit time, .     "
},
{
  "id": "subsec-the-vector-4",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#subsec-the-vector-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parametric equations "
},
{
  "id": "subsec-the-vector-5",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#subsec-the-vector-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "position vector "
},
{
  "id": "def-instantaneous-velocity",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#def-instantaneous-velocity",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Instantaneous Velocity.",
  "body": " Instantaneous Velocity   The instantaneous velocity of an object at a given time is the limit of the average velocity as the time interval approaches zero: .   "
},
{
  "id": "def-acceleration",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#def-acceleration",
  "type": "Definition",
  "number": "2.2.2",
  "title": "Instantaneous Acceleration.",
  "body": " Instantaneous Acceleration   The instantaneous acceleration of an object at a given time is the limit of the average acceleration as the time interval approaches zero: .   "
},
{
  "id": "subsec-projectile-motion-3",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#subsec-projectile-motion-3",
  "type": "Checkpoint",
  "number": "2.2.3",
  "title": "",
  "body": "  Suppose the lemon is thrown from the origin at time with an initial speed of at an angle of above the horizontal. What are the components of the initial velocity vector, and ?    The components are .   "
},
{
  "id": "subsec-derivative-rules-4",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#subsec-derivative-rules-4",
  "type": "Checkpoint",
  "number": "2.2.4",
  "title": "",
  "body": "  Using first-principles, derive an expression for the angular velocity of the lemon, .    You might want to use the trigonometric identity to simplify the expression you get after plugging into the limit.    Using the definition of the derivative, we have . Using the trigonometric identity , we can rewrite the numerator as . Therefore, we have . As , we have and , so we get .   "
},
{
  "id": "subsec-derivative-rules-7",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#subsec-derivative-rules-7",
  "type": "Checkpoint",
  "number": "2.2.5",
  "title": "",
  "body": "  Show that more generally, if the trajectory of an object is given by , then the velocity of the object is given by .    Using the definition of the derivative, we have . We can add and subtract in the numerator to get . Notice that the first fraction is the definition of the derivative of with respect to , and the second fraction is the definition of the derivative of with respect to . Therefore, as , the first fraction approaches and the second fraction approaches , so we get .   "
},
{
  "id": "subsec-derivative-rules-8",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#subsec-derivative-rules-8",
  "type": "Checkpoint",
  "number": "2.2.6",
  "title": "",
  "body": "  The statement of the previous exercise is known as the chain rule, and it is one of the most important rules of differentiation. Can you explain why the chain rule makes intuitive sense?    Suppose we want to find out how much changes when we change . Since changes when we change , we know that changes by when we change by . But since changes when we change , we know that changes by when we change by . Therefore, when we change , changes by , which means that the rate of change of with respect to is .   "
},
{
  "id": "subsec-derivative-rules-10",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#subsec-derivative-rules-10",
  "type": "Checkpoint",
  "number": "2.2.7",
  "title": "",
  "body": "  Now suppose we have a rectangle with length and width , where both are functions of time. Can you derive an expression for the rate of change of the area of the rectangle with respect to time, i.e., ?    Draw the rectangle out. If you increase both the length and the width by a small amount, how much does the area increase by?    If we increase the length by a small amount and the width by a small amount , then the area increases by . Dividing both sides by and taking the limit as , we get .   "
},
{
  "id": "subsec-polar-coordinates-5",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#subsec-polar-coordinates-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cartesian "
},
{
  "id": "subsec-polar-coordinates-6",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#subsec-polar-coordinates-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangential vector radial vector "
},
{
  "id": "thm-derivatives-of-polar-vectors",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#thm-derivatives-of-polar-vectors",
  "type": "Theorem",
  "number": "2.2.8",
  "title": "",
  "body": "  The derivatives of the polar unit vectors are given by .    Here I will present a more visual derivation. A more rigorous derivation is in the exercises section.   "
},
{
  "id": "subsec-polar-coordinates-12",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#subsec-polar-coordinates-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "angular velocity "
},
{
  "id": "subsec-polar-coordinates-15",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#subsec-polar-coordinates-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "angular acceleration "
},
{
  "id": "subsec-polar-coordinates-16",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#subsec-polar-coordinates-16",
  "type": "Checkpoint",
  "number": "2.2.9",
  "title": "",
  "body": "  The van continues to move around the traffic circle at a constant speed of 15 m\/s. The traffic circle has a radius of 15 meters. How long does it take for the van to complete one full revolution around the circle? This quantity is called the period of the motion, and it is denoted by .    The angular velocity of the van is given by .  To complete one full revolution, the van needs to go through an angular displacement of radians. Since the angular velocity is constant, we can use the equation to find the time it takes to complete one full revolution. Substituting in the values, we get .   "
},
{
  "id": "def-circular-motion-quantities",
  "level": "2",
  "url": "sec-motion-in-two-dimensions.html#def-circular-motion-quantities",
  "type": "Definition",
  "number": "2.2.10",
  "title": "Quantities in Circular Motion.",
  "body": " Quantities in Circular Motion   The period of a motion is the time it takes to complete one full cycle of the motion. It is denoted by .  The frequency of a motion is the number of cycles completed per unit time, .   "
},
{
  "id": "sec-kinematics-summary",
  "level": "1",
  "url": "sec-kinematics-summary.html",
  "type": "Section",
  "number": "2.3",
  "title": "Summary",
  "body": " Summary  Every chapter in this book has a summary section. This section is meant to be a concise summary of the main points covered in the chapter.     Motion is described by functions of time. In one dimension, the position function is , and in multiple dimensions, the position function is a vector function .    The average velocity between two times and is the change in position divided by the change in time,     The instantaneous velocity is defined by taking the limit as the change in time goes to zero, .    The velocity is the derivative of the position, , and the acceleration is the derivative of the velocity, .    Under constant acceleration, a set of four kinematic equations can be derived:     Vectors can be expressed in different coordinate systems, such as Cartesian coordinates and polar coordinates. In polar coordinates, the unit vectors are changing with time, so we have to use the product rule of differentiation when taking derivatives of vectors in polar coordinates. These derivatives are described in .    In circular motion, even if the speed is constant, there is still an acceleration because the direction of the velocity is changing.    Uniform circular motion is a special case of circular motion where the angular velocity is constant. In uniform circular motion of radius and angular velocity , the acceleration is .     "
},
{
  "id": "sec-kinematics-problems",
  "level": "1",
  "url": "sec-kinematics-problems.html",
  "type": "Exercises",
  "number": "2.4",
  "title": "Additional Problems",
  "body": " Additional Problems    Prove .    Switch back to Cartesian coordinates and use the product rule of differentiation. Then, switch back to polar coordinates and use the definitions of the unit vectors in terms of Cartesian coordinates.     , and similarly, .     The USB throw   It is 11:58 PM, and your group project is due at midnight. The campus Wi-Fi has crashed, so you have loaded the final project onto a USB flash drive. You are standing outside your partner's dorm, trying to throw the flash drive through their slightly open window.  The window is located at a horizontal distance and a vertical height from the release point of your hand. You can throw the drive with a set initial speed . Now you just need the perfect angle .     Construct an expression for the trajectory of the flash drive, , in terms of , , and the acceleration due to gravity .    This trigonometric identity will come in handy: .    Begin with the standard equations for projectile motion, . Then isolate in the first equation and substitute it into the second equation to get an expression for in terms of .    Solving for in the first equation gives us . Substituting this into the second equation gives us . Finally, using the trigonometric identity, we can rewrite this as , which is a quadratic function of .      Under what conditions on , , and will there be a solution for such that the flash drive goes through the window?    The discriminant of a quadratic equation must be non-negative for there to be a real solution.    First, the equation we need to solve is . Plugging in the expression for gives us . The discriminant of is , so in our case, the discriminant is . Therefore, there will be a solution for if and only if . Rearranging this inequality gives us . Most likely, this will not be zero, meaning there will be two distinct solutions for . If this seems confusing, graph for the two solutions (given some specific values of , , and ) to see how the two parabolas both pass through the point .      Come up with one set of parameters such that there's only one angle that reaches the window, regardless of the initial speed.    There will be only one angle if the discriminant is zero, i.e., . If we factor out , we get . One obvious way to satisfy this equation is to set , which means the window is directly above the release point of your hand. Another way to satisfy this equation is to set the expression in the brackets equal to zero, which gives us . This gives us a relationship between , , and such that there will be only one angle that reaches the window.       A string quartet is rehearsing in a practice room on campus. The violist, as always, forgot their rosin, so they decide to borrow some from the violinist. Assuming the violinist throws the rosin with an initial speed of at an angle of , what's the ideal angle that maximizes the horizontal distance traveled by the rosin?    You may need to use the double angle formula for sine .    We need to find the horizontal distance traveled by the rosin. When it arrives, the height is zero, so we can set . This gives us two solutions for : (when the rosin is released) and (when the rosin lands). Plugging the latter solution into the equation for horizontal position gives us . The maximum value of is 1, which occurs when , so the ideal angle to throw the rosin is .      Suppose the van in our storyline was allowed to drive radially and tangentially in the \"Founder's Quad Traffic Circle\". Recall that in polar coordinates, the position of the van is given by , where is the distance from the center of the traffic circle and is the unit vector pointing radially outward from the center of the traffic circle. Show that the acceleration of the van can be written as . One of these terms is the centripetal acceleration, which is responsible for keeping the van moving in a circle. The other is called the coriolis acceleration , which is responsible for the van's tendency to \"slide outward\" when it tries to turn.    This is just brute force differentiation, using the product rule and the results from . First, we compute the velocity of the van: . Then the acceleration is     "
},
{
  "id": "sec-kinematics-problems-2",
  "level": "2",
  "url": "sec-kinematics-problems.html#sec-kinematics-problems-2",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "",
  "body": "  Prove .    Switch back to Cartesian coordinates and use the product rule of differentiation. Then, switch back to polar coordinates and use the definitions of the unit vectors in terms of Cartesian coordinates.     , and similarly, .   "
},
{
  "id": "ex-the-usb-throw-3",
  "level": "2",
  "url": "sec-kinematics-problems.html#ex-the-usb-throw-3",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "",
  "body": "  Construct an expression for the trajectory of the flash drive, , in terms of , , and the acceleration due to gravity .    This trigonometric identity will come in handy: .    Begin with the standard equations for projectile motion, . Then isolate in the first equation and substitute it into the second equation to get an expression for in terms of .    Solving for in the first equation gives us . Substituting this into the second equation gives us . Finally, using the trigonometric identity, we can rewrite this as , which is a quadratic function of .   "
},
{
  "id": "ex-the-usb-throw-4",
  "level": "2",
  "url": "sec-kinematics-problems.html#ex-the-usb-throw-4",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "",
  "body": "  Under what conditions on , , and will there be a solution for such that the flash drive goes through the window?    The discriminant of a quadratic equation must be non-negative for there to be a real solution.    First, the equation we need to solve is . Plugging in the expression for gives us . The discriminant of is , so in our case, the discriminant is . Therefore, there will be a solution for if and only if . Rearranging this inequality gives us . Most likely, this will not be zero, meaning there will be two distinct solutions for . If this seems confusing, graph for the two solutions (given some specific values of , , and ) to see how the two parabolas both pass through the point .   "
},
{
  "id": "ex-the-usb-throw-5",
  "level": "2",
  "url": "sec-kinematics-problems.html#ex-the-usb-throw-5",
  "type": "Exercise",
  "number": "2.4.4",
  "title": "",
  "body": "  Come up with one set of parameters such that there's only one angle that reaches the window, regardless of the initial speed.    There will be only one angle if the discriminant is zero, i.e., . If we factor out , we get . One obvious way to satisfy this equation is to set , which means the window is directly above the release point of your hand. Another way to satisfy this equation is to set the expression in the brackets equal to zero, which gives us . This gives us a relationship between , , and such that there will be only one angle that reaches the window.   "
},
{
  "id": "sec-kinematics-problems-4",
  "level": "2",
  "url": "sec-kinematics-problems.html#sec-kinematics-problems-4",
  "type": "Exercise",
  "number": "2.4.5",
  "title": "",
  "body": "  A string quartet is rehearsing in a practice room on campus. The violist, as always, forgot their rosin, so they decide to borrow some from the violinist. Assuming the violinist throws the rosin with an initial speed of at an angle of , what's the ideal angle that maximizes the horizontal distance traveled by the rosin?    You may need to use the double angle formula for sine .    We need to find the horizontal distance traveled by the rosin. When it arrives, the height is zero, so we can set . This gives us two solutions for : (when the rosin is released) and (when the rosin lands). Plugging the latter solution into the equation for horizontal position gives us . The maximum value of is 1, which occurs when , so the ideal angle to throw the rosin is .   "
},
{
  "id": "sec-kinematics-problems-5",
  "level": "2",
  "url": "sec-kinematics-problems.html#sec-kinematics-problems-5",
  "type": "Exercise",
  "number": "2.4.6",
  "title": "",
  "body": "  Suppose the van in our storyline was allowed to drive radially and tangentially in the \"Founder's Quad Traffic Circle\". Recall that in polar coordinates, the position of the van is given by , where is the distance from the center of the traffic circle and is the unit vector pointing radially outward from the center of the traffic circle. Show that the acceleration of the van can be written as . One of these terms is the centripetal acceleration, which is responsible for keeping the van moving in a circle. The other is called the coriolis acceleration , which is responsible for the van's tendency to \"slide outward\" when it tries to turn.    This is just brute force differentiation, using the product rule and the results from . First, we compute the velocity of the van: . Then the acceleration is    "
},
{
  "id": "sec-kinematics-afr",
  "level": "1",
  "url": "sec-kinematics-afr.html",
  "type": "Section",
  "number": "2.5",
  "title": "Applications and Further Reading",
  "body": " Applications and Further Reading   Every chapter in this book has an applications and further reading section. Indeed, it turns out that kinematics isn't just used to throw lemons at minivans and flash drives at dorm windows. This section is meant to be a collection of interesting applications of the material covered in the chapter, as well as some further reading for those who want to learn more about the topics covered in the chapter.     Further Reading   Calculus  As you may have noticed, we have been using calculus throughout this chapter. It is very important to have a good understanding of calculus from the very beginning.  I would begin with Grant Sanderson's 3Blue1Brown YouTube channel, specifically his Essence of Calculus series, for a gentle and visual introduction to calculus. Then, I would recommend reading through the first few chapters of a standard calculus textbook, such as Stewart's Calculus: Early Transcendentals  .    Vectors  We have been using vectors throughout this chapter, but we haven't really defined what they are or how to work with them. Just like calculus, start with Grant Sanderson's 3Blue1Brown YouTube channel, specifically his Essence of Linear Algebra series, for a visual introduction to vectors and linear algebra. Then, I would recommend reading through the first few chapters of a standard linear algebra textbook, such as Strang's Introduction to Linear Algebra .    "
},
{
  "id": "refs-main",
  "level": "1",
  "url": "refs-main.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " Ludlow, Andrew D., et al. “Optical Atomic Clocks.”  Reviews of Modern Physics , vol. 87, no. 2, June 2015, pp. 637–701. DOI.org (Crossref), .   The International System of Units (SI): SI Brochure. 2019. DOI.org (Crossref), .  Stewart, James, et al. Calculus: Early Transcendentals. Ninth edition, Cengage, 2021.  Strang, Gilbert. Introduction to Linear Algebra. 6th ed, Wellesley-Cambridge press, 2023.  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
