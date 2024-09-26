import React from "react";
import { SlCalender } from "react-icons/sl";
import { LiaCommentSolid } from "react-icons/lia";
import image1 from "./images/Rectangle 43.png";
import image2 from "./images/Rectangle 44.png";
import image3 from "./images/Rectangle 45.png";

const NewsCard = ({ image, title, date, comments, description }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden mb-6">
      {/* Adjust width and height for mobile and larger screens */}
      <div className="w-full md:w-1/2 h-48 md:h-auto">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center rounded-2xl"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-between">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
        <div className="flex items-center text-gray-500 text-xs md:text-sm mb-4">
          <span className="mr-4 flex items-center gap-2">
            <SlCalender /> {date}
          </span>
          <span className="flex items-center gap-2">
            <LiaCommentSolid /> {comments} comments
          </span>
        </div>
        <p className="text-gray-700 text-xs md:text-base mb-4 flex-grow">
          {description}
        </p>
        <button className="bg-black text-white py-2 px-4 rounded-lg transition self-start mx-auto md:mx-0">
          Read more
        </button>
      </div>
    </div>
  );
};

const NewsUpdates = () => {
  const news = [
    {
      image: image1,
      title: "Space industry and government",
      date: "11 Sept 2024",
      comments: "31",
      description:
        "The Indian Space Association (ISpA) and Satcom Industry Association (SIA-India) have called for increased government spending on the space sector. The Indian Space Association (ISpA) and Satcom Industrcalled for increased government spending on the space sector.",
    },
    {
      image: image2,
      title: "Four private astronauts blasted into space",
      date: "10 Jan 2024",
      comments: "1",
      description:
        "The Indian Space Association (ISpA) and Satcom Industry Association (SIA-India) have called for increased government spending on the space sector.",
    },
    {
      image: image3,
      title: "Transistor issue, for Europa Clipper launch",
      date: "18 Jan 2024",
      comments: "13",
      description:
        "The Indian Space Association (ISpA) and Satcom Industry Association (SIA-India) have called for increased government spending on the space sector.",
    },
  ];

  return (
    <div className="mx-auto px-2 sm:px-4 md:px-12 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-start text-white">
        News updates
      </h1>

      {news.map((item, index) => (
        <NewsCard
          key={index}
          image={item.image}
          title={item.title}
          date={item.date}
          comments={item.comments}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default NewsUpdates;
