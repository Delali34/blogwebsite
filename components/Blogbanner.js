import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blogbanner = ({ post }) => {
  return (
    <div className="bg-white">
      {" "}
      <div className="">
        <div className="relative">
          <img
            width={2500}
            height={2500}
            src={post.featuredImage.url}
            alt="the bro code blog"
            className=" md:h-[750px] h-[550px] w-full object-cover"
          />
          <div className="gradient-overlay2"></div>
          <Link href={`/category/${post.categories[0]?.slug || "#"}`}>
            <div className="bg-black absolute lg:top-[55%] top-[60%] hover:scale-110 left-[4%] text-white py-2 border-white border-2 px-10 rounded-[35px] cursor-pointer">
              <h2 className="lg:text-2xl">
                {post.categories[0]?.name || "Category"}
              </h2>
            </div>
          </Link>
          <Link href={`/post/${post.slug}`}>
            <div className="absolute lg:top-[70%] top-[70%] left-[4%] lg:text-purple-500 text-white py-2 cursor-pointer">
              <h2 className="md:text-3xl text-[16px] font-extrabold">
                {post.title}
              </h2>
            </div>
          </Link>
          <div className="absolute top-[85%] left-[4%] text-white py-2 ">
            <p className="md:text-xl text-sm w-full hidden lg:flex">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogbanner;
