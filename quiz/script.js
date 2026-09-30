// =====================================================
// QUIZ MASTER
// =====================================================


// =====================================================
// QUESTION BANK
// =====================================================
//
// Each topic contains 20 core questions.
//
// Every core question gets 5 different question forms.
//
// 20 × 5 = 100 questions per topic.
//
// 100 × 6 topics = 600 questions.
//
// =====================================================


const coreQuestions = {

    // =================================================
    // HTML
    // =================================================

    html: [

        ["Which tag creates a hyperlink?",
            ["<a>", "<link>", "<href>", "<url>"], 0],

        ["Which tag creates the largest heading?",
            ["<h6>", "<head>", "<h1>", "<heading>"], 2],

        ["Which tag creates a paragraph?",
            ["<p>", "<para>", "<text>", "<paragraph>"], 0],

        ["Which attribute provides alternative text for an image?",
            ["src", "alt", "title", "href"], 1],

        ["Which tag displays an image?",
            ["<image>", "<img>", "<pic>", "<src>"], 1],

        ["Which tag creates an unordered list?",
            ["<ol>", "<list>", "<ul>", "<li>"], 2],

        ["Which tag creates an ordered list?",
            ["<ul>", "<ol>", "<order>", "<list>"], 1],

        ["Which tag defines a table row?",
            ["<td>", "<th>", "<tr>", "<row>"], 2],

        ["Which tag defines a normal table cell?",
            ["<cell>", "<td>", "<tr>", "<tc>"], 1],

        ["Which tag defines a table header cell?",
            ["<thead>", "<header>", "<th>", "<td>"], 2],

        ["Which tag creates an HTML form?",
            ["<input>", "<form>", "<field>", "<data>"], 1],

        ["Which input type hides typed characters?",
            ["text", "password", "hidden-text", "secure"], 1],

        ["Which attribute connects a label with an input?",
            ["for", "connect", "target", "idref"], 0],

        ["Which tag creates a line break?",
            ["<break>", "<lb>", "<br>", "<newline>"], 2],

        ["Which tag creates a horizontal line?",
            ["<line>", "<hr>", "<rule>", "<horizontal>"], 1],

        ["Which semantic element represents navigation?",
            ["<navigate>", "<nav>", "<navigation>", "<menu>"], 1],

        ["Which semantic element represents the main content?",
            ["<content>", "<body>", "<main>", "<primary>"], 2],

        ["Which tag embeds audio?",
            ["<sound>", "<audio>", "<music>", "<mp3>"], 1],

        ["Which tag embeds video?",
            ["<movie>", "<media>", "<video>", "<vid>"], 2],

        ["Which declaration defines an HTML5 document?",
            ["<!HTML5>", "<!DOCTYPE html>", "<doctype html5>", "<!HTML>"], 1]
    ],


    // =================================================
    // CSS
    // =================================================

    css: [

        ["Which property changes text color?",
            ["font-color", "color", "text-color", "foreground"], 1],

        ["Which property changes the background color?",
            ["background-color", "bg", "color-background", "background-style"], 0],

        ["Which property changes text size?",
            ["text-size", "font-size", "size", "font-height"], 1],

        ["Which property makes text bold?",
            ["font-weight", "text-bold", "bold", "font-style"], 0],

        ["Which property changes the font?",
            ["font-family", "font-type", "text-font", "family"], 0],

        ["Which property adds space inside an element?",
            ["margin", "padding", "spacing", "inside-space"], 1],

        ["Which property adds space outside an element?",
            ["padding", "margin", "outside-space", "border-space"], 1],

        ["Which property controls the border?",
            ["outline", "border", "box-line", "edge"], 1],

        ["Which display value enables Flexbox?",
            ["display: flex", "flex: display", "display: box", "position: flex"], 0],

        ["Which display value enables CSS Grid?",
            ["display: grid", "grid: display", "display: table", "layout: grid"], 0],

        ["Which property changes an element's width?",
            ["size", "width", "element-width", "x-size"], 1],

        ["Which property changes an element's height?",
            ["height", "size-y", "element-height", "h"], 0],

        ["Which property rounds corners?",
            ["corner-radius", "border-radius", "radius", "round-corner"], 1],

        ["Which property controls transparency?",
            ["transparent", "opacity", "alpha", "visibility"], 1],

        ["Which property controls stacking order?",
            ["stack", "z-index", "layer", "position-index"], 1],

        ["Which pseudo-class applies when the mouse is over an element?",
            [":click", ":hover", ":mouse", ":over"], 1],

        ["Which selector targets an element by ID?",
            [".", "#", "*", "&"], 1],

        ["Which selector targets a class?",
            ["#", ".", "@", ":"], 1],

        ["Which selector targets every element?",
            ["*", "all", "#all", "."], 0],

        ["Which property controls an element's position?",
            ["position", "place", "location", "element-position"], 0]
    ],


    // =================================================
    // JAVASCRIPT
    // =================================================

    javascript: [

        ["Which keyword declares a block-scoped variable?",
            ["var", "let", "define", "variable"], 1],

        ["Which keyword declares a constant?",
            ["constant", "let", "const", "fixed"], 2],

        ["Which symbol starts a single-line comment?",
            ["#", "//", "<!--", "/*"], 1],

        ["Which method prints information to the browser console?",
            ["console.print()", "console.log()", "print.console()", "log()"], 1],

        ["Which method converts JSON text into an object?",
            ["JSON.parse()", "JSON.convert()", "JSON.object()", "JSON.read()"], 0],

        ["Which method converts an object into JSON text?",
            ["JSON.object()", "JSON.stringify()", "JSON.parse()", "JSON.text()"], 1],

        ["Which operator checks strict equality?",
            ["=", "==", "===", "!="], 2],

        ["Which operator assigns a value?",
            ["=", "==", "===", ":"], 0],

        ["Which keyword creates a function?",
            ["function", "def", "func", "method"], 0],

        ["Which array method adds an item to the end?",
            ["push()", "add()", "append()", "insert()"], 0],

        ["Which array method removes the last item?",
            ["remove()", "pop()", "delete()", "last()"], 1],

        ["Which array method removes the first item?",
            ["shift()", "removeFirst()", "first()", "unshift()"], 0],

        ["Which method adds an item to the beginning of an array?",
            ["push()", "start()", "unshift()", "prepend()"], 2],

        ["Which keyword exits a loop?",
            ["stop", "exit", "break", "return-loop"], 2],

        ["Which keyword skips the current loop iteration?",
            ["skip", "continue", "next", "pass"], 1],

        ["Which function converts a string to an integer?",
            ["Integer()", "parseInt()", "toInteger()", "NumberInt()"], 1],

        ["Which operator represents logical AND?",
            ["||", "&&", "and", "&"], 1],

        ["Which operator represents logical OR?",
            ["||", "&&", "or", "|"], 0],

        ["Which object represents the browser document?",
            ["window", "document", "page", "html"], 1],

        ["Which method selects an element by its ID?",
            ["getElementById()", "selectById()", "findId()", "queryId()"], 0]
    ],


    // =================================================
    // NODE.JS
    // =================================================

    node: [

        ["What is Node.js primarily used for?",
            ["Server-side JavaScript", "CSS design", "Database storage only", "HTML formatting"], 0],

        ["Which engine executes JavaScript in Node.js?",
            ["SpiderMonkey", "V8", "JavaScriptCore", "Chakra"], 1],

        ["Which command checks the Node.js version?",
            ["node --version", "node check", "node version-check", "npm node"], 0],

        ["Which tool manages Node.js packages?",
            ["npm", "npx-only", "nodepkg", "package-manager-js"], 0],

        ["Which file commonly stores Node.js project metadata?",
            ["node.json", "package.json", "project.json", "npm.json"], 1],

        ["Which command initializes a Node.js project?",
            ["npm start", "npm init", "node init", "npm create-project"], 1],

        ["Which module provides file-system operations?",
            ["file", "fs", "filesystem", "files"], 1],

        ["Which module is commonly used to create an HTTP server?",
            ["http", "server", "web", "https-server"], 0],

        ["Which method creates an HTTP server?",
            ["http.createServer()", "http.server()", "http.start()", "server.create()"], 0],

        ["Which framework is commonly used for Node.js web applications?",
            ["Express", "Django", "Laravel", "Spring"], 0],

        ["Which command installs a package?",
            ["npm install", "node add", "npm package", "install-node"], 0],

        ["Which command starts a package script?",
            ["npm run", "npm execute", "node script", "package start-script"], 0],

        ["Which object provides information about the current process?",
            ["system", "process", "runtime", "nodeProcess"], 1],

        ["Which keyword imports a CommonJS module?",
            ["include()", "require()", "import()", "load()"], 1],

        ["Which syntax is used for ES module imports?",
            ["require", "include", "import", "load"], 2],

        ["Which object is used to read command-line arguments?",
            ["process.args", "process.argv", "node.args", "console.argv"], 1],

        ["Which module can generate cryptographic functions?",
            ["security", "crypto", "encrypt", "hash"], 1],

        ["Which module provides URL utilities?",
            ["url", "weburl", "uri", "address"], 0],

        ["Which module is used for operating-system information?",
            ["system", "os", "platform", "machine"], 1],

        ["Which module can create and manage events?",
            ["event", "events", "event-manager", "emit"], 1]
    ],


    // =================================================
    // REACT
    // =================================================

    react: [

        ["What is React primarily used for?",
            ["Building user interfaces", "Managing SQL databases", "Operating systems", "Writing CSS only"], 0],

        ["Who originally developed React?",
            ["Google", "Facebook", "Microsoft", "Amazon"], 1],

        ["What syntax is commonly used to describe UI in React?",
            ["JSX", "JXML", "RX", "ReactML"], 0],

        ["What does JSX allow developers to write?",
            ["HTML-like syntax in JavaScript", "SQL inside CSS", "Java inside HTML", "Python components"], 0],

        ["What is a React component?",
            ["A reusable UI building block", "A database table", "A CSS file", "A server"], 0],

        ["Which hook manages local component state?",
            ["useData", "useState", "useValue", "useComponent"], 1],

        ["Which hook performs side effects?",
            ["useEffect", "useSide", "useAction", "useEvent"], 0],

        ["What is the purpose of props?",
            ["Pass data to components", "Store SQL data", "Style CSS", "Start a server"], 0],

        ["Can props normally be directly modified by a child component?",
            ["Yes", "No", "Only with CSS", "Only in production"], 1],

        ["What does the virtual DOM represent?",
            ["A lightweight representation of the UI", "A database", "A server", "A CSS engine"], 0],

        ["Which method is commonly used to render lists in React?",
            ["map()", "loop()", "repeat()", "forEachOnly()"], 0],

        ["Why should list items have a key?",
            ["To help React identify items", "To encrypt data", "To create CSS", "To connect SQL"], 0],

        ["Which command commonly creates a React project with Vite?",
            ["npm create vite@latest", "react new", "npm react-create", "vite react-start"], 0],

        ["What is state in React?",
            ["Data managed by a component", "A CSS selector", "An HTML tag", "A server port"], 0],

        ["What happens when state changes?",
            ["React can re-render the component", "The browser closes", "The database resets", "CSS is deleted"], 0],

        ["What is a controlled input?",
            ["An input controlled by React state", "An input controlled by SQL", "An input without HTML", "A disabled input"], 0],

        ["Which file extension commonly contains JSX?",
            [".jsx", ".java", ".sql", ".cssonly"], 0],

        ["What is React Router used for?",
            ["Client-side routing", "Database backup", "CSS animation", "Server encryption"], 0],

        ["What does lifting state up mean?",
            ["Moving shared state to a common parent", "Deleting state", "Moving state to SQL", "Making a component larger"], 0],

        ["What is conditional rendering?",
            ["Rendering UI based on a condition", "Rendering SQL", "Rendering only CSS", "Rendering without JavaScript"], 0]
    ],


    // =================================================
    // SQL
    // =================================================

    sql: [

        ["What does SQL stand for?",
            ["Structured Query Language", "Simple Query Language", "System Query Logic", "Structured Question Language"], 0],

        ["Which command retrieves data?",
            ["GET", "SELECT", "FETCHDATA", "READ"], 1],

        ["Which command adds new rows?",
            ["ADD", "INSERT", "CREATE ROW", "PUT"], 1],

        ["Which command modifies existing rows?",
            ["CHANGE", "UPDATE", "MODIFY", "EDIT"], 1],

        ["Which command removes rows?",
            ["REMOVE", "DELETE", "DROP ROW", "CLEAR"], 1],

        ["Which command creates a table?",
            ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "BUILD TABLE"], 1],

        ["Which clause filters rows?",
            ["FILTER", "WHERE", "HAVINGONLY", "SELECT"], 1],

        ["Which clause sorts query results?",
            ["SORT BY", "ORDER BY", "ARRANGE BY", "SORT"], 1],

        ["Which keyword removes duplicate results?",
            ["UNIQUE", "DISTINCT", "NO-DUP", "SINGLE"], 1],

        ["Which function counts rows?",
            ["TOTAL()", "COUNT()", "ROWS()", "NUMBER()"], 1],

        ["Which function calculates an average?",
            ["AVERAGE()", "AVG()", "MEAN()", "MID()"], 1],

        ["Which function finds the largest value?",
            ["HIGH()", "MAX()", "LARGE()", "TOP()"], 1],

        ["Which function finds the smallest value?",
            ["LOW()", "MIN()", "SMALL()", "BOTTOM()"], 1],

        ["Which clause groups rows?",
            ["GROUP BY", "COLLECT BY", "GROUP", "ARRANGE BY"], 0],

        ["Which clause filters grouped results?",
            ["WHERE", "HAVING", "GROUPWHERE", "FILTER GROUP"], 1],

        ["Which keyword combines rows from related tables?",
            ["JOIN", "COMBINE", "MERGE TABLE", "CONNECT"], 0],

        ["Which JOIN returns matching rows from both tables?",
            ["INNER JOIN", "MATCH JOIN", "EQUAL JOIN", "COMMON JOIN"], 0],

        ["Which key uniquely identifies a row?",
            ["Foreign key", "Primary key", "Reference key", "Unique row"], 1],

        ["Which key references a key in another table?",
            ["Primary key", "Foreign key", "External key", "Link key"], 1],

        ["Which command removes a table?",
            ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "CLEAR TABLE"], 1]
    ]
};


