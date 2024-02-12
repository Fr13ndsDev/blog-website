import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import broImg from "../assets/broImg.png";
import cardImg1 from "../assets/Rectangle1.jpeg";
import cardImg2 from "../assets/Rectangle2.jpeg";
import cardImg3 from "../assets/Rectangle3.jpeg";
import cardImg4 from "../assets/Rectangle4.jpeg";
import cardImg5 from "../assets/Rectangle5.jpeg";
import cardImg6 from "../assets/Rectangle6.jpeg";
import cardImg7 from "../assets/Rectangle7.jpeg";
import cardImg8 from "../assets/Rectangle8.jpeg";
import cardImg9 from "../assets/Rectangle9.jpeg";
import Broavu from "../assets/img01.png";
import Broavu2 from "../assets/img02.png";
import Broavu3 from "../assets/img03.png";

const cardData = [
  {
    id: 1,
    image: cardImg1,
    type: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    ava: Broavu,
    name: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image: cardImg2,
    type: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    ava: Broavu2,
    name: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image: cardImg3,
    type: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    ava: Broavu3,
    name: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image: cardImg4,
    type: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    ava: Broavu2,
    name: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image: cardImg5,
    type: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    ava: Broavu3,
    name: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image: cardImg6,
    type: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    ava: Broavu,
    name: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image: cardImg7,
    type: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    ava: Broavu3,
    name: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image: cardImg8,
    type: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    ava: Broavu2,
    name: "Tracey Wilson",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image: cardImg9,
    type: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    ava: Broavu,
    name: "Tracey Wilson",
    date: "August 20, 2022",
  },
];
const AuthorPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className=" w-[1120px] text-start">
          <div className=" mt-6 p-12 rounded-xl bg-slate-100 mb-12">
            <div className=" flex items-center justify-center gap-4 mb-[24px]">
              <img src={broImg} alt="" />
              <div>
                <h2 className="font-work font-medium leading-[28px] text-[20px]">
                  Jonathan Doe
                </h2>
                <p className="font-work text-stone-500">
                  Collaborator & Editor
                </p>
              </div>
            </div>
            <p className="font-work w-[668px] mx-auto text-center text-[18px] leading-[26px] text-stone-500">
              Meet Jonathan Doe, a passionate writer and blogger with a love for
              technology and travel. Jonathan holds a degree in Computer Science
              and has spent years working in the tech industry, gaining a deep
              understanding of the impact technology has on our lives.
            </p>
            <div className="flex justify-center gap-2 mt-[24px]">
              <div className="p-2 w-[32px] h-[32px] rounded-[6px] bg-slate-500 cursor-pointer"></div>
              <div className="p-2 w-[32px] h-[32px] rounded-[6px] bg-slate-500 cursor-pointer"></div>
              <div className="p-2 w-[32px] h-[32px] rounded-[6px] bg-slate-500 cursor-pointer"></div>
              <div className="p-2 w-[32px] h-[32px] rounded-[6px] bg-slate-500 cursor-pointer"></div>
            </div>
          </div>
          <p className="font-work font-bold text-[24px] leading-[28px] mb-[32px]">
            Latest Post
          </p>
          <div className="grid grid-cols-3 gap-[20px] mb-[100px]">
            {cardData.map((item) => (
              <div className="p-4 border-solid border-2 border-inherit w-[360px] rounded-[12px]">
                <img src={item.image} alt="" />
                <p className="pt-7 leading-[20px] font-medium font-work text-blue-600">
                  {item.type}
                </p>
                <h2 className="font-work mt-4 font-semibold text-[24px] leading-[28px] mb-[20px]">
                  {item.title}
                </h2>
                <div className="flex items-center gap-[20px]">
                  <div className="flex gap-2 items-center">
                    <img src={item.ava} alt="" />
                    <p className="font-work text-slate-500 font-medium">
                      {item.name}
                    </p>
                  </div>
                  <p className="font-work text-slate-500 ">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthorPage;
