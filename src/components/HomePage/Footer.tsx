interface FooterLink {
  href: string;
  label: string;
  hiddenOnMobile?: boolean;
}

const footerLinks: FooterLink[] = [
  { href: "https://medium.statuspage.io/", label: "Status" },
  { href: "https://about.medium.com", label: "About" },
  { href: "https://medium.com/careers", label: "Careers" },
  { href: "https://medium.com/press", label: "Press" },
  { href: "https://help.medium.com", label: "Help", hiddenOnMobile: true },
  { href: "https://blog.medium.com", label: "Blog", hiddenOnMobile: true },
  { href: "https://medium.com/policy/privacy-policy", label: "Privacy" },
  { href: "https://medium.com/policy/terms-of-service", label: "Terms" },
];

export const Footer = () => {
  return (
    <div className="footer bg-black md:bg-transparent w-full py-7 flex justify-center">
      <ul className="flex gap-4 text-xs text-white md:text-gray-500">
        {footerLinks.map(({ href, label, hiddenOnMobile }, index) => (
          <li key={index} className={hiddenOnMobile ? "hidden md:block" : ""}>
            <a href={href} className="hover:underline">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
