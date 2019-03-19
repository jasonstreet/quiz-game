// quiz text and questions

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!",
        "main":    "<p>I have collected some of the hardest Trivia Questions out there. Test your knowledge with this general knowledge trivia quiz! </p>",
        "results": "<h5>Thank you for playing my Quiz!</h5><p>I hope you enjoyed this little Quiz. If you noticed any problems, errors or bugs within the programme, please let me know!</p>",
        "level1":  "Grand Wizard. You have given up all mortal needs for the pursuit of pure knowledge. <img height=200 src='https://i.pinimg.com/736x/7f/70/3d/7f703d26330398388e94130899893a8d--fantasy-wizard-fantasy-art.jpg'/>",
        "level2":  "Virtuoso. You straddle a thin line between Trivial Enlightenment and Ignorant Damnation. Try a little harder and you may succeed, but falter even slightly, and you will fall far. <img height=200 src='http://murphlaw.net/wp-content/uploads/2016/01/IP.jpg'/>",
        "level3":  "Amateur. You linger between Good and Bad. You are not yet ready for Trivial Greatness. <img height=200 src='http://images.entertainment.ie/images_content/rectangle/620x372/dumb.jpg'/>",
        "level4":  "Regular Joe. You may try hard, but do not have the qualities of a Hardcore Trivialist. There may be a flicker of hope for you, but the future looks bleak at best. <img height=200 src='http://images.entertainment.ie/images_content/rectangle/620x372/dumb.jpg'/>",
        "level5":  "Troglodyte. You linger in darkness, forsaking all attempts to perservere and learn. <img height=200 src='https://vignette.wikia.nocookie.net/lotr/images/e/e1/Gollum_Render.png/revision/latest?cb=20141218075509'/>"
    },
    "questions": [
        {
            "q": "What was the title of Kitty Kelley’s book about Elizabeth Taylor? <img height=400 src='img/Taylor,_Elizabeth_posed.jpg'/>",
            "a": [
                {"option": "Elizabeth Taylor: A biography",      "correct": false},
                {"option": "The lost diary of Elizabeth Taylor", "correct": false},
                {"option": "Elizabeth Taylor: The Last Star",    "correct": true},
                {"option": "My week with Elizabeth Taylor",      "correct": false} 
            ],
            "correct": "<p><span>Correct!</span>Kitty Kelley’s classic portrait follows the rise, fall, and rebirth of the woman who was perhaps Hollywood’s brightest star.</p>",
            "incorrect": "<p><span>Wrong!</span>The correct answer is Elizabeth Taylor: The Last Star.</p>" 
        },
        { 
            "q": "What is Whoopi Goldberg’s real name? <img height=300 src='img/220px-Whoopi_Goldberg_at_a_NYC_No_on_Proposition_8_Rally.jpg'/>",
            "a": [
                {"option": "Johnson Elaine Caryn",   "correct": false},
                {"option": "Caryn Elaine Johnson",   "correct": true},
                {"option": "Elaine Johnson Caryn ",  "correct": false},
                {"option": "Elaine Caryn Johnson",   "correct": false}
            ],
            "correct": "<p><span>Correct, Well Done!</span>Caryn gave herself the name Whoopi, owing to her stand up routines, and the name Goldberg was suggested by her Mother, who felt having a Jewish last name would help her succeed in Hollywood.</p>",
            "incorrect": "<p><span>That's Wrong!</span>The Answer is Caryn Elaine Johnson</p>" 
        },
        { 
            "q": "Which of the following countries are NOT currently part of the Paris Agreement? <img height=200 src='img/Paris-Agreement_Logo_EN_size.png'/>",
            "a": [
                {"option": "Syria",           "correct": true},
                {"option": "USA",              "correct": false},
                {"option": "Germany",          "correct": false},
                {"option": "Nicaragua",        "correct": true},
                {"option": "Somalia",          "correct": false} 
            ],
            "correct": "<p><span>Brilliant! All Correct!</span>Nicaragua and Syria are currently the only nations currently not part of the Paris Agreement.</p>",
            "incorrect": "<p><span>Not Quite.</span>The correct answers are Syria and Nicaragua.</p>" // no comma here
        },
        { // Question 4
            "q": "Which of the following is not a naturally occuring terestrial element? <img height=200 src='img/atom-68866_640.jpg'/>",
            "a": [
                {"option": "Neon",    "correct": false},
                {"option": "Cobalt",     "correct": false},
                {"option": "Rubidium",      "correct": false},
                {"option": "Flerovium",   "correct": true} 
            ],
            "correct": "<p><span>Correct! Amazing!</span>Flerovium is a Synthetic element, and does not occur naturally on Earth.</p>",
            "incorrect": "<p><span>Wrong!</span>The correct answer is Flerovium.</p>"
        },
        { // Question 5
            "q": "What is the name of the Spider that consumed the Two Trees in Tolkeins Middle Earth? <img height=300 src='img/Melkor-and-Ungoliant.jpg'/>",
            "a": [
                {"option": "Araignee",     "correct": false},
                {"option": "Ungoliant",    "correct": true},
                {"option": "Aragog",       "correct": false},
                {"option": "Shelob",       "correct": false} 
            ],
            "correct": "<p><span>Good Job!</span>In the story, Ungoliant was commanded by the Dark Lord Melkor to destroy the Light of the Two Trees.</p>",
            "incorrect": "<p><span>That's Wrong!</span>The correct answer is Ungoliant.</p>" 
        },
            { 
            "q": "Which of the following celebrity pairs were born in the same year? <img height=300 src='img/download.jpg'/>",
            "a": [
                {"option": "Mark Zuckerberg & Avril Lavigne",           "correct": true},
                {"option": "Jane Fonda & Betty White",              "correct": false},
                {"option": "Jim Parsons & Kat Dennings",          "correct": false},
                {"option": "Alfred Hitchcock & Coco Chanel",        "correct": false},
                {"option": "Kate Upton & Selena Gomez",          "correct": true} 
            ],
            "correct": "<p><span>Brilliant! All Correct!</span>Mark Zuckerberg & Avril Lavigne were born in 1984, and Kate Upton & Selena Gomez were both born in 1992.</p>",
            "incorrect": "<p><span>Not Quite.</span>The correct answers are Mark Zuckerberg & Avril Lavigne and Kate Upton & Selena Gomez.</p>" // no comma here
        },
        { // Question 5
            "q": "What 2004 film earned Halle Berry a Golden Raspberry award for Worst Actress? <img height=300 src='img/halle-berry-9542339-1-402.jpg'/>",
            "a": [
                {"option": "Monster's Ball",     "correct": false},
                {"option": "Cat Woman",    "correct": true},
                {"option": "Boomerang",       "correct": false},
                {"option": "Swordfish",       "correct": false} 
            ],
            "correct": "<p><span>Good Job!</span>Halle Berry actually attended the award show for her Golden Raspberry, with her Best Actress Oscar in hand from Monster's Ball.</p>",
            "incorrect": "<p><span>That's Wrong!</span>The correct answer is Cat Woman.</p>" // no comma here
        } // no comma here
    ]
};
