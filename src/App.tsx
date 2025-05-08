import { useEffect, useState } from "react";

const App = () => {
  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h1>Hello</h1>
      {posts.map((eachElement) => (
        <div key={eachElement.id}>
          <h3>{eachElement.title}</h3>
          <p>{eachElement.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
