import { useState } from "react";

const Home = () => {
  const [blogs, setblogs] = useState([
    {
      title: "dogs or cats",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in itaque officiis, modi repellat a asperiores accusamus ab praesentium fugiat excepturi molestiae magni. Corrupti aspernatur natus excepturi nihil iste ipsum?",
      author: "Paul",
      email: "paulamoah@gmail.com",
      id: 1,
      photo: "",
    },
    {
      title: "REACTJS",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in itaque officiis, modi repellat a asperiores accusamus ab praesentium fugiat excepturi molestiae magni. Corrupti aspernatur natus excepturi nihil iste ipsum?",
      author: "John",
      email: "paulamoah@gmail.com",
      id: 1,
      photo: "",
    },
    {
      title: "A full stack developer in 2021",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in itaque officiis, modi repellat a asperiores accusamus ab praesentium fugiat excepturi molestiae magni. Corrupti aspernatur natus excepturi nihil iste ipsum?",
      author: "Rufus",
      email: "paulamoah@gmail.com",
      id: 1,
      photo: "",
    },
    {
      title: "favorite movies of all time",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in itaque officiis, modi repellat a asperiores accusamus ab praesentium fugiat excepturi molestiae magni. Corrupti aspernatur natus excepturi nihil iste ipsum?",
      author: "Bode",
      email: "paulamoah@gmail.com",
      id: 1,
      photo: "",
    },
    {
      title: "Apple or Samsung",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in itaque officiis, modi repellat a asperiores accusamus ab praesentium fugiat excepturi molestiae magni. Corrupti aspernatur natus excepturi nihil iste ipsum?",
      author: "Tyler",
      email: "paulamoah@gmail.com",
      id: 1,
      photo: "",
    },
    {
      title: "Crypto",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in itaque officiis, modi repellat a asperiores accusamus ab praesentium fugiat excepturi molestiae magni. Corrupti aspernatur natus excepturi nihil iste ipsum?",
      author: "Brandon",
      email: "paulamoah@gmail.com",
      id: 1,
      photo: "",
    },
    {
      title: "dogs",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in itaque officiis, modi repellat a asperiores accusamus ab praesentium fugiat excepturi molestiae magni. Corrupti aspernatur natus excepturi nihil iste ipsum?",
      author: "Romeo",
      email: "paulamoah@gmail.com",
      id: 1,
      photo: "",
    },
  ]);
  return (
    <div className="home">
      {blogs.map((e) => (
        <div className="blog-display" key={e.id}>
          <div className="blog-cover-photo">{e.photo}</div>
          <div className="blog-info">
            <div className="header">
              <h2 id="title">{e.title}</h2>
              <p id="author">written by {e.author}</p>
            </div>
            <p id="blog-body">{e.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
