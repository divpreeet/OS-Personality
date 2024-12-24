const questions = [
    {
        question: "How do you approach learning a new technology?",
        answers: [
            { text: "I dive deep into documentation and experiment extensively", score: { linux: 3, macos: 1, windows: 0 } },
            { text: "I prefer user-friendly interfaces and guided tutorials", score: { linux: 0, macos: 2, windows: 2 } },
            { text: "I look for the most popular and widely supported option", score: { linux: 1, macos: 1, windows: 3 } },
            { text: "I ask friends or colleagues for recommendations", score: { linux: 1, macos: 3, windows: 1 } }
        ]
    },
    {
        question: "What's your preferred way of customizing your computer?",
        answers: [
            { text: "I like to tweak every little setting and even modify source code", score: { linux: 3, macos: 0, windows: 1 } },
            { text: "I enjoy a balance of aesthetics and functionality", score: { linux: 1, macos: 3, windows: 1 } },
            { text: "I prefer a standard setup with minimal changes", score: { linux: 0, macos: 1, windows: 3 } },
            { text: "I use third-party tools to enhance my experience", score: { linux: 2, macos: 2, windows: 2 } }
        ]
    },
    {
        question: "How do you feel about software updates?",
        answers: [
            { text: "I love being on the cutting edge, even if it means potential instability", score: { linux: 3, macos: 1, windows: 0 } },
            { text: "I appreciate regular, seamless updates", score: { linux: 1, macos: 3, windows: 1 } },
            { text: "I prefer stability over new features", score: { linux: 0, macos: 1, windows: 3 } },
            { text: "I like to have control over what gets updated and when", score: { linux: 2, macos: 0, windows: 2 } }
        ]
    },
    {
        question: "What's your approach to troubleshooting computer issues?",
        answers: [
            { text: "I enjoy digging into log files and using command-line tools", score: { linux: 3, macos: 1, windows: 0 } },
            { text: "I prefer using built-in diagnostic tools and official support channels", score: { linux: 0, macos: 2, windows: 2 } },
            { text: "I search online forums and community discussions", score: { linux: 2, macos: 1, windows: 2 } },
            { text: "I ask a tech-savvy friend or professional for help", score: { linux: 0, macos: 2, windows: 3 } }
        ]
    },
    {
        question: "How important is the visual design of your operating system to you?",
        answers: [
            { text: "Functionality is more important than aesthetics", score: { linux: 3, macos: 0, windows: 1 } },
            { text: "I value a sleek, cohesive design", score: { linux: 0, macos: 3, windows: 1 } },
            { text: "I like a balance of form and function", score: { linux: 1, macos: 2, windows: 2 } },
            { text: "I enjoy customizing the look to my personal taste", score: { linux: 2, macos: 1, windows: 3 } }
        ]
    },
    {
        question: "How do you prefer to install software on your computer?",
        answers: [
            { text: "I compile from source code or use package managers", score: { linux: 3, macos: 1, windows: 0 } },
            { text: "I prefer a centralized app store", score: { linux: 0, macos: 3, windows: 1 } },
            { text: "I download installers from websites", score: { linux: 1, macos: 0, windows: 3 } },
            { text: "I use a mix of methods depending on the software", score: { linux: 2, macos: 2, windows: 2 } }
        ]
    },
    {
        question: "What's your stance on open-source software?",
        answers: [
            { text: "I strongly prefer open-source and contribute when I can", score: { linux: 3, macos: 1, windows: 0 } },
            { text: "I appreciate open-source but also use proprietary software", score: { linux: 2, macos: 2, windows: 1 } },
            { text: "I don't really think about whether software is open-source or not", score: { linux: 0, macos: 1, windows: 3 } },
            { text: "I prefer well-supported commercial software", score: { linux: 0, macos: 2, windows: 2 } }
        ]
    },
    {
        question: "How often do you use the command line or terminal?",
        answers: [
            { text: "Daily, it's an essential part of my workflow", score: { linux: 3, macos: 2, windows: 0 } },
            { text: "Occasionally, when I need to perform specific tasks", score: { linux: 2, macos: 1, windows: 1 } },
            { text: "Rarely, I prefer graphical interfaces", score: { linux: 0, macos: 2, windows: 3 } },
            { text: "Never, I avoid it if possible", score: { linux: 0, macos: 1, windows: 2 } }
        ]
    },
    {
        question: "What's your preferred method for backing up your data?",
        answers: [
            { text: "I use custom scripts and command-line tools", score: { linux: 3, macos: 1, windows: 0 } },
            { text: "I rely on built-in backup solutions", score: { linux: 0, macos: 3, windows: 2 } },
            { text: "I use third-party backup software", score: { linux: 1, macos: 1, windows: 3 } },
            { text: "I manually copy important files to external storage", score: { linux: 2, macos: 0, windows: 1 } }
        ]
    },
    {
        question: "How do you feel about gaming on your computer?",
        answers: [
            { text: "I prefer console gaming or don't game at all", score: { linux: 1, macos: 3, windows: 0 } },
            { text: "I enjoy gaming and want the best performance and compatibility", score: { linux: 0, macos: 1, windows: 3 } },
            { text: "I'm interested in gaming on alternative platforms", score: { linux: 3, macos: 0, windows: 1 } },
            { text: "I play games occasionally but it's not a priority", score: { linux: 2, macos: 2, windows: 2 } }
        ]
    }
];

