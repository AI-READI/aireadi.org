import { AiFillQuestionCircle } from 'react-icons/ai';

const QuestionsList = [
  {
    question: 'What do you mean by "Figma assets"?',
    answer:
      'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.',
  },
  {
    question: 'What does "lifetime access" exactly mean?',
    answer:
      'Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.',
  },
  {
    question: 'How does support work?',
    answer: `We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project.Feel free to contact us and we'll help you out as soon as we can.`,
  },
  {
    question: 'I want to build more than one project. Is that allowed?',
    answer:
      'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.',
  },
  {
    question: 'What does "free updates" include?',
    answer:
      'Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.',
  },
  {
    question: 'What does the free version include?',
    answer: `We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project.Feel free to contact us and we'll help you out as soon as we can.`,
  },
  {
    question: 'What is the difference between Windster and Tailwind UI?',
    answer:
      'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.',
  },
  {
    question: 'Can I use Windster in open-source projects?',
    answer:
      'Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.',
  },
];

export default function FaqList() {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6'>
        <h2 className='mb-8 text-4xl font-extrabold tracking-tight text-gray-900'>
          Frequently asked questions
        </h2>
        <div className='grid border-t border-gray-200 pt-4 text-left md:grid-cols-2 md:gap-x-6 md:gap-y-8'>
          {QuestionsList.map((question) => (
            <div key={question.question}>
              <h3 className='mb-3 flex items-center text-lg font-medium text-gray-900'>
                <AiFillQuestionCircle size={20} />
                <span className='pl-2'>{question.question}</span>
              </h3>
              <p className='text-gray-500'>{question.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