// =====================================================
// QUESTION VARIATIONS
// =====================================================
//
// Each core question is converted into 5 versions.
// 20 core questions × 5 = 100 questions.
// =====================================================


const questionForms = [

    question => question,

    question => `Which option correctly answers: ${question}`,

    question => `Choose the correct answer. ${question}`,

    question => `In this topic, ${question}`,

    question => `Select the correct option for: ${question}`
];


// =====================================================
// BUILD 100 QUESTIONS FOR EACH TOPIC
// =====================================================


function buildQuestionBank(coreBank) {

    const result = [];

    coreBank.forEach((item, coreIndex) => {

        const originalQuestion = item[0];

        const options = item[1];

        const answer = item[2];


        questionForms.forEach((form, formIndex) => {

            result.push({

                question:
                    form(originalQuestion),

                options: [...options],

                answer: answer,

                concept:
                    coreIndex + 1,

                version:
                    formIndex + 1

            });

        });

    });


    return result;
}


// =====================================================
// FINAL QUESTION DATABASE
// =====================================================


const quizData = {

    html: buildQuestionBank(
        coreQuestions.html
    ),

    css: buildQuestionBank(
        coreQuestions.css
    ),

    javascript: buildQuestionBank(
        coreQuestions.javascript
    ),

    node: buildQuestionBank(
        coreQuestions.node
    ),

    react: buildQuestionBank(
        coreQuestions.react
    ),

    sql: buildQuestionBank(
        coreQuestions.sql
    )
};


