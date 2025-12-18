import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FetureSection from "../Component/FetureSection";
import HowItWorks from "../Component/HowItWorks";
import Testimonials from "../Component/Testimonials";
import CTA from "../Component/CTA";

const Home = () => {
  // slider
  const bannerData = [
    {
      name: "City Care – Smarter City Services",
      img: "https://images.unsplash.com/photo-1724648179736-fef1ae010d6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "City Care is a centralized digital platform that connects citizens with municipal authorities to report and resolve city infrastructure issues. Users can easily submit complaints with images and location details, while administrators and staff manage, assign, and track each issue through a structured workflow. The system ensures faster response, better coordination, and transparent issue resolution across city services.",
    },
    {
      name: "City Care – Report & Resolve City Issues",
      img: "https://images.unsplash.com/photo-1762438441472-be21c5148e8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "City Care helps citizens report everyday city problems such as damaged roads, broken streetlights, and waste issues through a single online platform. Reports are reviewed by admins, assigned to responsible staff, and tracked until completion. This system eliminates manual reporting, reduces delays, and improves overall city service efficiency.",
    },
    {
      name: "City Care – Smart City Governance",
      img: "https://images.unsplash.com/photo-1762438441913-cd4ec8da39d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "City Care is a smart city service application designed to streamline public issue reporting and management. By digitizing the entire process—from complaint submission to resolution—the system improves accountability, enhances transparency, and enables municipal teams to respond to issues more effectively. Citizens can monitor progress in real time, making city governance more reliable and efficient.",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // slider
  return (
    <div>
      <Slider {...settings}>
        {bannerData.map((item, index) => {
          return (
            <div
              key={index}
              className="relative card card-side overflow-hidden  shadow-md"
            >
              <figure>
                <img
                  className="w-full h-96 object-cover"
                  src={item.img}
                  alt="Album"
                />
              </figure>
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-4 transition-all duration-300 hover:bg-black/60">
                <h2 className="text-6xl font-bold drop-shadow-lg">
                  {item.name}
                </h2>
                <p className="font-thin mt-2 ">{item.description}</p>
              </div>
            </div>
          );
        })}
      </Slider>

      <section>latest issue </section>

      <FetureSection></FetureSection>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      <CTA></CTA>
    </div>
  );
};

export default Home;
