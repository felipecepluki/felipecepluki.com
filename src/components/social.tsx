import { useState } from "react";

import {
  GithubLogo,
  InstagramLogo,
  TwitterLogo,
  LinkedinLogo,
  MediumLogo,
} from "phosphor-react";

export default function Social() {
  const [linkedin, setLinkedin] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [medium, setMedium] = useState(false);
  const [github, setGithub] = useState(false);

  return (
    <footer className="w-full flex flex-row items-center justify-between">
      <a
        href="https://www.linkedin.com/in/felipe-cepluki-lopes-4b7a18243"
        target="_blank"
        rel="noreferrer noopener"
        className="mr-4 flex flex-row items-center transition-all"
        onMouseEnter={() => setLinkedin(true)}
        onMouseLeave={() => setLinkedin(false)}
      >
        <LinkedinLogo size={40} color="#fff" className="" />
        {linkedin ? (
          <strong className="ml-2 text-white text-base font-unbounded">
            Linkedin
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
        <InstagramLogo size={40} color="#fff" />
        {instagram ? (
          <strong className="ml-2 text-white text-base font-unbounded">
            Instagram
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
        <TwitterLogo size={40} color="#fff" />
        {twitter ? (
          <strong className="ml-2 text-white text-base font-unbounded">
            Twitter
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
        <MediumLogo size={40} color="#fff" />
        {medium ? (
          <strong className="ml-2 text-white text-base font-unbounded">
            Medium
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
        <GithubLogo size={40} color="#fff" />
        {github ? (
          <strong className="ml-2 text-white text-base font-unbounded">
            Github
          </strong>
        ) : (
          <></>
        )}
      </a>
    </footer>
  );
}