// =====================================================
// TOPIC INFORMATION
// =====================================================


const topicInfo = {

    html: {
        name: "HTML",
        icon: "</>"
    },

    css: {
        name: "CSS",
        icon: "#"
    },

    javascript: {
        name: "JavaScript",
        icon: "JS"
    },

    node: {
        name: "Node.js",
        icon: "N"
    },

    react: {
        name: "React",
        icon: "⚛"
    },

    sql: {
        name: "SQL",
        icon: "DB"
    }
};


// =====================================================
// VARIABLES
// =====================================================


let selectedTopic = null;

let selectedSet = 1;

let currentQuestions = [];

let currentQuestion = 0;

let score = 0;

let answered = false;


// =====================================================
// HTML ELEMENTS
// =====================================================


const topicScreen =
    document.getElementById("topicScreen");

const setScreen =
    document.getElementById("setScreen");

const quizScreen =
    document.getElementById("quizScreen");

const resultScreen =
    document.getElementById("resultScreen");


const selectedTopicElement =
    document.getElementById("selectedTopic");

const selectedTopicIcon =
    document.getElementById("selectedTopicIcon");

const setGrid =
    document.getElementById("setGrid");


const quizTopicName =
    document.getElementById("quizTopicName");

const questionNumber =
    document.getElementById("questionNumber");

