"use client";

import { useState } from "react";

export default function Sobre() {
  const [angular, setAngular] = useState(false);
  const [react, setReact] = useState(false);
  const [next, setNext] = useState(false);
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);
  const [ts, setTs] = useState(false);
  const [elixir, setElixir] = useState(false);

  const today = new Date();
  const birth = new Date("April 19, 2005 00:00:00");
  const age = today.getTime() - birth.getTime();
  const ageFinal = age / 31557600000;
  const ageFixed = ageFinal.toFixed(0);

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
      </div>
      <div className="w-2/3 flex mt-5">
        <p className="text-white">Meu nome é Felipe Cepluki Lopes, tenho {ageFixed} anos. Entrei pro mundo de tecnologia com 15 anos, quando fui fazer ensino médio integrado ao técnico em informática. Sou apaixonado por JavaScript e desenvolvimento web, com foco em front-end. Sou apaixonado por Linux (já testei mais de 20 distros diferentes na minha máquina, sem Virtualização).</p>
      </div>
      <button className="text-white w-1/2">
        <p>Copiar Bio</p>
      </button>
    </div>
  )
}