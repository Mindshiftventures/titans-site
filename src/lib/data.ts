export interface Book {
  title: string;
  note: string;
}

export interface Titan {
  name: string;
  bio: string;
  imageUrl: string;
  philosophy: string;
  quotes: string[];
  books: Book[];
  lessons: string[];
}

export interface TitansData {
  designers: Titan[];
  developers: Titan[];
  researchers: Titan[];
  writers: Titan[];
  metadata: {
    generatedAt: string;
    version: string;
    totalTitans: number;
    categories: string[];
  };
}

export type Category = "designers" | "developers" | "researchers" | "writers";

export const categoryInfo: Record<Category, { title: string; description: string; icon: string }> = {
  designers: {
    title: "DESIGNERS",
    description: "Masters of form, function, and visual communication",
    icon: "◈",
  },
  developers: {
    title: "DEVELOPERS", 
    description: "Architects of the digital infrastructure we depend on",
    icon: "⌘",
  },
  researchers: {
    title: "RESEARCHERS",
    description: "Pioneers expanding the boundaries of human knowledge",
    icon: "◉",
  },
  writers: {
    title: "WRITERS",
    description: "Craftspeople who shape thought through language",
    icon: "¶",
  },
};

export const titansData: TitansData = {
  "designers": [
    {
      "name": "Dieter Rams",
      "bio": "German industrial designer who served as head of design at Braun for over 30 years, revolutionizing consumer product design and directly inspiring Apple's aesthetic philosophy.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Dieter_Rams_2013.jpg/440px-Dieter_Rams_2013.jpg",
      "philosophy": "Less, but better (Weniger, aber besser). Design should be invisible, serving the user without calling attention to itself. Good design is environmentally responsible and built to last. Design is not about decoration but about making products honest, useful, and understandable.",
      "quotes": [
        "Less, but better.",
        "Good design is as little design as possible.",
        "Indifference to people and the reality in which they live is actually the only true deadly sin in design.",
        "You cannot understand good design if you do not understand people; design is made for people.",
        "One of the most significant design principles is to omit the unimportant in order to emphasize the important."
      ],
      "books": [
        {
          "title": "Less and More: The Design Ethos of Dieter Rams",
          "note": "Comprehensive retrospective of his work and philosophy"
        },
        {
          "title": "Dieter Rams: As Little Design as Possible",
          "note": "Definitive monograph on his career and design principles"
        },
        {
          "title": "The Vitsoe Book",
          "note": "Explores his long collaboration with furniture company Vitsoe"
        }
      ],
      "lessons": [
        "Simplicity requires tremendous discipline—removing the unnecessary is harder than adding more",
        "Design exists to serve people, not to impress other designers or win awards",
        "Sustainability and longevity should be core design values, not afterthoughts"
      ]
    },
    {
      "name": "Jony Ive",
      "bio": "British-American industrial designer who served as Chief Design Officer at Apple, leading the design of the iMac, iPod, iPhone, iPad, and Apple Watch—products that redefined entire industries.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Jony_Ive_%28WWDC_2012%29.jpg/440px-Jony_Ive_%28WWDC_2012%29.jpg",
      "philosophy": "True simplicity is derived from so much more than just the absence of clutter and ornamentation—it's about bringing order to complexity. Design is about caring deeply about the user experience and making the solution seem so inevitable that you wonder why it wasn't always that way.",
      "quotes": [
        "Simplicity is not the absence of clutter, that's a consequence of simplicity. Simplicity is somehow essentially describing the purpose and place of an object and product.",
        "There's no learning without trying lots of ideas and failing lots of times.",
        "Different and new is relatively easy. Doing something that's genuinely better is very hard.",
        "What we make testifies who we are. People can sense care and can sense carelessness.",
        "True simplicity is derived from so much more than just the absence of clutter and ornamentation. It's about bringing order to complexity."
      ],
      "books": [
        {
          "title": "Jony Ive: The Genius Behind Apple's Greatest Products",
          "note": "Biography by Leander Kahney exploring his design philosophy and Apple career"
        },
        {
          "title": "Designed by Apple in California",
          "note": "Apple's photo book documenting 20 years of design, curated by Ive"
        }
      ],
      "lessons": [
        "Care obsessively about every detail, even the ones users will never see",
        "The best design makes complex technology feel inevitable and intuitive",
        "Building prototypes and iterating relentlessly is how you discover the right solution"
      ]
    },
    {
      "name": "Massimo Vignelli",
      "bio": "Italian designer who shaped American visual culture through his work on the NYC subway signage system, American Airlines logo, and the timeless Unigrid system for National Parks brochures.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Massimo_Vignelli_2.jpg/440px-Massimo_Vignelli_2.jpg",
      "philosophy": "If you can design one thing, you can design everything. Design is a discipline that transcends any specific medium. Intellectual elegance, visual power, and timelessness are the foundations of all good design. Limit your typefaces—master a few rather than dabbling in thousands.",
      "quotes": [
        "If you can design one thing, you can design everything.",
        "The life of a designer is a life of fight: fight against the ugliness.",
        "In the new computer age, the proliferation of typefaces represents a new level of visual pollution threatening our culture. Out of thousands of typefaces, all we need are a few basic ones.",
        "The subway rider should be given only information at the point of decision. Never before. Never after.",
        "Styles come and go. Good design is a language, not a style."
      ],
      "books": [
        {
          "title": "The Vignelli Canon",
          "note": "Free PDF manifesto distilling his design principles—essential reading for all designers"
        },
        {
          "title": "Vignelli: From A to Z",
          "note": "Alphabetical exploration of concepts behind all good design"
        },
        {
          "title": "Design: Vignelli",
          "note": "Career retrospective spanning all design disciplines"
        }
      ],
      "lessons": [
        "Master foundational principles and they'll apply across every medium and challenge",
        "Constraint breeds creativity—limiting your tools forces deeper thinking",
        "Fight for clarity and against visual pollution in everything you create"
      ]
    },
    {
      "name": "Paula Scher",
      "bio": "American graphic designer and partner at Pentagram, known for bold typographic work including identities for The Public Theater, Citibank, and Microsoft Windows 8. First woman to be a principal at Pentagram.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Paula_Scher.jpg/440px-Paula_Scher.jpg",
      "philosophy": "Design is play—engaging in childlike activity and gambling simultaneously. You have to misbehave to make breakthroughs. Graphic design is a language with vocabulary, rules, and structure. Growth comes through mistakes, not through playing it safe.",
      "quotes": [
        "Words have meaning, type has spirit.",
        "My work is play. And I play when I design.",
        "It's through mistakes that you actually can grow. You have to get bad in order to get good.",
        "Graphic design is a language. It has a vocabulary, it has rules, it has a structure.",
        "Less is more and more is more. It's the middle that's not a good place."
      ],
      "books": [
        {
          "title": "Make It Bigger",
          "note": "Essays on design, business, and the creative process"
        },
        {
          "title": "MAPS",
          "note": "Her hand-painted large-scale maps exploring geography through typography"
        },
        {
          "title": "Paula Scher: Works",
          "note": "Comprehensive monograph of her influential design career"
        }
      ],
      "lessons": [
        "Embrace play and experimentation—breakthrough work comes from taking risks",
        "Mistakes are essential to growth; you can't improve without failing",
        "Bold typography can communicate emotion and meaning beyond the literal words"
      ]
    }
  ],
  "developers": [
    {
      "name": "Linus Torvalds",
      "bio": "Finnish-American software engineer who created Linux and Git—two of the most influential pieces of software in computing history, powering everything from Android phones to cloud servers to version control worldwide.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/440px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg",
      "philosophy": "Talk is cheap. Show me the code. Programming should be fun, not just about money or recognition. Good programmers worry about data structures and their relationships, not just code. Start small, solve immediate needs, and let projects grow organically rather than over-designing from the start.",
      "quotes": [
        "Talk is cheap. Show me the code.",
        "Bad programmers worry about the code. Good programmers worry about data structures and their relationships.",
        "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
        "Intelligence is the ability to avoid doing work, yet getting the work done.",
        "Theory and practice sometimes clash. And when that happens, theory loses. Every single time."
      ],
      "books": [
        {
          "title": "Just for Fun: The Story of an Accidental Revolutionary",
          "note": "His autobiography co-written with David Diamond"
        },
        {
          "title": "The Cathedral and the Bazaar",
          "note": "Eric Raymond's essay on open source that Torvalds embodied (recommended by Linux community)"
        },
        {
          "title": "Linux Kernel Development",
          "note": "Robert Love's technical deep-dive into the kernel Torvalds created"
        }
      ],
      "lessons": [
        "Start with something that works for you, then let others contribute and improve it",
        "Data structures matter more than clever algorithms—get your foundations right",
        "The best way to prove your ideas is to build working software, not write proposals"
      ]
    },
    {
      "name": "John Carmack",
      "bio": "American programmer and co-founder of id Software, created revolutionary 3D game engines for Wolfenstein 3D, Doom, and Quake. Later served as CTO of Oculus VR. Known for extraordinary technical depth and pushing hardware limits.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/John_Carmack_E3_2006.jpg/440px-John_Carmack_E3_2006.jpg",
      "philosophy": "Focused, hard work is the real key to success. If you aren't sure which way to do something, do it both ways and see which works better. Low-level programming is good for the programmer's soul. Share code freely—it costs little but benefits many.",
      "quotes": [
        "Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it.",
        "Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function.",
        "In the information age, the barriers to entry into programming just aren't there. The barriers are self imposed.",
        "Sharing the code just seems like The Right Thing to Do. Free software that people value adds wealth to the world.",
        "It is hard for less experienced developers to appreciate how rarely architecting for future requirements turns out net-positive."
      ],
      "books": [
        {
          "title": "Masters of Doom",
          "note": "David Kushner's book about Carmack and Romero building id Software—essential reading"
        },
        {
          "title": "Computer Graphics: Principles and Practice",
          "note": "The graphics programming bible Carmack recommends"
        },
        {
          "title": "Michael Abrash's Graphics Programming Black Book",
          "note": "Low-level optimization wisdom from Carmack's collaborator"
        }
      ],
      "lessons": [
        "Solve hard problems by going deep—understand everything from the metal up",
        "Don't over-architect for the future; solve today's problem well",
        "Iteration beats planning—try multiple approaches and see what actually works"
      ]
    },
    {
      "name": "David Heinemeier Hansson (DHH)",
      "bio": "Danish programmer who created Ruby on Rails and co-founded Basecamp. Challenged Silicon Valley orthodoxy on venture capital, hustle culture, and remote work. Also a Le Mans class-winning race car driver.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/DHH_TechCrunch.jpg/440px-DHH_TechCrunch.jpg",
      "philosophy": "Convention over configuration. Work smarter, not longer—productivity isn't about hours in an office. Build products you'd want to use yourself. Challenge industry norms and be willing to be the contrarian. Constraints fuel creativity.",
      "quotes": [
        "You're better off with a kick-ass half than a half-assed whole.",
        "The secret to productivity is not finding more time to do more stuff, but finding the strength to do less of the stuff that doesn't need doing.",
        "Fear is ugly because it makes you irrational. Fear makes you jump to conclusions. Fear makes you reactionary.",
        "Most people don't do great work because they don't love their work. They do it for other reasons.",
        "The biggest challenge isn't always the work itself, but maintaining your enthusiasm for the work over a long period of time."
      ],
      "books": [
        {
          "title": "Rework",
          "note": "Manifesto for building businesses without the startup nonsense"
        },
        {
          "title": "Remote: Office Not Required",
          "note": "Made the case for remote work before it became mainstream"
        },
        {
          "title": "Getting Real",
          "note": "Philosophy of building software with small teams and minimal process"
        },
        {
          "title": "It Doesn't Have to Be Crazy at Work",
          "note": "Blueprint for calm, sustainable work culture"
        }
      ],
      "lessons": [
        "Challenge conventional wisdom—the crowd is often wrong about how to build products and companies",
        "Ship the simplest thing that could work, then iterate based on real feedback",
        "Sustainable pace beats heroic effort; protect your time and energy ruthlessly"
      ]
    },
    {
      "name": "Fabrice Bellard",
      "bio": "French programmer renowned for creating FFmpeg (ubiquitous media processing), QEMU (processor emulator), and TinyCC. Set π computation world records. Possibly the most prolific individual programmer alive.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Fabrice_Bellard_2014.jpg/440px-Fabrice_Bellard_2014.jpg",
      "philosophy": "Individual programmers can still create world-changing software. Deep understanding of low-level systems enables extraordinary optimization. Write complete, useful tools rather than frameworks. Quality over quantity in everything.",
      "quotes": [
        "I believe that writing software should be fun.",
        "I try to write programs that are small and efficient.",
        "The best way to learn is to try to build something.",
        "Compilers are fascinating because they bridge high-level ideas and low-level execution."
      ],
      "books": [
        {
          "title": "Computer Systems: A Programmer's Perspective",
          "note": "Understanding systems at Bellard's level requires this foundation"
        },
        {
          "title": "Structure and Interpretation of Computer Programs",
          "note": "Classic on computational thinking that informs his elegant solutions"
        },
        {
          "title": "The Art of Computer Programming",
          "note": "Knuth's foundational algorithms work underlying all efficient code"
        }
      ],
      "lessons": [
        "One person with deep knowledge can outperform large teams—don't underestimate individual impact",
        "Understanding the entire stack from hardware to high-level code enables unique solutions",
        "Ship complete, working tools rather than incomplete frameworks or libraries"
      ]
    }
  ],
  "researchers": [
    {
      "name": "Richard Feynman",
      "bio": "American theoretical physicist who won the Nobel Prize for quantum electrodynamics, worked on the Manhattan Project, and became beloved for making physics accessible. Known for his curiosity, playfulness, and ability to explain complex ideas simply.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Richard_Feynman_Nobel.jpg/440px-Richard_Feynman_Nobel.jpg",
      "philosophy": "The first principle is that you must not fool yourself—and you are the easiest person to fool. Fall in love with finding things out. Know the difference between knowing the name of something and actually knowing something. Doubt is not a weakness but a feature of honest inquiry.",
      "quotes": [
        "The first principle is that you must not fool yourself and you are the easiest person to fool.",
        "I learned very early the difference between knowing the name of something and knowing something.",
        "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.",
        "I would rather have questions that can't be answered than answers that can't be questioned.",
        "Nobody ever figures out what life is all about, and it doesn't matter. Explore the world."
      ],
      "books": [
        {
          "title": "Surely You're Joking, Mr. Feynman!",
          "note": "Delightful autobiography full of curiosity and mischief"
        },
        {
          "title": "The Feynman Lectures on Physics",
          "note": "Masterclass in teaching complex ideas simply—free online"
        },
        {
          "title": "What Do You Care What Other People Think?",
          "note": "More stories including his Challenger investigation"
        },
        {
          "title": "QED: The Strange Theory of Light and Matter",
          "note": "Quantum physics explained for non-physicists"
        }
      ],
      "lessons": [
        "True understanding means you can explain something simply to anyone",
        "Cultivate passionate curiosity—it's more important than raw intelligence",
        "Always question your own assumptions first; self-deception is the biggest trap"
      ]
    },
    {
      "name": "Claude Shannon",
      "bio": "American mathematician and electrical engineer who founded information theory with his 1948 paper 'A Mathematical Theory of Communication.' Created the mathematical basis for digital computing and communications that powers the modern world.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/ClaudeShannon_MFO3807.jpg/440px-ClaudeShannon_MFO3807.jpg",
      "philosophy": "I am more interested in the elegance of a problem than its practical applications. Simplify complex problems by cutting them down to their essentials. Play and curiosity drive better research than focused practicality. Work on multiple ideas simultaneously.",
      "quotes": [
        "Information is the resolution of uncertainty.",
        "I just wondered how things were put together.",
        "I am very seldom interested in applications. I am more interested in the elegance of a problem.",
        "I've been working on three different ideas simultaneously, and strangely enough it seems a more productive method than sticking to one problem.",
        "I think I'm more visual than symbolic. I try to get a feeling of what's going on. Equations come later."
      ],
      "books": [
        {
          "title": "A Mind at Play: How Claude Shannon Invented the Information Age",
          "note": "Excellent biography by Soni and Goodman"
        },
        {
          "title": "The Mathematical Theory of Communication",
          "note": "His groundbreaking original paper—surprisingly readable"
        },
        {
          "title": "Information Theory, Inference, and Learning Algorithms",
          "note": "David MacKay's modern treatment of Shannon's ideas"
        }
      ],
      "lessons": [
        "The most elegant solutions often come from asking 'what is the essence of this problem?'",
        "Playful curiosity and tinkering can lead to world-changing breakthroughs",
        "Working on multiple problems simultaneously can be more productive than grinding on one"
      ]
    },
    {
      "name": "Andrej Karpathy",
      "bio": "Slovak-Canadian AI researcher who led Tesla's Autopilot team, was founding member of OpenAI, and now runs Eureka Labs. Known for exceptional ability to explain deep learning concepts and his influential educational content.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Andrej_Karpathy_portrait.jpg/440px-Andrej_Karpathy_portrait.jpg",
      "philosophy": "It's really important to not abstract away things. You need to have a full understanding of the whole stack. The best way to understand AI is to build it from scratch. Education needs to be rebuilt for the AI age. AGI is coming but the timeline is measured in decades, not years.",
      "quotes": [
        "It's really important to not abstract away things. You need to have a full understanding of the whole stack.",
        "The best way to learn is to build from scratch.",
        "Software 2.0 is written in neural network weights, not code.",
        "I think training and fine-tuning neural nets is basically a new kind of programming.",
        "The hottest new programming language is English."
      ],
      "books": [
        {
          "title": "Deep Learning",
          "note": "Goodfellow, Bengio, Courville textbook—the bible of the field"
        },
        {
          "title": "Neural Networks and Deep Learning",
          "note": "Michael Nielsen's free online book for intuitive understanding"
        },
        {
          "title": "The Alignment Problem",
          "note": "Brian Christian on AI safety—important context for modern ML"
        }
      ],
      "lessons": [
        "Build things from scratch to truly understand them—don't just use high-level APIs",
        "The best teachers are practitioners who can connect theory to real implementation",
        "Stay grounded in engineering reality while dreaming about AGI possibilities"
      ]
    },
    {
      "name": "Demis Hassabis",
      "bio": "British AI researcher and co-founder of DeepMind. Created AlphaGo, AlphaFold (solving protein folding), and pioneered modern reinforcement learning. Former chess prodigy and video game designer turned scientific entrepreneur.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Demis_Hassabis_Royal_Society.jpg/440px-Demis_Hassabis_Royal_Society.jpg",
      "philosophy": "Use AI as a tool for scientific discovery, not just commercial applications. Pursue fundamental breakthroughs rather than incremental improvements. Combine insights from neuroscience, gaming, and machine learning. Ambitious goals require patient, long-term research.",
      "quotes": [
        "We're on the cusp of some of the most important discoveries in the history of science.",
        "AI is a meta-solution to accelerate scientific progress across all fields.",
        "Games are the perfect training ground for AI because they provide clear rules and feedback.",
        "The most exciting aspect of AI research is that it can help us understand intelligence itself.",
        "I believe AI will be the most beneficial technology ever created by humanity."
      ],
      "books": [
        {
          "title": "Reinforcement Learning: An Introduction",
          "note": "Sutton & Barto textbook underlying DeepMind's approach"
        },
        {
          "title": "The Quest for Artificial Intelligence",
          "note": "Nils Nilsson's history providing context for modern AI"
        },
        {
          "title": "Genius Makers",
          "note": "Cade Metz on the DeepMind and modern AI research story"
        }
      ],
      "lessons": [
        "Think in decades, not quarters—fundamental breakthroughs require patient research",
        "Diverse backgrounds (gaming, neuroscience, physics) create unique research advantages",
        "Apply cutting-edge AI to important scientific problems, not just commercial ones"
      ]
    }
  ],
  "writers": [
    {
      "name": "Stephen King",
      "bio": "American author of horror, supernatural fiction, and suspense. One of the best-selling authors of all time with over 350 million books sold. His craft book 'On Writing' is considered essential reading for fiction writers.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Stephen_King%2C_Comicon.jpg/440px-Stephen_King%2C_Comicon.jpg",
      "philosophy": "Writing isn't about making money or getting famous—it's about enriching the lives of readers and yourself. Read a lot, write a lot. There's no shortcut. Kill your darlings. The first draft is just you telling yourself the story.",
      "quotes": [
        "If you want to be a writer, you must do two things above all others: read a lot and write a lot.",
        "Kill your darlings, kill your darlings, even when it breaks your egocentric little scribbler's heart, kill your darlings.",
        "Writing is a lonely job. Having someone who believes in you makes a lot of difference.",
        "The scariest moment is always just before you start. After that, things can only get better.",
        "Put your desk in the corner, and every time you sit down there to write, remind yourself why it isn't in the middle of the room. Life isn't a support system for art. It's the other way around."
      ],
      "books": [
        {
          "title": "On Writing: A Memoir of the Craft",
          "note": "Part memoir, part masterclass—essential for any writer"
        },
        {
          "title": "The Stand",
          "note": "Example of his ambitious, sprawling storytelling"
        },
        {
          "title": "Danse Macabre",
          "note": "Non-fiction exploration of the horror genre"
        }
      ],
      "lessons": [
        "Show up every day and write—talent matters less than consistent practice",
        "Read voraciously in and outside your genre to absorb craft unconsciously",
        "Be willing to cut beloved passages if they don't serve the story"
      ]
    },
    {
      "name": "Ernest Hemingway",
      "bio": "American novelist and journalist whose economical, understated style influenced 20th-century fiction. Nobel Prize winner known for The Old Man and the Sea, A Farewell to Arms, and For Whom the Bell Tolls.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/440px-ErnestHemingway.jpg",
      "philosophy": "Write one true sentence—the truest sentence you know. Omit everything unnecessary; the dignity of an iceberg is that only one-eighth is above water. Write what you know. Good writing is rewriting. Stop while you still know what comes next.",
      "quotes": [
        "All you have to do is write one true sentence. Write the truest sentence that you know.",
        "Prose is architecture, not interior decoration.",
        "The hardest thing in the world to do is to write straight honest prose on human beings.",
        "The first draft of anything is shit.",
        "Write drunk, edit sober."
      ],
      "books": [
        {
          "title": "Ernest Hemingway on Writing",
          "note": "Collected wisdom edited by Larry Phillips"
        },
        {
          "title": "A Moveable Feast",
          "note": "Memoir about his Paris years as a developing writer"
        },
        {
          "title": "The Old Man and the Sea",
          "note": "His iceberg theory in perfect action"
        }
      ],
      "lessons": [
        "Economy of words—every sentence should earn its place",
        "Stop writing while you still have momentum to make starting easier tomorrow",
        "Life experience is your raw material; you must live fully to write truthfully"
      ]
    },
    {
      "name": "Anne Lamott",
      "bio": "American novelist and non-fiction writer best known for 'Bird by Bird,' one of the most beloved books on writing ever published. Known for her humor, honesty about the writing struggle, and spiritual depth.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Anne_Lamott_at_Powell%27s_%28crop%29.jpg/440px-Anne_Lamott_at_Powell%27s_%28crop%29.jpg",
      "philosophy": "Perfectionism is the voice of the oppressor. All good writing begins with terrible first efforts. Take it bird by bird—break overwhelming tasks into small pieces. You own everything that happened to you; tell your stories.",
      "quotes": [
        "Perfectionism is the voice of the oppressor, the enemy of the people. It will keep you cramped and insane your whole life.",
        "Bird by bird, buddy. Just take it bird by bird.",
        "Almost all good writing begins with terrible first efforts. You need to start somewhere.",
        "You own everything that happened to you. Tell your stories. If people wanted you to write warmly about them, they should have behaved better.",
        "Writing and reading decrease our sense of isolation. They deepen and widen and expand our sense of life: they feed the soul."
      ],
      "books": [
        {
          "title": "Bird by Bird: Some Instructions on Writing and Life",
          "note": "Warm, funny, essential guide to the writing life"
        },
        {
          "title": "Operating Instructions",
          "note": "Memoir showing her vulnerable, honest voice in action"
        },
        {
          "title": "Help, Thanks, Wow: The Three Essential Prayers",
          "note": "Her spiritual writing demonstrating simplicity and depth"
        }
      ],
      "lessons": [
        "Shitty first drafts are not just acceptable—they're essential to the process",
        "Break overwhelming projects into small, manageable pieces",
        "Your vulnerability and honest voice are your greatest assets as a writer"
      ]
    },
    {
      "name": "William Zinsser",
      "bio": "American writer, editor, and teacher best known for 'On Writing Well,' a guide to non-fiction writing that has sold over 1.5 million copies and influenced generations of writers and journalists.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/William_Zinsser.jpg/440px-William_Zinsser.jpg",
      "philosophy": "Simplify, simplify. The secret of good writing is to strip every sentence to its cleanest components. Writing is thinking on paper. Clutter is the disease of American writing—clear thinking becomes clear writing.",
      "quotes": [
        "Clutter is the disease of American writing. We are a society strangling in unnecessary words.",
        "Writing is thinking on paper.",
        "Simplify, simplify.",
        "The secret of good writing is to strip every sentence to its cleanest components.",
        "Don't try to visualize the great mass of readers. There is no such audience—every reader is a different person."
      ],
      "books": [
        {
          "title": "On Writing Well",
          "note": "The definitive guide to nonfiction writing—essential reading"
        },
        {
          "title": "Writing to Learn",
          "note": "How writing clarifies thinking across all subjects"
        },
        {
          "title": "Writing About Your Life",
          "note": "Guide to memoir and personal narrative"
        }
      ],
      "lessons": [
        "Rewrite ruthlessly—cutting clutter is the primary work of revision",
        "Write for one ideal reader, not a faceless mass audience",
        "Good writing is the result of clear thinking; if your prose is muddled, your thoughts are too"
      ]
    }
  ],
  "metadata": {
    "generatedAt": "2026-02-01T07:58:00.000Z",
    "version": "1.0",
    "totalTitans": 16,
    "categories": ["designers", "developers", "researchers", "writers"]
  }
};

export function getTitanBySlug(category: Category, slug: string): Titan | undefined {
  const titans = titansData[category];
  return titans.find(t => slugify(t.name) === slug);
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getAllTitanSlugs(): { category: Category; slug: string }[] {
  const categories: Category[] = ["designers", "developers", "researchers", "writers"];
  const slugs: { category: Category; slug: string }[] = [];
  
  for (const category of categories) {
    for (const titan of titansData[category]) {
      slugs.push({ category, slug: slugify(titan.name) });
    }
  }
  
  return slugs;
}
