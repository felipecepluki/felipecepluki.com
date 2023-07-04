interface ListValues {
  link: string;
  title: string;
  description: string;
}

export function List({ link, title, description }: ListValues) {
  return (
    <li className="">
      <a className="text-white underline" target="_blank"
        rel="noreferrer noopener" href={link}>{title}</a><span className="text-neutral-400"> - {description}</span>
    </li>
  )
}