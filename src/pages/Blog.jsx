import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero/Hero";
import Footer from "../components/Home/Footer/Footer";
import Location from "../components/Home/Location/Location";
import imge1 from "../assets/blogs/blog1.webp"
import imge2 from "../assets/blogs/blog2.webp"
import imge3 from "../assets/blogs/blog3.webp"
import imge4 from "../assets/blogs/blog4.webp"
import imge5 from "../assets/blogs/blog5.webp"
import imge6 from "../assets/blogs/blog6.webp"
import imge7 from "../assets/blogs/blog7.webp"
import imge8 from "../assets/blogs/blog8.webp"

const BlogData = [
  {
    img: imge1,
    title: "DIY Sparkle: Making Your Parties Shine with Handcrafted Decor",
    description:
      "In the realm of party planning, adding a personal touch through DIY crafts can transform a simple gathering into a memorable spectacle....",
  },
  {
    img: imge2,
    title: "How to Plan an Accessible and Fun Party for Children of All Abilities",
    description:
      "Planning a party for children requires special care to make sure everyone has fun, no matter their abilities. Creating an inclusive party...",
  },
  {
    img: imge3,
    title: "Planning Kid Parties in Utah: Indoor vs. Outdoor Guide",
    description:
      "When planning a child's party in Utah, deciding between an indoor and outdoor setting is a crucial step, particularly given the state's...",
  },
  {
    img: imge4,
    title: "Explore New Adventures with Rainforest Rapids Bounce House Rentals",
    description:
      "Renting a rainforest rapids bounce house excites any kind of celebration or gathering. These inflatables provide children with an amazing...",
  },
  {
    img: imge5,
    title: "The Ultimate Guide to Safe and Fun Children's Party Planning",
    description:
      "When it comes to planning a child's party, safety is as crucial as the fun. Creating a joyous yet secure environment ensures that...",
  },
  {
    img: imge6,
    title: "A Guide to Bounce House Rentals in Cedar Park: Jumpers for Every Event",
    description:
      "Organizing an event or party in Cedar Park? One great approach to injecting excitement and fun is through bounce house rentals. These...",
  },
  {
    img: imge7,
    title: "How to Choose Event Vendors in Utah for a Successful Gathering",
    description:
      "When planning a gathering in Utah, selecting the right event vendors plays a critical role in determining the success of your event. From...",
  },
  {
    img: imge8,
    title: "Navigating Rental Contracts: A Simplified Guide",
    description:
      "Renting equipment or property often requires careful examination of documents that may seem daunting at first glance. The contract stands...",
  },
];

const Blog = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto my-8 px-4">
        <div className="w-full">
          <h2 className="font-semibold text-center mb-6 text-secondary uppercase tracking-[0.3em] text-[40px]">
            All Blogs
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BlogData.map((blog, index) => (
            <a
              href="#"
              key={index}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {blog.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
      <Location />
    </>
  );
};

export default Blog;
