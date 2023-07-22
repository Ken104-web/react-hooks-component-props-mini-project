import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function Article(props) { // Fixed prop name here, it was "prop" instead of "props"
  return (
    <div>
      <h3>{props.title}</h3> {/* Fixed prop name here, it was "prop.title" instead of "props.title" */}
      <small>{props.date}</small> {/* Fixed prop name here, it was "prop.date" instead of "props.date" */}
      <p>{props.preview}</p> {/* Fixed prop name here, it was "prop.preview" instead of "props.preview" */}
    </div>
  );
}

function ArticleList(props) { // Fixed prop name here, it was "prop" instead of "props"
  const { posts } = props; // Fixed prop name here, it was "prop" instead of "props"
  return (
    <main>
      {posts.map((post) => ( // Removed "index" since the "id" property is present in the data
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
      ))}
    </main>
  );
}

function Header(props) { // Fixed prop name here, it was "prop" instead of "props"
  return (
    <header>
      <h1>{props.name}</h1> {/* Fixed prop name here, it was "prop.name" instead of "props.name" */}
    </header>
  );
}

function About(props) { // Fixed prop name here, it was "prop" instead of "props"
  const makeImage = "https://via.placeholder.com/215";
  const imgSrc = props.image || makeImage; // Fixed prop name here, it was "prop.image" instead of "props.image"
  const altText = "blog logo";

  return (
    <aside>
      <img src={imgSrc} alt={altText} />
      <p>{props.about}</p> {/* Fixed prop name here, it was "prop.about" instead of "props.about" */}
    </aside>
  );
}

function App() {
  let blogName = "Ken-blog";
  const posts = [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
    },
    {
      id: 3,
      title: "Function Components vs Class Components",
      date: "December 10, 2020",
      preview: "React, meet OOJS.",
    },
  ];

  return (
    <div className="App">
      <Header name={blogName} />
      <About />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
