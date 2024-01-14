import MultiAnswerComponent from './multiAnswers';
import SingleAnswerComponent from './singleAnswer';
import './style.css';

const questions = [
 {
  question: 'Хто тримає цей район?',
  answers: [
   'Пес Патрон.',
   'Вітя Желєзяка.',
   'Сірьога Унітаз.'
  ],
  correctAnswer: 0
 },
 {
  question: 'Хто винайшов консервну банку для консервування їжі в 1810 році?',
  answers: [
   'Пітер Дуранд',
   'Артур Морган',
   'Джон МакТавіш'
  ],
  correctAnswer: 0
 },
 {
  question: 'Де жінка бере гроші?',
  answers: [
   'В тумбочці.',
   'На роботі.',
   'В банку.'
  ],
  correctAnswer: 0
 }
 ,
 {
  question: 'Не придумав питання',
  answers: [
   '0',
   '1',
   '2'
  ],
  correctAnswer: [0, 2]
 }
];


const QuestionsComponent = () => {

 return (
  <div className='questions'>
   <h1>Questions</h1>
   <div className='container'>

    {
     questions.map(el => (
      Array.isArray(el.correctAnswer)
       ? <MultiAnswerComponent
        answers={el.answers}
        question={el.question}
        correctAnswer={el.correctAnswer}
       />
       : <SingleAnswerComponent
        answers={el.answers}
        question={el.question}
        correctAnswer={el.correctAnswer}
       />
     ))
    }

   </div>
  </div>
 );
};

export default QuestionsComponent;