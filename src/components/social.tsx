import { useState } from "react";

import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
  TwitterLogo,
} from "phosphor-react";

export default function Social() {
  const [linkedin, SetLinkedin] = useState(false);
  const [instagram, SetInstagram] = useState(false);
  const [twitter, SetTwitter] = useState(false);
  const [tiktok, SetTiktok] = useState(false);
  const [github, SetGithub] = useState(false);

  return (
    <footer className="w-full flex flex-row items-center justify-between">
      <a
        href="https://www.linkedin.com/in/felipe-cepluki-lopes-4b7a18243"
        target="_blank"
        rel="noreferrer noopener"
        className="mr-4 flex flex-row items-center transition-all"
        onMouseEnter={() => SetLinkedin(true)}
        onMouseLeave={() => SetLinkedin(false)}
      >
        <LinkedinLogo size={40} color="#9f86c0" className="" />
        {linkedin ? (
          <strong className="text-[#9f86c0] text-base">Linkedin</strong>
        ) : (
          <></>
        )}
      </a>
      <a
        href="https://www.instagram.com/felipecepluki"
        target="_blank"
        rel="noreferrer noopener"
        className="mr-4 flex flex-row items-center transition-all"
        onMouseEnter={() => SetInstagram(true)}
        onMouseLeave={() => SetInstagram(false)}
      >
        <InstagramLogo size={40} color="#9f86c0" />
        {instagram ? (
          <strong className="text-[#9f86c0] text-base">Instagram</strong>
        ) : (
          <></>
        )}
      </a>
      <a
        href="https://www.twitter.com/felipecepluki"
        target="_blank"
        rel="noreferrer noopener"
        className="mr-4 flex flex-row items-center transition-all"
        onMouseEnter={() => SetTwitter(true)}
        onMouseLeave={() => SetTwitter(false)}
      >
        <TwitterLogo size={40} color="#9f86c0" />
        {twitter ? (
          <strong className="text-[#9f86c0] text-base">Twitter</strong>
        ) : (
          <></>
        )}
      </a>
      <a
        href="https://www.tiktok.com/@felipecepluki"
        target="_blank"
        rel="noreferrer noopener"
        className="mr-4 flex flex-row items-center transition-all"
        onMouseEnter={() => SetTiktok(true)}
        onMouseLeave={() => SetTiktok(false)}
      >
        <TiktokLogo size={40} color="#9f86c0" />
        {tiktok ? (
          <strong className="text-[#9f86c0] text-base">Twitter</strong>
        ) : (
          <></>
        )}
      </a>
      <a
        href="https://www.github.com/felipecepluki"
        target="_blank"
        rel="noreferrer noopener"
        className="mr-4 flex flex-row items-center transition-all"
        onMouseEnter={() => SetGithub(true)}
        onMouseLeave={() => SetGithub(false)}
      >
        <GithubLogo size={40} color="#9f86c0" />
        {github ? (
          <strong className="text-[#9f86c0] text-base">Github</strong>
        ) : (
          <></>
        )}
      </a>
    </footer>
  );
}
