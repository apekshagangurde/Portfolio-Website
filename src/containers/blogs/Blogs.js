import React, {useContext} from "react";
import "./Blog.scss";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs() {
  const {isDark} = useContext(StyleContext);

  if (!blogSection.display) {
    return null;
  }

  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const blogs = blogSection.blogs;
  const headline = blogs[0];
  const rest = blogs.slice(1);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="newspaper-section" id="blogs">
        <h1 className="blogs-section-heading">Blogs</h1>
        <p className={isDark ? "dark-mode blogs-section-subtitle" : "blogs-section-subtitle"}>
          With love for developing cool stuff, I love to write and teach others what I have learnt.
        </p>
        <div className={isDark ? "newspaper newspaper-dark" : "newspaper"}>
          <div className="newspaper-header">
            <div className="newspaper-rule"></div>
            <div className="newspaper-masthead">
              <span className="newspaper-edition">EST. 2023 — NASHIK EDITION</span>
              <h1 className="newspaper-title">THE APEKSHA TIMES</h1>
              <span className="newspaper-date">{dateStr} • "All the code that's fit to ship"</span>
            </div>
            <div className="newspaper-rule"></div>
          </div>

          <div className="newspaper-body">
            {headline && (
              <a
                href={headline.url}
                target="_blank"
                rel="noopener noreferrer"
                className="newspaper-headline-link"
              >
                <div className="newspaper-headline">
                  <h2 className="newspaper-headline-text">{headline.title}</h2>
                  <p className="newspaper-headline-desc">{headline.description}</p>
                  <span className="newspaper-read-more">Read full story →</span>
                </div>
              </a>
            )}

            <div className="newspaper-divider"></div>

            <div className="newspaper-columns">
              {rest.map((blog, i) => (
                <a
                  key={i}
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="newspaper-article-link"
                >
                  <div className="newspaper-article">
                    <h3 className="newspaper-article-title">{blog.title}</h3>
                    <p className="newspaper-article-desc">{blog.description}</p>
                    <span className="newspaper-read-more">Read full story →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="newspaper-footer-bar">
            <span>TECH</span>
            <span>•</span>
            <span>OPEN SOURCE</span>
            <span>•</span>
            <span>ENGINEERING</span>
            <span>•</span>
            <span>AI / ML</span>
          </div>
        </div>
      </div>
    </Fade>
  );
}
