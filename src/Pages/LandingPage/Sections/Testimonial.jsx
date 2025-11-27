import React from "react";
import Heading from "../../../Components/Heading/Heading";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: "Waji",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio placeat esse ratione eos quam veniam rerum accusantium soluta.",
    },
    {
      id: 2,
      name: "Sara Khan",
      role: "Frontend Developer",
      image: "https://i.pravatar.cc/150?img=45",
      rating: 4,
      review:
        "A wonderful experience! The team was very professional and delivered on time. Highly recommend their services.",
    },
    {
      id: 3,
      name: "Ali Raza",
      role: "Photographer",
      image: "https://i.pravatar.cc/150?img=32",
      rating: 3,
      review:
        "The quality of work was outstanding! Communication was smooth and everything exceeded my expectations.",
    },
    {
      id: 4,
      name: "Ayesha Noor",
      role: "Content Writer",
      image: "https://i.pravatar.cc/150?img=27",
      rating: 5,
      review:
        "Very professional and friendly team. They listened carefully and delivered exactly what I had imagined.",
    },
    {
      id: 5,
      name: "Bilal Ahmed",
      role: "Digital Marketer",
      image: "https://i.pravatar.cc/150?img=68",
      rating: 5,
      review:
        "Their work ethic and design sense are top-notch. Definitely looking forward to collaborating again!",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-[1400px] px-10 mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <Heading highlight="Customers" heading="Saying" />
          <p className="text-gray-500 text-sm max-w-md mx-auto mt-2">
            Hear what our happy customers have to say about their experience.
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-full border-4 border-orange-400 overflow-hidden mb-4 shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h5 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h5>
                <p className="text-orange-500 text-sm font-medium mb-2">
                  {item.role}
                </p>

                <div className="flex justify-center text-orange-400 mb-3">
                  {[...Array(5)].map((_, i) =>
                    i < item.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                  )}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  “{item.review}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
