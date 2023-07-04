"use client";

import { useState } from "react";
import ClipboardJS from "clipboard";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function About() {
  const [angular, setAngular] = useState(false);
  const [react, setReact] = useState(false);
  const [next, setNext] = useState(false);
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);
  const [ts, setTs] = useState(false);
  const [elixir, setElixir] = useState(false);
  const [node, setNode] = useState(false);

  const today = new Date();
  const birth = new Date("April 19, 2005 00:00:00");
  const age = today.getTime() - birth.getTime();
  const ageFinal = age / 31557600000;
  const ageFixed = ageFinal.toFixed(0);

  new ClipboardJS('.btn')

  const notify = () => toast.success("Bio Copied with Success!", {
    theme: "dark"
  });

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="w-2/3 flex justify-between items-center pb-2 border-b-2">
      <button className="transition-all" onMouseEnter={() => setHtml(true)} onMouseLeave={() => setHtml(false)}>
        {html ? <i className="devicon-html5-plain colored text-5xl"></i> : <i className="devicon-html5-plain text-white text-5xl"></i>}
      </button>
      <button className="transition-all" onMouseEnter={() => setCss(true)} onMouseLeave={() => setCss(false)}>
        {css ? <i className="devicon-css3-plain colored text-5xl"></i> : <i className="devicon-css3-plain text-white text-5xl"></i>}
      </button>
      <button className="transition-all" onMouseEnter={() => setJs(true)} onMouseLeave={() => setJs(false)}>
        {js ? <i className="devicon-javascript-plain colored text-5xl"></i> : <i className="devicon-javascript-plain text-white text-5xl"></i>}
      </button>
      <button className="transition-all" onMouseEnter={() => setTs(true)} onMouseLeave={() => setTs(false)}>
        {ts ? <i className="devicon-typescript-plain colored text-5xl"></i> : <i className="devicon-typescript-plain text-white text-5xl"></i>}
      </button>
      <button className="transition-all" onMouseEnter={() => setReact(true)} onMouseLeave={() => setReact(false)}>
        {react ? <i className="devicon-react-original colored text-5xl"></i> : <i className="devicon-react-original text-white text-5xl"></i>}
      </button>
      <button className="transition-all" onMouseEnter={() => setNext(true)} onMouseLeave={() => setNext(false)}>
        {next ? <i className="devicon-nextjs-original colored text-5xl"></i> : <i className="devicon-nextjs-original text-white text-5xl"></i>}
      </button>
      <button className="transition-all" onMouseEnter={() => setAngular(true)} onMouseLeave={() => setAngular(false)}>
        {angular ? <i className="devicon-angularjs-plain colored text-5xl"></i> : <i className="devicon-angularjs-plain text-white text-5xl"></i>}
      </button>
      <button className="transition-all" onMouseEnter={() => setElixir(true)} onMouseLeave={() => setElixir(false)}>
        {elixir ? <i className="devicon-elixir-plain colored text-5xl"></i> : <i className="devicon-elixir-plain text-white text-5xl"></i>}
      </button>
      <button className="transition-all" onMouseEnter={() => setNode(true)} onMouseLeave={() => setNode(false)}>
        {node ? <i className="devicon-nodejs-plain colored text-5xl"></i> : <i className="devicon-nodejs-plain text-white text-5xl"></i>}
      </button>
      </div>
      <div className="w-2/3 flex mt-5">
        <p className="text-white" id="bio">My name is Felipe Cepluki Lopes, I'm {ageFixed} years old. I entered the world of technology at the age of 15, when I went to high school integrated with computer science. I'm passionate about JavaScript and web development, with a focus on front-end. I'm passionate about Linux (I've tested more than 20 different distros on my machine, without Virtualization).</p>
      </div>
      <button className="text-white w-1/4 mt-3 p-2 flex items-center justify-center btn flex flex-row border-2 border-white rounded-lg hover:bg-purplemedium" data-clipboard-target="#bio" onClick={notify}>
        <i className="ri-clipboard-line ri-xl text-white mr-1"></i>
        <p>Copy Bio</p>
      </button>
      <ToastContainer />
    </div>
  )
}