const progressPercent =
    document.getElementById("progressPercent");

const progress =
    document.getElementById("progress");

const category =
    document.getElementById("category");

const setLabel =
    document.getElementById("setLabel");

const question =
    document.getElementById("question");

const optionsContainer =
    document.getElementById("options");

const feedback =
    document.getElementById("feedback");

const nextBtn =
    document.getElementById("nextBtn");

const scoreDisplay =
    document.getElementById("score");


const resultTitle =
    document.getElementById("resultTitle");

const finalScore =
    document.getElementById("finalScore");

const resultMessage =
    document.getElementById("resultMessage");


const backToTopics =
    document.getElementById("backToTopics");

const backToSets =
    document.getElementById("backToSets");

const retryBtn =
    document.getElementById("retryBtn");

const setsBtn =
    document.getElementById("setsBtn");

const topicsBtn =
    document.getElementById("topicsBtn");


// =====================================================
// TOPIC BUTTONS
// =====================================================


document
    .querySelectorAll(".topic-card")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const topic =
                    this.dataset.topic;

                openTopic(topic);
            }
        );

    });


// =====================================================
// OPEN TOPIC
// =====================================================


function openTopic(topic) {

    selectedTopic = topic;

    const info =
        topicInfo[topic];


    selectedTopicElement.textContent =
        info.name;

    selectedTopicIcon.textContent =
        info.icon;


    createSetButtons();


    topicScreen.classList.add(
        "hidden"
    );

    quizScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.add(
        "hidden"
    );

    setScreen.classList.remove(
        "hidden"
    );
}


