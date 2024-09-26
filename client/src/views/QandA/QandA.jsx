
import { FaSmile, FaInfoCircle, FaHeart, FaArrowRight, FaPause } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md'; // Import fingerprint icon

const QandA = () => {
  const faqs = [
    {
      id: 1,
      icon: <FaSmile />,
      question: 'There is no one who loves pain itself, who seeks?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
    },
    {
      id: 5,
      icon: <FaPause />, // Adding the pause icon
      question: 'Why do we use it?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      id: 6,
      icon: <MdFingerprint />, // Adding the fingerprint icon
      question: 'Where can I get some?',
      answer:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
      id: 2,
      icon: <FaInfoCircle />,
      question: 'There is no one who loves pain itself, who seeks?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
    },
    {
      id: 3,
      icon: <FaHeart />,
      question: 'There is no one who loves pain itself, who seeks?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
    },
    {
      id: 4,
      icon: <FaArrowRight />,
      question: 'There is no one who loves pain itself, who seeks?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.',
    },
   
  ];

  return (
 
    <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-center text-sm mb-6">
        Stuck on something? We are here to help with all your questions and answers in one place.
      </p>
      {faqs.map((faq) => (
        <div key={faq.id} className="flex items-start mb-6">
          <div className="text-blue-500 text-2xl mr-4">{faq.icon}</div>
          <div>
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QandA;

