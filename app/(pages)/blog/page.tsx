import prisma from "@/app/lib/db";
import React from "react";

const BlogPage = async () => {
  const blogs = await prisma.posts.findMany();
    console.log(blogs);
  return (
    <div>
        {blogs.map((blog)=> {
            return (
                <div key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>{blog.content}</p>
                </div>
            );
        })}
    </div>
);
};

export default BlogPage;
