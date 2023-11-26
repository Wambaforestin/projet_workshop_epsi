const translations = {
    fr: {
        Q1: {
            question: "Q1 : À quoi sert HTML ?",
            choice1: "À mettre en forme des pages web",
            choice2: "À structurer du contenu dans une page web",
            choice3: "À créer des pages dynamiques",
            choice4: "À concurrencer Google et Facebook",
            choice5: "À gérer des bases de données",
            correctAnswer: "La réponse correcte est :",
        },
        Q2: {
            question: "Q2 : Comment représenter un paragraphe en HTML ?",
            choice1: "<ul>",
            choice2: "<li>",
            choice3: "<h1>",
            choice4: "<p>",
            choice5: "<paragraph>",
        },
        Q3: {
            question: "Q3 : Comment représenter une liste en HTML ?",
            choice1: "<ul>",
            choice2: "<div>",
            choice3: "<h1>",
            choice4: "<list>",
            choice5: "<li>",
        },
        Q4: {
            question: "Q4 : Citez un attribut HTML lié aux images",
            choice1: 'class ',
            choice2: 'href',
            choice3: 'src',
            choice4: 'link',
            choice5: "data",
        },
        Q5: {
            question: "Q5 : Quel attribut permet d'indiquer la destination d'un lien ?",
            choice1: "class",
            choice2: "src",
            choice3: "link",
            choice4: "a",
            choice5: "href",
        },
        Q6: {
            question: "Q6 : Qu'est ce qu'un navigateur web ?",
            choice1: "Un logiciel capable d'interpréter et d'afficher du code HTML",
            choice2: "Un outil permettant d'accéder à Internet",
            choice3: "Un réseau social global",
            choice4: "La toute première application mondiale",
            choice5: "Une interface pour lire et recevoir des e-mails",
        },
        Q7: {
            question: "Q7 : Laquelle de ces syntaxes est correcte pour écrire un commentaire en HTML ?",
            choice1: "<!--Commentaire-->",
            choice2: "<--Commentaire-->",
            choice3: "<--Commentaire--!>",
            choice4: "<!--Commentaire--!>",
            choice5: "<--Commentaire-!!>",
        },
        Q8: {
            question: "Q8 : A quoi sert la balise <a> ?",
            choice1: "A mettre le texte en gras",
            choice2: "A faire un lien ou à créer une ancre interne.",
            choice3: "A créer une marge à droite du texte.",
            choice4: "A mettre le texte en majuscule",
            choice5: "A faire un alinéa",
        },
        Q9: {
            question: "Q9 : Quelle balise HTML est utilisée pour définir l'en-tête d'une page web ?",
            choice1: "<header>",
            choice2: "<title>",
            choice3: "<head>",
            choice4: "<top>",
            choice5: "<h1>",
        },
        Q10: {
            question: "Q10 : Que signifie HTML ?",
            choice1: "Hyper Transfer Markup Language",
            choice2: "Hyper Text Markup Language",
            choice3: "High Tech Modern Language",
            choice4: "Hyperlink and Text Markup Language",
            choice5: "Home Tool Markup Language",
        },
    },
    punu: {
        Q1: {
            question: "Q1: HTML esenga na nini?",
            choice1: "Ya kokamwa masolo ya site web",
            choice2: "Ya kozwa molongo na site web moko",
            choice3: "Ya kokokola masolo ya site web moko",
            choice4: "Ya kosilisa Google na Facebook",
            choice5: "Ya kosila ndembo ya base de données",
        },
        Q2: {
            question: "Q2: Minaya mô mboma kô kome HTML",
            choice1: "<ul>",
            choice2: "<li>",
            choice3: "<h1>",
            choice4: "<p>",
            choice5: "<paragraph>",
        },
        Q3: {
            question: "Q3 : Minaya mô nduriri kô kome HTML",
            choice1: "<ul>",
            choice2: "<div>",
            choice3: "<h1>",
            choice4: "<list>",
            choice5: "<li>",
        },
        Q4: {
            question: "Q4 : Telemi na attribut HTML elobi na imaj?",
            choice1: 'class ',
            choice2: 'href',
            choice3: 'src',
            choice4: 'link',
            choice5: "data",
        },
        Q5: {
            question: "Q5 : Nini attribut ezali koyoka kozwa koseka ya yango na lien?",
            choice1: "class",
            choice2: "src",
            choice3: "link",
            choice4: "a",
            choice5: "href",
        },
        Q6: {
            question: "Q6 : kisa on navigatè wèb ye?",
            choice1: "Logiciel moko oyo esalaka na kosakola na koyeba na code HTML",
            choice2: "Outil oyo esalaka na kosalaka na Internet",
            choice3: "Mboka mobimba oyo ekomelaki",
            choice4: "Elongoli ya mbala moko ya monde",
            choice5: "Interface oyo esalaka na kolia na koyoka e-mails",
        },
        Q7: {
            question: "Q7 : Nani na syntaxe ya mokusepeli ezali likambo ya koseka kozwa commentaire na HTML?",
            choice1: "<!--Commentaire-->",
            choice2: "<--Commentaire-->",
            choice3: "<--Commentaire--!>",
            choice4: "<!--Commentaire--!>",
            choice5: "<--Commentaire-!!>",
        },
        Q8: {
            question: "Q8 : kisa baliz <a> sèvi ak ?",
            choice1: "Kokotana liboso ya texte te",
            choice2: "Kokokola lien moko mpo na kozwa ancre ya ndenge",
            choice3: "Kokokola marge ya droit ya texte",
            choice4: "Kosala texte en majuscule",
            choice5: "Koyoka alinéa",
        },
        Q9: {
            question: "Q9 : Balise HTML nani ekomi na kozwa en-tête na page web?",
            choice1: "<header>",
            choice2: "<title>",
            choice3: "<head>",
            choice4: "<top>",
            choice5: "<h1>",
        },
        Q10: {
            question: "Q10 : Kisa HTML vle di ?",
            choice1: "Hyper Transfer Markup Language",
            choice2: "Hyper Text Markup Language",
            choice3: "High Tech Modern Language",
            choice4: "Hyperlink and Text Markup Language",
            choice5: "Home Tool Markup Language",
        },
    },
};

