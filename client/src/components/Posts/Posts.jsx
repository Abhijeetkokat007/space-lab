import React, { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import { BiRepost } from "react-icons/bi";
import { IoMdSend } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { BiSolidTorch } from "react-icons/bi";

const userMessages = [
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s",
    name: "Sneha Singh",
    message: "sam Thank you",
    date: "14 Sept",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s",
    name: "Sneha Singh",
    message: "sam Thank you",
    date: "14 Sept",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s",
    name: "Sneha Singh",
    message: "sam Thank you",
    date: "14 Sept",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s",
    name: "Sneha Singh",
    message: "sam Thank you",
    date: "14 Sept",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s",
    name: "Sneha Singh",
    message: "sam Thank you",
    date: "14 Sept",
  },
];

const Posts = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState("");

  // const sections = [
  //   { name: "Focused", component: <Focused /> },
  //   { name: "Others", component: <Others /> },
  // ];

  const handleSection = (index) => {
    if (index !== activeSection) {
      setDirection(index > activeSection ? "right" : "left");
      setTimeout(() => {
        setActiveSection(index);
        setDirection("");
      }, 500);
    }
  };
  return (
    <section className="h-full w-full bg-white rounded-3xl py-8">
      {/* avatar pic follow button and the description */}
      <div className="flex items-center justify-center flex-wrap lg:flex-nowrap">
        <aside className="h-[80%] flex flex-col gap-7 items-start basis-[108%] lg:basis-[90%] mb-32">
          <div className="w-[8rem] ml-5">
            <img
              className="h-full w-full rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
              alt=""
            />
          </div>

          <div className="w-full pt-4 px-7">
            <div>
              <h2 className="text-3xl font-bold flex gap-24">
                Arnold Foden<span className="text-3xl">Follow</span>
              </h2>
            </div>
            <div className="w-full">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
              suscipit! Sunt eaque debitis nobis harum non molestiae natus
              voluptas deserunt.
            </div>
            <div className="w-full mt-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
              suscipit! Sunt eaque debitis nobis harum non molestiae natus
              voluptas deserunt. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Aspernatur, sunt?
            </div>

            {/* images section of posts */}
            <div className="flex gap-3 mt-5 w-full">
              <div className="basis-[50%]">
                <div className="w-full h-full">
                  <img
                    className="w-full h-full rounded-md object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGDlR8cWbuhWCe8Z8UMXasC7LggyShk1htg&s"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 basis-[50%]">
                <div className="w-full h-[15rem]">
                  <img
                    className="w-full h-full rounded-md object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJcnc8oACKctGWxh9U_PaRDooGVj-pDNGlQ&s"
                    alt=""
                  />
                </div>
                <div className="w-full h-[15rem]">
                  <img
                    className="w-full h-full rounded-md object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJcnc8oACKctGWxh9U_PaRDooGVj-pDNGlQ&s"
                    alt=""
                  />
                </div>
                <div className="w-full h-[15rem]">
                  <img
                    className="w-full h-full rounded-md object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJcnc8oACKctGWxh9U_PaRDooGVj-pDNGlQ&s"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between py-6 border-b-[1px] border-black ">
              <div className="flex text-2xl gap-2">
                <FaRegThumbsUp /> <FaHeart /> <FaStar />
              </div>
              <div>Sam Autiman and 101 others</div>
              <div>211 comments</div>
            </div>
            {/* like comment repost and send */}
            <div className="flex justify-between mt-4">
              <div className="flex flex-col justify-between items-center">
                <span className="text-2xl">
                  <FaHeart />
                </span>
                <p>like</p>
              </div>
              <div className="flex flex-col justify-between items-center">
                <span className="text-2xl">
                  <MdOutlineComment />
                </span>
                <p>comment</p>
              </div>
              <div className="flex flex-col justify-between items-center">
                <span className="text-2xl">
                  <BiRepost />
                </span>
                <p>repost</p>
              </div>
              <div className="flex flex-col justify-between items-center">
                <span className="text-2xl">
                  <IoMdSend />
                </span>
                <p>send</p>
              </div>
            </div>
          </div>
        </aside>
        {/* <div className="w-[5px]  h-[80vh] bg-gray-500 hidden rounded-md lg:block"></div> */}
        {/* <aside className="basis-[80%]  lg:basis-[40%]">
          avatar and messags
          <div className="flex gap-7">
            <div className="flex items-center gap-4">
              <div className="w-[8rem] ml-5">
                <img
                  className="h-full hidden md:block lg:block w-full rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold flex gap-24">Messages</h2>
              </div>
            </div>

            <div className="flex items-center w-full justify-end gap-5 pr-7">
              <div className="flex text-[7px] gap-[3px]">
                <FaCircle />
                <FaCircle />
                <FaCircle />
              </div>
              <div className="text-2xl">
                <TiArrowSortedDown />
              </div>
            </div>
          </div>
          <div className="mt-5 overflow-hidden">
            <div className="flex px-8 items-center justify-between">
              <FaSearch />
              <input
                className="h-[2rem] w-[85%]"
                type="text"
                placeholder="search message"
              />
              <BiSolidTorch />
            </div>
            <div className="flex justify-around text-2xl font-bold mt-4 mx-4 pb-3 border-b-[1px] border-black ">
              {sections.map((section, index) => (
                <span key={index} onClick={() => handleSection(index)}>
                  {section.name}
                </span>
              ))}
            </div>

            <div
              className={`w-full h-full items-center mt-7 justify-center transition-transform duration-500 ${direction === "left"
                  ? "-translate-x-full"
                  : direction === "right"
                    ? "translate-x-full"
                    : ""
                }`}
            >
              {sections[activeSection].component}
            </div>
          </div>
        </aside> */}
      </div>
    </section>
  );
};

export default Posts;

// export const Focused = () => {
//   return (
//     <>
//       {userMessages.map((user, index) => (
//         <div
//           key={index}
//           className="flex w-full p-2 gap-4 items-center justify-between mb-6"
//         >
//           <div className="w-[5rem] ml-5">
//             <img
//               className="h-full w-full rounded-full object-cover"
//               src={user.avatar}
//               alt={user.name}
//             />
//           </div>
//           <div className="w-[50%] mr-16 flex flex-col gap-2 border-b-[1px] border-black">
//             <p className="text-2xl font-bold">{user.name}</p>
//             <p className="text-xl font-bold">{user.message}</p>
//           </div>
//           <div className="mr-4 font-bold ">
//             <p>{user.date}</p>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };
// export const Others = () => {
//   return <div className="h-[50vh]">Others</div>;
// };
