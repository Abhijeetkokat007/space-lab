import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    id: 1,
    name: "John Deo",
    title: "Instructor",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    imageUrl:
      "https://the-bteam.transforms.svdcdn.com/production/assets/images/Joshua-Alade-2000px.jpg?w=600&h=600&q=85&auto=format&fit=crop&crop=focalpoint&fp-x=0.4927&fp-y=0.2256&dm=1715785843&s=adbd74acd88df57151f7949bc7bbd0e6",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Designer",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore.",
    imageUrl:
      "https://the-bteam.transforms.svdcdn.com/production/assets/images/Joshua-Alade-2000px.jpg?w=600&h=600&q=85&auto=format&fit=crop&crop=focalpoint&fp-x=0.4927&fp-y=0.2256&dm=1715785843&s=adbd74acd88df57151f7949bc7bbd0e6",
  },
  {
    id: 3,
    name: "Bob Doe",
    title: "Engineer",
    description:
      "Taiyaki tumblr polaroid fanny pack cold-pressed retro kinfolk venmo.",
    imageUrl:
      "https://the-bteam.transforms.svdcdn.com/production/assets/images/Joshua-Alade-2000px.jpg?w=600&h=600&q=85&auto=format&fit=crop&crop=focalpoint&fp-x=0.4927&fp-y=0.2256&dm=1715785843&s=adbd74acd88df57151f7949bc7bbd0e6",
  },
  {
    id: 4,
    name: "Emily Rose",
    title: "Marketing Lead",
    description:
      "Occupy shoreditch mixtape kinfolk hashtag glossier ethical jianbing.",
    imageUrl:
      "https://the-bteam.transforms.svdcdn.com/production/assets/images/Joshua-Alade-2000px.jpg?w=600&h=600&q=85&auto=format&fit=crop&crop=focalpoint&fp-x=0.4927&fp-y=0.2256&dm=1715785843&s=adbd74acd88df57151f7949bc7bbd0e6",
  },
  {
    id: 5,
    name: "Alice Cooper",
    title: "Project Manager",
    description:
      "Brunch authentic keffiyeh bitters affogato thundercats selfies.",
    imageUrl:
      "https://the-bteam.transforms.svdcdn.com/production/assets/images/Joshua-Alade-2000px.jpg?w=600&h=600&q=85&auto=format&fit=crop&crop=focalpoint&fp-x=0.4927&fp-y=0.2256&dm=1715785843&s=adbd74acd88df57151f7949bc7bbd0e6",
  },
  {
    id: 6,
    name: "Michael Scott",
    title: "CEO",
    description:
      "Hella retro mixtape pabst tofu master cleanse street art mumblecore.",
    imageUrl:
      "https://the-bteam.transforms.svdcdn.com/production/assets/images/Joshua-Alade-2000px.jpg?w=600&h=600&q=85&auto=format&fit=crop&crop=focalpoint&fp-x=0.4927&fp-y=0.2256&dm=1715785843&s=adbd74acd88df57151f7949bc7bbd0e6",
  },
];

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: false, // Enables right-to-left scrolling
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 text-white text-center">
          Our Team
        </h2>
        <div className="mt-10">
          <Slider {...settings}>
            {teamMembers.map((member) => (
              <div key={member.id} className="px-4">
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center text-white">
                  <img
                    className="w-24 h-24 mx-auto rounded-full"
                    src={member.imageUrl}
                    alt={member.name}
                  />
                  <h3 className="mt-6 text-lg font-medium">{member.name}</h3>
                  <p className="mt-2 text-sm">{member.title}</p>
                  <p className="mt-2 text-sm text-gray-400">
                    {member.description}
                  </p>
                  <div className="mt-4 flex justify-center space-x-3">
                    <a href="#" className="text-gray-400 hover:text-white">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      <i className="fab fa-dribbble"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