let currentQuestion = 0;
let scores = { linux: 0, macos: 0, windows: 0 };

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }

    const quizHeader = document.getElementById('quiz-header');
    quizHeader.textContent = `Question ${currentQuestion + 1}/${questions.length}`;

    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = '';

    const question = document.createElement('div');
    question.className = 'question';
    question.innerText = questions[currentQuestion].question;
    quizDiv.appendChild(question);

    const answerContainer = document.createElement('div');
    answerContainer.className = 'button-group';
    quizDiv.appendChild(answerContainer);

    questions[currentQuestion].answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'button answer-btn';
        button.innerText = answer.text;
        button.onclick = () => selectAnswer(index);
        answerContainer.appendChild(button);
    });

    updateProgressBar();
}

function selectAnswer(index) {
    const selectedAnswer = questions[currentQuestion].answers[index];
    for (const os in selectedAnswer.score) {
        scores[os] += selectedAnswer.score[os];
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizDiv = document.getElementById('quiz');
    quizDiv.className = 'hidden';

    const resultDiv = document.getElementById('result');
    resultDiv.className = '';

    const maxScore = Math.max(scores.linux, scores.macos, scores.windows);
    let personalityType = '';
    let description = '';

    if (scores.linux === maxScore) {
        personalityType = 'Linux Enthusiast';
        description = "You're a true tinkerer who loves having complete control over your system. You enjoy diving deep into technology and aren't afraid of a challenge. Open-source software and customization are your jam! You likely appreciate the flexibility and power that Linux offers, and you're not afraid to use the command line to get things done.";
    } else if (scores.macos === maxScore) {
        personalityType = 'macOS Aficionado';
        description = "You appreciate a seamless blend of style and functionality. You value intuitive design and are willing to invest in a premium experience. Creativity and productivity go hand in hand in your world. You likely enjoy the ecosystem integration that Apple provides and the balance between user-friendliness and powerful features that macOS offers.";
    } else {
        personalityType = 'Windows Pragmatist';
        description = "You're practical and value widespread compatibility. You appreciate a balance of user-friendliness and customization options. Gaming and business applications might be high on your priority list. You likely enjoy the vast software library available for Windows and its adaptability to various use cases, from casual use to professional work environments.";
    }

    resultDiv.innerHTML = `
        <h2>Your OS Personality:</h2>
        <p class="personality-type">${personalityType}</p>
        <p>${description}</p>
        <div class="score-breakdown">
            <p>Score Breakdown:</p>
            <ul>
                <li>Linux: ${scores.linux}</li>
                <li>macOS: ${scores.macos}</li>
                <li>Windows: ${scores.windows}</li>
            </ul>
        </div>
    `;

    document.getElementById('retry-btn').classList.remove('hidden');

    updateProgressBar();
}

function retryQuiz() {
    currentQuestion = 0;
    scores = { linux: 0, macos: 0, windows: 0 };
    document.getElementById('quiz').className = '';
    document.getElementById('result').className = 'hidden';
    document.getElementById('retry-btn').classList.add('hidden');
    loadQuestion();
}

function updateProgressBar() {
    const progress = document.getElementById('progress');
    const percentage = ((currentQuestion + 1) / questions.length) * 100;
    progress.style.width = `${percentage}%`;
}

document.addEventListener('DOMContentLoaded', loadQuestion);

