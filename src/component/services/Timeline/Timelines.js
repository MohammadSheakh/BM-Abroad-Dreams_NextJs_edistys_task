import { useEffect, useRef, useState } from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const timelineData = [
  {
    title: 'Flowbite Application UI v2.0.0',
    date: 'Released on January 13th, 2022',
    description: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.',
    latest: true,
    link: '#',
  },
  {
    title: 'Flowbite Figma v1.3.0',
    date: 'Released on December 7th, 2021',
    description: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
  },
  {
    title: 'Flowbite Library v1.2.2',
    date: 'Released on December 2nd, 2021',
    description: 'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.',
  },
  {
    title: 'New Feature Release v1.1.0',
    date: 'Released on November 15th, 2021',
    description: 'Introducing new features including improved accessibility and better performance.',
  },
  {
    title: 'Bug Fixes v1.0.5',
    date: 'Released on October 30th, 2021',
    description: 'Various bug fixes and minor improvements.',
  },
  {
    title: 'Initial Release v1.0.0',
    date: 'Released on October 1st, 2021',
    description: 'The initial release of our application, packed with features to get you started.',
  },
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
    <div className="relative mt-[900px] flex flex-col items-center">
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


            <div className={`order-1 w-5/12 px-4 py-2  border bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${
              index % 2 === 0 ? ' ml-[24%]' : ' mr-[30%]'
            }`}>
              
              <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
                
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.date}
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
              
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
               