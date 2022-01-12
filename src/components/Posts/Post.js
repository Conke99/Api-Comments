import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const names = [
  {
    id: 1,
    name: "Marko Maric",
  },
  {
    id: 2,
    name: "Nikola Nikolic",
  },
  {
    id: 3,
    name: "Milos Milosic",
  },
  {
    id: 4,
    name: "Zdravko Zdravkic",
  },
  {
    id: 5,
    name: "Sava Savic",
  },
];

const avatars = [
  {
    id: 1,
    img: "/images/AvatarOne.png",
  },
  {
    id: 2,
    img: "/images/AvatarTwo.png",
  },
  {
    id: 3,
    img: "/images/AvatarThree.jpg",
  },
  {
    id: 4,
    img: "/images/AvatarFour.webp",
  },
  {
    id: 5,
    img: "/images/AvatarFive.png",
  },
];

const Post = () => {
  const [posts, setPosts] = useState([]);

  const [comment, setComments] = useState([]);

  useEffect(() => {
    // posts
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        toast.error("Error fetching posts");
      });

    // comments
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        toast.error("Error fetching comments");
      });
  }, []);

  return (
    <div className="post">
      <div className="post__content">
        {posts
          .filter((item, index) => index < 5)
          .map((posts) => (
            <div className="uniqe__post" key={posts.id}>
              <div className="head">
                <div className="avatar">
                  <img
                    src={
                      avatars[Math.floor(Math.random() * avatars.length)].img
                    }
                    alt="Avatar"
                  />
                  <p>{names[Math.floor(Math.random() * names.length)].name}</p>
                </div>
                <p className="title">{posts.title}</p>
              </div>

              <div className="comments">
                {comment
                  .filter((item, index) => index < 2)
                  .map((comment) => (
                    <div className="uniqe__comment">
                      <img
                        className="avatarImg"
                        alt="Avatar"
                        src={
                          avatars[Math.floor(Math.random() * avatars.length)]
                            .img
                        }
                      />
                      <div className="comment">
                        <p className="name__comment">
                          {names[Math.floor(Math.random() * names.length)].name}
                        </p>
                        <p className="said__comment">{comment.body}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Post;
