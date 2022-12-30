import { useState } from "react";

import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
  TwitterLogo,
  Envelope,
} from "phosphor-react";

export default function Social() {
  const [mail, setMail] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [tiktok, setTiktok] = useState(false);
  const [github, setGithub] = useState(false);

  return (
    <footer className="w-full flex flex-row items-center justify-between">
      <a
        href="mailto:cepluki.felipe@protonmail.com"
        target="_blank"
        rel="noreferrer noopener"
        className="mr-4 flex flex-row items-center transition-all"
        onMouseEnter={() => setMail(true)}
        onMouseLeave={() => setMail(false)}
      >
        <Envelope size={40} color="#fff" className="" />
        {mail ? (
          <strong className="text-white text-base font-unbounded">
            E-mail
          </strong>
        ) : (
          <></>
        )}
      </a>
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
          <strong className="text-white text-base font-unbounded">
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
          <strong className="text-white text-base font-unbounded">
            Instagram
          </strong>
        ) : (
          <></>
        )}
      </a>
      <a
        href="https://www.twitter.com/felipecepluki"
        target="_blank"
        rel="noreferrer noopener"
        className="mr-4 flex flex-row items-center transition-all"
        onMouseEnter={() => setTwitter(true)}
        onMouseLeave={() => setTwitter(false)}
      >
        <TwitterLogo size={40} color="#fff" />
        {twitter ? (
          <strong className="text-white text-base font-unbounded">
            Twitter
          </strong>
        ) : (
          <></>
        )}
      </a>
      <a
        href="https://www.tiktok.com/@felipecepluki"
        target="_blank"
        rel="noreferrer noopener"
        className="mr-4 flex flex-row items-center transition-all"
        onMouseEnter={() => setTiktok(true)}
        onMouseLeave={() => setTiktok(false)}
      >
        <TiktokLogo size={40} color="#fff" />
        {tiktok ? (
          <strong className="text-white text-base font-unbounded">
            Tiktok
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
          <strong className="text-white text-base font-unbounded">
            Github
          </strong>
        ) : (
          <></>
        )}
      </a>
    </footer>
  );
}
