const questionsLevel1 = [
  {
    id: 1,
    type: 'text',
    question: 'Wie heißt die Hauptstadt von Frankreich?',
    mediaUrl: null,
    answers: ['Paris', 'Rom', 'Berlin', 'Madrid'],
    correctIndex: 0
  },
  {
    id: 2,
    type: 'image',
    question: 'Welches Tier ist auf dem Bild zu sehen?',
    mediaUrl: '/media/tier1.jpg',
    answers: ['Hund', 'Katze', 'Maus', 'Vogel'],
    correctIndex: 1
  },
  {
    id: 3,
    type: 'audio',
    question: 'Welche Sprache ist das ?',
    mediaUrl: "/media/Video_Project.mp3",
    answers: ['Alt Nordisch' ,'Latein','Alt Griechisch','Keltisch'],
    correctIndex: 0
  },
];

const questionsLevel2 = [
  {
    id: 1,
    type: 'text',
    question: 'In welchem Jahr begann der Erste Weltkrieg?',
    mediaUrl: null,
    answers: ['1912', '1914', '1918', '1920'],
    correctIndex: 1
  }
];

const questionsLevel3 = [
  {
    id: 1,
    type: 'text',
    question: 'Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?',
    mediaUrl: null,
    answers: ['Konrad Adenauer', 'Willy Brandt', 'Helmut Kohl', 'Ludwig Erhard'],
    correctIndex: 0
  }
];

const questionsLevel4 = [
  {
    id: 1,
    type: 'text',
    question: 'Welche antike Stadt wurde 79 n. Chr. durch den Vesuvausbruch zerstört?',
    mediaUrl: null,
    answers: ['Athen', 'Pompeji', 'Karthago', 'Troja'],
    correctIndex: 1
  }
];

const questionsLevel5 = [
  {
    id: 1,
    type: 'text',
    question: 'Welcher Vertrag legte 1648 das Ende des Dreißigjährigen Krieges fest?',
    mediaUrl: null,
    answers: [
      'Vertrag von Versailles',
      'Westfälischer Friede',
      'Wiener Kongress',
      'Vertrag von Utrecht'
    ],
    correctIndex: 1
  }
];

function getQuestionsByLevel(level) {
  const allQuestions = {
    1: questionsLevel1,
    2: questionsLevel2,
    3: questionsLevel3,
    4: questionsLevel4,
    5: questionsLevel5
  };
  return allQuestions[level] || questionsLevel1;
}

module.exports = { 
  questionsLevel1, 
  questionsLevel2, 
  questionsLevel3, 
  questionsLevel4, 
  questionsLevel5,
  getQuestionsByLevel 
};

