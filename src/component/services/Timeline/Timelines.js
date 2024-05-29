import { useEffect, useRef, useState } from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const timelineData = [
  {
    step: 'Step 1 :',
    title: 'Initial Consultation and Assessment',
    description: 'We start by getting to know you – your dreams, aspirations, and academic background. Through in-depth consultations, we understand your unique goals.',
  },
  {
    step: 'Step 2 :',
    title: 'Personalized Study Plan',
    description: 'Based on your aspirations, we craft a personalized study plan that outlines recommended destinations, universities, and programs that align with your ambitions.',
  },
  {
    step: 'Step 3 :',
    title: 'University Selection and Application',
    description: 'We assist you in choosing the right universities and guide you through the entire application process. From gathering documents to submitting applications, we ensure youre on the right track.',
  },
  {
    step: 'Step 4 :',
    title: 'Test Preparation and Support',
    description: 'Our test prep resources, study materials, and practice tests help you excel in required standardized exams, ensuring youre well-prepared for admission.',
  },
  {
    step: 'Step 5 :',
    title: 'Application Submission and Review',
    description: 'We help you submit polished applications, ensuring all necessary materials are included. Our team reviews your essays and personal statements, offering valuable feedback.',
  },
  {
    step: 'Step 6 :',
    title: 'Visa Guidance and Pre-Departure Assistance',
    description: 'Based on your aspirations, we craft a personalized study plan that outlines recommended destinations, universities, and programs that align with your ambitions.',
  },
  {
    step: 'Step 7 :',
    title: 'Arrival and Adaptation',
    description: 'As you embark on your study abroad journey, were here to help you transition smoothly. We assist with initial challenges, ensuring a confident start to your new academic adventure.',
  },
  {
    step: 'Step 8 :',
    title: 'Ongoing Support and Networking',
    description: 'Throughout your studies, we remain a constant source of support. Our team assists with academic and personal concerns, and we connect you with other students and alumni for networking opportunities.',
  },
  {
    step: 'Step 9 :',
    title: 'Transition and Future Opportunities',
    description: 'When your studies conclude, our guidance doesnt end. We help you transition back to your home country or explore further academic and career opportunities.',
  },
  {
    step: 'Step 10 :',
    title: 'Success Stories',
    description: 'Dont just take our word for it – hear from students whove successfully achieved their study abroad dreams with [Agency Name]. Read their inspiring stories of growth, learning, and success.',
  }
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = elementsRef.current.indexOf(entry.target);
          setActiveIndex(index);
        }
      });
    }, options);

    elementsRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <div className="relative  flex flex-col items-center">
      {/* mt-[900px] */}
      <div className="absolute w-1 bg-gray-200 dark:bg-gray-700 h-full left-1/2 transform -translate-x-1/2">
        <div
          className="bg-blue-500 h-full transition-all duration-300"
          style={{
            height: activeIndex !== null
              ? `${((activeIndex + 1) / timelineData.length) * 100}%` // 100
              : '0%',
          }}
        ></div>
      </div>
      <ol className="w-full">
        {timelineData.map((item, index) => (
          <li
            key={index}
            ref={(el) => (elementsRef.current[index] = el)}
            className={` mb-10 ms-6 flex justify-between items-center w-full ${
              index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div className="order-1 w-5/12"></div>
            <IoIosCheckmarkCircleOutline className={`absolute flex items-center justify-center  rounded-full start-[49%]   dark:ring-gray-900 ${
                  activeIndex >= index ? 'bg-green-500' : 'bg-blue-100 dark:bg-blue-900'
                }`} />
                {/* w-6 h-6 -start-3 */}

                {/* border bg-white border-gray-200 shadow*/}
            <div className={`order-1 w-5/12 px-4 py-2  rounded-lg  dark:bg-gray-800 dark:border-gray-700 ${
              index % 2 === 0 ? ' ml-[24%] ' : ' mr-[30%] text-right'
            } ${
              activeIndex >= index ? 'opacity-90' : 'opacity-30'
            }`}>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.step}
              </time>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
                
              </h3>
              
              
              <h1 className="text-xs font-bold text-gray-500 dark:text-gray-400">
                {item.description}
              </h1>
              
              
              
            </div>
            <div className="order-1 w-5/12"></div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
{/* <span
                className={`absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 ${
                  activeIndex >= index ? 'bg-green-500' : 'bg-blue-100 dark:bg-blue-900'
                }`}

              > 
              
              className={`w-2.5 h-2.5 ${
                    activeIndex >= index ? 'text-white' : 'text-blue-800 dark:text-blue-300'
                  }`}
              */}
               