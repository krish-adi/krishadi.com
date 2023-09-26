import profilePic from "@site/static/img/profile.jpeg";
import LifeMap from "./components/LifeMap";

<img
src={profilePic}
alt="profile picture adithya krishnan"
width="175px"
height="175px"
style={{ margin: "auto 4rem 2rem auto" }}
/>

Hey there 👋 !

I am Adithya, and this is my story.

When I was a kid, I broke a lot of things at home, out of curiosity to understand how things worked. Watches, radios, projectors, cameras, toys (all of them, some 3 or 4 I had ended up in pieces). When I was about 10, my mom bought me an electronics hobby kit (best birthday gift no. 1). It had an IC 555 a typical timer circuit, along with a bunch of transistors, resistors, diodes, switches and a reusable breadbord with wires. I learnt so much by just replicating the circuits from the book that came along with it and ofcourse by messing around with connections just to see what would happend, or most importantly why nothing happend.

I started learning western classical music with an electronic keyboard/piano. It was fascinating to learn, how people had discovered structures in music, understanding how combination of pitches and tones worked, how beauty in music is created by adding imperfections. I even managed to pass a few trinity college exams, upto Grade 5. This gave me some context to start being curious about Indian classical music, especially carnatic music. I wanted to understand how ragas worked, how thalam worked, how the rhythm came together. Although, I wish I had a carnatic teacher, who would have probably taught me what all the ragas and thalams were there, how to recognize them (I am very bad at recognizing tones). On ther other hand, perhaps having a teacher, I may have not enjoyed it so much. I was more curious about the 'why', rather than the 'what'. I wasn't so much interested in what were all the ragas out there, but more into why were there ragas, how does it relate to the music it created.

My love with computers started when I was learning music. My dad had bought me a Yamaha PSR-1000 (best birthday gift no. 2). What it could do, was mind blowing. It had a floppy disk reader/writer, where you could record music as MIDI files, and play them back. Record different layers, with different instruments. You could edit them, correct them, loop them. All of this you could do with the instrument itself. What I had discovered was, there were other people who recorded MIDI files and published them online. This was way back in 1998, internet was starting to be this amazing thing. Back then, I didn't have a computer at home. So, I would go to an internet cafe with my dad, browse for MIDI files, download them onto a floppy disk and rush back home to play them. To listen to them, and find out what interesting tunes they were making, and more importantly how they were making it. I always ended up studying the combination of notes, and the instrument arrangement.

One of the cool science projects I built was with a friend of mine for a science fair competition (this was around when we were 10 years old). It used a IC 555 and an amplifier IC (not sure about the number) to build a water level indicator. The use case was simple, when the water falls below a level it would turn on a pump to fill the reservoir, and when the water reached a certain level it would shut down the pump. This is an easy circuit, as it's a well documented used case for the used ICs, what was cool was that we actually implemented this with a household electric motor pump. What was important in this implementation, which wasn't documented in these circuit books were the safety protocols you need to implement. For example, when there was no water to pump, the pump shoudn't be switched on. How would you drive a household electric pump with a tiny circuit? That's where we used the amplifier circuit. The level indicator circuit would pass the signal to the amplifier which would then drive a relay circuit to then control the water pump. We didn't win the competition though, we came second.

I started building websites at 12, playing around with html and css. Initially it was styling email messages, building yahoo groups, and sending styled news letters. Later, I hosted a website of MIDI files, sort of a directory of all the MIDI files I had gathered, and the ones I had modified and recorded. Later on, I got super interested in building programs that could drive some electronics outside of a computer. So, for my high school project I wrote a C++ program that could drive a serial port, and I designed a circuit that could then read these signals and drive a circuit outside. The circuit was a simple placeholder for a simple home automation system.

I studied Chemical Engineering for my bachelors and masters. I chose this to study physical systems that had complex processes within them. My interest grew to work with process systems, how to model them, optimize and control them. I liked writing algorithms to solve prolems in optimizations, and used MATLAB quite a lot during this time. Some projects I worked on was data reconciliation in process systems, modelling and optimizing selective solvent based adsorption mechanisms.

My interest in complex systems and processes led me to a PhD on understanding 'how shit flows' (Domestic Slurry Hydraulics in Transport: D-SHIT). I studied the fluid dynamics of faecal sludge to design sewer systems. Poop + water is a complex system, and it's flow governs a huge portion of underground infrastructure, and waste water treatment systems. I studied it's flow relative to the concentration of solids in mixtures, across various diamaters, and flow regimes. A major part of my study was to understand the laminar to turbulent transition.

Sticking to academia a bit longer, I did a PostDoc in building digital twins of citites to understand the dynamics of flooding in an urban landscape. This was to study mitigation strategies of flooding in cities. I worked a lot with geospatial data, and got in love with working with Python. During this time I saw that there was a lack of tooling in this space, and build an open source project called Greppo. This was to help geospatial analysts/scientists to prototype interactive applications and visualizations around their work for demonstration and also debugging.

Building Greppo made me realize how much I enjoyed building frameworks, interactive applications, especially for products that use AI/ML in them. So, I got into building these for companies and as side projects. Now, I am working on my startup, building tools to help developers and organizations in accelerating their project builds.

I also love to climb. I have climbed around the world, rock and ice, sport, alpine and trad. Some of my favorite places are the Dolomites in Italy, Sanstone of Berdorf, Cracks in Basalt at Ettringen, Limestones of Freyr. In 2021, I climbed a total of 2900m of rock face in 7 days in the Dolomites.

<LifeMap />
