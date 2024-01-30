import { useEffect, useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Iphone from "./Iphone";
const App = () => {
  const [posts, setPost] = useState();
  const getPosts = async () => {
    const res = await fetch("https://dummyjson.com/products/search?q=phone");
    const data = await res.json();
    setPost(data);
  };
  useEffect(() => {
    getPosts();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <getPosts />,
    },
    {
      path: "/iphone9",
      element: <Iphone />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {posts &&
        posts.products.map((post) => {
          return (
            <div key={post.id} className="card">
              <img src={post.images[0]} alt="" />
              <a href="/">
                <p>{post.title}</p>
              </a>
              <span>{post.rating} </span>
              <p>{post.discountPercentage}</p>
              <p>{post.price}</p>
            </div>
          );
        })}
    </>
  );
};

export default App;
