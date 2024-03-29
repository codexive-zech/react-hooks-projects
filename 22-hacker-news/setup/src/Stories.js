import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>;
  } // show only when loading is true

  return (
    <section className="stories">
      {/* Iterating over the hits data array */}
      {hits.map((story) => {
        const { objectID, title, url, points, author, num_comments } = story;
        return (
          <article className="story" key={objectID}>
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span> {num_comments} number
              of comments
            </p>
            <div>
              {" "}
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
              <button
                className="remove-btn"
                onClick={() => removeStory(objectID)} // invoking the remove story func
              >
                Remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
