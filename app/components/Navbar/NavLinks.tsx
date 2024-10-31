type Link = {
  src: string;
  label: string;
};

const links: Link[] = [
  { src: "/services", label: "SERVICES" },
  { src: "/about", label: "ABOUT" },
  { src: "/projects", label: "PROJECTS" },
  { src: "/contact", label: "CONTACT" },
];

const NavLinks = () => {
  return (
    <div className="hidden lg:flex">
      <ul className="flex gap-12">
        {links.map((link: Link) => (
          <li
            className="text-white font-[family-name:var(--font-manrope)] font-semibold text-base"
            key={link.src}
          >
            {link.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
