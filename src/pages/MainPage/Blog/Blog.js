import { Button } from "@material-tailwind/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("Blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center" id="blog">
      <div>
        <h2 className="text-center text-3xl font-semibold">
          My <span className="text-light-blue-600">Blogs</span>
        </h2>
        <hr className="w-24 mb-10 mt-2 border-1 mx-auto border-blue-gray-300" />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://medium.com/@mdmarufhossain6470"
      >
        {" "}
        <Button variant="filled">See More</Button>
      </a>
    </div>
  );
};

export default Blog;