const questionTextToKey = {
    [translations.fr.Q1.question]: 'Q1',
    [translations.fr.Q2.question]: 'Q2',
    [translations.fr.Q3.question]: 'Q3',
    [translations.fr.Q4.question]: 'Q4',
    [translations.fr.Q5.question]: 'Q5',
    [translations.fr.Q6.question]: 'Q6',
    [translations.fr.Q7.question]: 'Q7',
    [translations.fr.Q8.question]: 'Q8',
    [translations.fr.Q9.question]: 'Q9',
    [translations.fr.Q10.question]: 'Q10',
    [translations.punu.Q1.question]: 'Q1',
    [translations.punu.Q2.question]: 'Q2',
    [translations.punu.Q3.question]: 'Q3',
    [translations.punu.Q4.question]: 'Q4',
    [translations.punu.Q5.question]: 'Q5',
    [translations.punu.Q6.question]: 'Q6',
    [translations.punu.Q7.question]: 'Q7',
    [translations.punu.Q8.question]: 'Q8',
    [translations.punu.Q9.question]: 'Q9',
    [translations.punu.Q10.question]: 'Q10',

};

let currentLanguage = 'fr'; // Langue initiale
let currentQuestionKey = 'Q1'; // Clé de la question actuelle

function loadTranslations(language, currentQuestionKey, correctAnswerText) {
    const translatedTexts = translations[language][currentQuestionKey];
    
    // Mettre à jour le texte de la question
    document.getElementById('question').textContent = translatedTexts.question;

    // Mettre à jour le texte des choix de réponse
    for (let i = 1; i <= 5; i++) {
        const choiceTextElement = document.querySelector(`.choice${i}`);
        choiceTextElement.textContent = translatedTexts['choice' + i];
    }

    // Mettre à jour le texte de la réponse correcte
    const correctAnswerElement = document.getElementById('correct-answer-text');
    correctAnswerElement.textContent = correctAnswerText; // Utilisez la valeur passée en paramètre
}

function updateCorrectAnswer(language) {
    const correctAnswerText = translations[language].correctAnswer;
    const correctAnswerElement = document.getElementById('correct-answer-text');
    correctAnswerElement.textContent = correctAnswerText;
}   


// Chargez les traductions initiales au chargement de la page
window.onload = () => {
    loadTranslations(currentLanguage, currentQuestionKey);
};

document.getElementById('change-language').addEventListener('click', () => {
    // Basculez entre les langues (fr <-> en)
    currentLanguage = currentLanguage === 'fr' ? 'punu' : 'fr';

    // Obtenez la question actuellement affichée
    const currentQuestionElement = document.getElementById('question');
    const currentQuestionText = currentQuestionElement.textContent.trim();

    // Obtenez la clé de la question à partir du dictionnaire
    const newQuestionKey = questionTextToKey[currentQuestionText];

    // Mettez à jour la clé de la question actuelle
    currentQuestionKey = newQuestionKey;

    // Chargez les traductions pour la nouvelle langue et la nouvelle question
    loadTranslations(currentLanguage, currentQuestionKey);

    // Mettez à jour l'attribut de données du bouton avec la nouvelle langue
    document.getElementById('change-language').setAttribute('data-language', currentLanguage);
});

