"use client"

import { useState } from "react";

export function Footer() {
  const [linkedin, setLinkedin] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [medium, setMedium] = useState(false);
  const [github, setGithub] = useState(false);

  return (
    <footer className="lg:w-1/3 sm:w-full flex flex-row items-center justify-between">
      <a
        href="https://www.linkedin.com/in/felipe-cepluki/"
        target="_blank"
        rel="noreferrer noopener"
        className="mr-4 flex flex-row items-center transition-all"
        onMouseEnter={() => setLinkedin(true)}
        onMouseLeave={() => setLinkedin(false)}
      >
        <i className="ri-linkedin-line ri-lg text-white"></i>
        {linkedin ? (
          <strong className="ml-2 text-white text-base font-roboto">
            linkedin
          </strong>
        ) : (
          <></>
        )}
      </a>
      <a
        href="https://www.github.com/felipecepluki"
        target="_blank"
        rel="noreferrer noopener"
        className="mr-4 flex flex-row items-center transition-all"
        onMouseEnter={() => setGithub(true)}
        onMouseLeave={() => setGithub(false)}
      >
        <i className="ri-github-line ri-lg text-white"></i>
        {github ? (
          <strong className="ml-2 text-white text-base font-roboto">
            github
          </strong>
        ) : (
          <></>
        )}
      </a>
      <a
        href="https://www.instagram.com/felipecepluki"
        target="_blank"
        rel="noreferrer noopener"
        className="mr-4 flex flex-row items-center transition-all"
        onMouseEnter={() => setInstagram(true)}
        onMouseLeave={() => setInstagram(false)}
      >
        <i className="ri-instagram-line ri-lg text-white"></i>
        {instagram ? (
          <strong className="ml-2 text-white text-base font-roboto">
            instagram
          </strong>
        ) : (
          <></>
        )}
      </a>
      <a
        href="https://www.instagram.com/felipecepluki"
        target="_blank"
        rel="noreferrer noopener"
        className="mr-4 flex flex-row items-center transition-all"
        onMouseEnter={() => setTwitter(true)}
        onMouseLeave={() => setTwitter(false)}
      >
        <i className="ri-twitter-line ri-lg text-white"></i>
        {twitter ? (
          <strong className="ml-2 text-white text-base font-roboto">
            twitter
          </strong>
        ) : (
          <></>
        )}
      </a>
      <a
        href="https://medium.com/@felipecepluki"
        target="_blank"
        rel="noreferrer noopener"
        className="mr-4 flex flex-row items-center transition-all"
        onMouseEnter={() => setMedium(true)}
        onMouseLeave={() => setMedium(false)}
      >
        <i className="ri-medium-line ri-lg text-white"></i>
        {medium ? (
          <strong className="ml-2 text-white text-base font-roboto">
            medium
          </strong>
        ) : (
          <></>
        )}
      </a>
    </footer>
  );
}