// =====================================================
// CREATE SET BUTTONS
// =====================================================


function createSetButtons() {

    setGrid.innerHTML = "";


    for (
        let i = 1;
        i <= 10;
        i++
    ) {

        const button =
            document.createElement("button");


        button.className =
            "set-card";


        button.innerHTML = `

            <strong>
                Set ${i}
            </strong>

            <span>
                10 Questions
            </span>

        `;


        button.addEventListener(
            "click",
            () => startQuiz(i)
        );


        setGrid.appendChild(button);

    }
}


// =====================================================
// START QUIZ
// =====================================================


function startQuiz(setNumber) {

    selectedSet = setNumber;

    score = 0;

    currentQuestion = 0;

    answered = false;


    /*
       Each topic has 100 questions.

       Set 1:
       questions 1 - 10

       Set 2:
       questions 11 - 20

       Set 3:
       questions 21 - 30

       ...

       Set 10:
       questions 91 - 100
    */


    const allQuestions =
        quizData[selectedTopic];


    const startIndex =
        (setNumber - 1) * 10;


    currentQuestions =
        allQuestions.slice(
            startIndex,
            startIndex + 10
        );


    scoreDisplay.textContent =
        "0";


    quizTopicName.textContent =
        topicInfo[selectedTopic].name;


    setLabel.textContent =
        `SET ${setNumber}`;


    setScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.add(
        "hidden"
    );

    quizScreen.classList.remove(
        "hidden"
    );


    loadQuestion();
}


// =====================================================
// LOAD QUESTION
// =====================================================


