import Image from "next/image";
import Link from "next/link";
import React, { type ReactNode } from "react";

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const classes =
    "text-sm text-neutral-500 no-underline betterhover:hover:text-neutral-700 betterhover:hover:dark:text-white transition";
  if (href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

function FooterHeader({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
      {children}
    </h3>
  );
}

const navigation: Record<string, { name: string; href: string }[]> = {
  general: [
    { name: "Documentation", href: "/docs" },
    { name: "About", href: "/about" },
    { name: "Invite", href: "/invite" },
  ],
  support: [
    {
      name: "Discord",
      href: "/discord",
    },
    {
      name: "Developer",
      href: "https://lrmn.is-a.dev/",
    },
  ],
  company: [
    { name: "GitHub", href: "https://github.com/Hai-Lucy" },
    { name: "Top.gg", href: "https://top.gg/user/361407102650109952" },
    { name: "Oh!BOTLiST", href: "https://ohbotlist.hop.sh/" },
    { name: "Discord Bot List", href: "https://discord.ly/l-u-c-y" },
    { name: "Discord List", href: "https://discordlist.gg/bot/928966154817523723" }
  ],  
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl pt-8">
        <div className="pb-3 xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-3">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterHeader>General</FooterHeader>
                <ul role="list" className="ml-0 mt-4 list-none space-y-1.5">
                  {navigation.general.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Support</FooterHeader>
                <ul role="list" className="ml-0 mt-4 list-none space-y-1.5">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterHeader>Find me</FooterHeader>
                <ul role="list" className="ml-0 mt-4 list-none space-y-1.5">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:!mt-0">
                <FooterHeader>Legal</FooterHeader>
                <ul role="list" className="ml-0 mt-4 list-none space-y-1.5">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <FooterLink href={item.href}>{item.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div className="mt-8 md:flex md:items-center md:justify-between">
            <div>
              <a className="text-current" href="/">
                L u c y ♡
              </a>

              <p className="mt-4 text-xs text-neutral-500">
                &copy; {new Date().getFullYear()} L u c y ♡. Made with ❤️
                inBOGOR. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