const question = document.querySelector ('#question');
const choices = Array.from(document.querySelectorAll ('.choice-text'));
const scoreText = document.querySelector('#score');
const progressText = document.querySelector ('#progressText');
const progressBarFull = document.querySelector ('#progressBarFull');



let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

const questions = [
{
    key: 'Q1',
question: "Q1 : À quoi sert HTML ?",
choice1: "À mettre en forme des pages web",
choice2: "À structurer du contenu dans une page web",
choice3: "À créer des pages dynamiques",
choice4: "À concurrencer Google et Facebook",
choice5: "À gérer des bases de données",
answer: 2,
},

{
    key: 'Q2',
question: "Q2 : Comment représenter un paragraphe en HTML ?",
choice1: "<ul>",
choice2: "<li>",
choice3: "<h1>",
choice4: "<p>",
choice5: "<paragraph>",
answer: 4,
},

{
    key: 'Q3',
question: "Q3 : Comment représenter une liste en HTML ?",
choice1: "<ul>",
choice2: "<div>",
choice3: "<h1>",
choice4: "<list>",
choice5: "<li>",
answer: 1,
},

{
    key: 'Q4',
question: "Q4 : Citez un attribut HTML lié aux images",
choice1: 'class ',
choice2: 'href',
choice3: 'src',
choice4: 'link',
choice5: "data",
answer: 3,
},

{
    key: 'Q5',
question: "Q5 : Quel attribut permet d'indiquer la destination d'un lien ?",
choice1: "class",
choice2: "src",
choice3: "link",
choice4: "a",
choice5: "href",
answer: 5,
},

{
    key: 'Q6',
question: "Q6 : Qu'est ce qu'un navigateur web ?",
choice1: "Un logiciel capable d'interpréter et d'afficher du code HTML",
choice2: "Un outil permettant d'accéder à Internet",
choice3: "Un réseau social global",
choice4: "La toute première application mondiale",
choice5: "Une interface pour lire et recevoir des e-mails",
answer: 1,
},

{
    key: 'Q7',
question: "Q7 : Laquelle de ces syntaxes est correcte pour écrire un commentaire en HTML ?",
choice1: "<!--Commentaire-->",
choice2: "<--Commentaire-->",
choice3: "<--Commentaire--!>",
choice4: "<!--Commentaire--!>",
choice5: "<--Commentaire-!!>",
answer: 1,
},

{
    key: 'Q8',
question: "Q8 : A quoi sert la balise <a> ?",
choice1: "A mettre le texte en gras",
choice2: "A faire un lien ou à créer une ancre interne.",
choice3: "A créer une marge à droite du texte.",
choice4: "A mettre le texte en majuscule",
choice5: "A faire un alinéa",
answer: 2,
},

{
    key: 'Q9',
question: "Q9 : Quelle balise HTML est utilisée pour définir l'en-tête d'une page web ?",
choice1: "<header>",
choice2: "<title>",
choice3: "<head>",
choice4: "<top>",
choice5: "<h1>",
answer: 3,
},

{
    key: 'Q10',
question: "Q10 : Que signifie HTML ?",
choice1: "Hyper Transfer Markup Language",
choice2: "Hyper Text Markup Language",
choice3: "High Tech Modern Language",
choice4: "Hyperlink and Text Markup Language",
choice5: "Home Tool Markup Language",
answer: 2,
}

]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startQuiz = () => {
questionCounter = 0
score = 0
availableQuestions = [...questions]
getNewQuestion()
}


getNewQuestion = () => {
    if (questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }

    currentQuestion = questions[questionCounter];
    questionCounter++;

    progressText.innerText = `Question ${questionCounter} de ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    // Mise à jour de la question affichée
    question.innerText = translations[currentLanguage][currentQuestion.key].question;

    // Mise à jour des choix de réponse
    for (let i = 1; i <= 5; i++) {
        const choiceTextElement = document.querySelector(`.choice${i}`);
        choiceTextElement.textContent = translations[currentLanguage][currentQuestion.key]['choice' + i];
    }

    acceptingAnswers = true;
};
choices.forEach (choice =>{
    choice.addEventListener('click', e =>{
    if (!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

    if (classToApply === 'correct') {
        incrementScore(SCORE_POINTS)
    } else {
        // Réponse incorrecte : Afficher la réponse correcte traduite
        const correctChoiceNumber = currentQuestion.answer;
        const correctAnswerText = translations[currentLanguage][currentQuestion.key]['choice' + correctChoiceNumber];
        
        // Appeler la fonction pour mettre à jour les traductions
        loadTranslations(currentLanguage, currentQuestion.key, correctAnswerText);
        
        document.getElementById('correct-answer').style.display = 'block';
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
        document.getElementById('correct-answer').style.display = 'none'; // Masquer la réponse correcte
    }, 1000);
    })
})

incrementScore = num => {
    score+= num
    scoreText.innerText = score
}

startQuiz()