function loadQuestion() {

    answered = false;


    const current =
        currentQuestions[
            currentQuestion
        ];


    // Question number

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of 10`;


    // Progress

    const percentage =
        ((currentQuestion + 1) / 10) * 100;


    progress.style.width =
        `${percentage}%`;


    progressPercent.textContent =
        `${percentage}%`;


    // Category

    category.textContent =
        topicInfo[selectedTopic].name
            .toUpperCase();


    // Question

    question.textContent =
        current.question;


    // Remove previous options

    optionsContainer.innerHTML = "";


    // Create new options

    current.options.forEach(
        (optionText, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "option";


            button.innerHTML = `

                <span class="option-letter">
                    ${String.fromCharCode(
                        65 + index
                    )}
                </span>

                <span class="option-text">
                    ${optionText}
                </span>

            `;


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        index,
                        button
                    );

                }
            );


            optionsContainer.appendChild(
                button
            );

        }
    );


    // Reset feedback

    feedback.textContent = "";

    feedback.style.color = "";


    // Disable next

    nextBtn.disabled = true;


    // Button text

    if (
        currentQuestion === 9
    ) {

        nextBtn.innerHTML =
            `Finish Quiz <span>✓</span>`;

    } else {

        nextBtn.innerHTML =
            `Next Question <span>→</span>`;

    }
}


// =====================================================
// SELECT ANSWER
// =====================================================


function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) {

        return;
    }


    answered = true;


    const current =
        currentQuestions[
            currentQuestion
        ];


    const allOptions =
        document.querySelectorAll(
            ".option"
        );


    // Disable all options

    allOptions.forEach(
        button => {

            button.classList.add(
                "disabled"
            );

        }
    );


    // Correct answer

    if (
        selectedIndex ===
        current.answer
    ) {

        selectedButton.classList.add(
            "correct"
        );


        score++;


        scoreDisplay.textContent =
            score;


        feedback.textContent =
            "Correct! Great job.";


        feedback.style.color =
            "var(--correct)";

    }


    // Wrong answer

    else {

        selectedButton.classList.add(
            "wrong"
        );


        allOptions[
            current.answer
        ].classList.add(
            "correct"
        );


        feedback.textContent =
            `Wrong answer. Correct answer: ${current.options[current.answer]}`;


        feedback.style.color =
            "var(--wrong)";

    }


    nextBtn.disabled = false;
}


// =====================================================
// NEXT QUESTION
// =====================================================


nextBtn.addEventListener(
    "click",
    function () {

        if (!answered) {

            return;
        }


        currentQuestion++;


        if (
            currentQuestion >= 10
        ) {

            showResult();

            return;
        }


        loadQuestion();

    }
);


// =====================================================
// SHOW RESULT
// =====================================================


function showResult() {

    quizScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.remove(
        "hidden"
    );


    const topicName =
        topicInfo[selectedTopic].name;


    resultTitle.textContent =
        `${topicName} - Set ${selectedSet}`;


    finalScore.textContent =
        score;


    const percentage =
        score * 10;


    if (percentage === 100) {

        resultMessage.textContent =
            "Perfect score! You mastered this set.";

    }

    else if (percentage >= 80) {

        resultMessage.textContent =
            "Excellent work! You have strong knowledge.";

    }

    else if (percentage >= 60) {

        resultMessage.textContent =
            "Good job! Keep practicing to improve.";

    }

    else if (percentage >= 40) {

        resultMessage.textContent =
            "Not bad! More practice will help.";

    }

    else {

        resultMessage.textContent =
            "Keep learning and try this set again.";

    }
}


// =====================================================
// RETRY SAME SET
// =====================================================


retryBtn.addEventListener(
    "click",
    function () {

        startQuiz(
            selectedSet
        );

    }
);


// =====================================================
// CHOOSE ANOTHER SET
// =====================================================


setsBtn.addEventListener(
    "click",
    function () {

        resultScreen.classList.add(
            "hidden"
        );

        quizScreen.classList.add(
            "hidden"
        );

        topicScreen.classList.add(
            "hidden"
        );

        setScreen.classList.remove(
            "hidden"
        );

    }
);


// =====================================================
// CHOOSE ANOTHER TOPIC
// =====================================================


topicsBtn.addEventListener(
    "click",
    function () {

        resultScreen.classList.add(
            "hidden"
        );

        quizScreen.classList.add(
            "hidden"
        );

        setScreen.classList.add(
            "hidden"
        );

        topicScreen.classList.remove(
            "hidden"
        );

    }
);


// =====================================================
// BACK TO TOPICS
// =====================================================


backToTopics.addEventListener(
    "click",
    function () {

        setScreen.classList.add(
            "hidden"
        );

        topicScreen.classList.remove(
            "hidden"
        );

    }
);


// =====================================================
// BACK TO SETS
// =====================================================


backToSets.addEventListener(
    "click",
    function () {

        quizScreen.classList.add(
            "hidden"
        );

        setScreen.classList.remove(
            "hidden"
        );

    }
);