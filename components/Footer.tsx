"use client";

import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { TwitterIcon, GithubIcon, DiscordIcon } from "@/components/icons";

export const Footer = () => {
  return (
    <footer className=" dark:text-white py-10 mt-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div
            data-aos="fade-up"
            className="w-full justify-center flex flex-col border-b border-t p-3 text-center mb-6 lg:mb-0"
          >
            <div className="flex items-center justify-center">
              <img
                data-aos="fade-up"
                src="/logo.png"
                height={100}
                width={100}
                alt=""
                className="dark:hidden"
              />
              <img
                data-aos="fade-up"
                src="/logo-1.png"
                height={100}
                width={100}
                alt=""
                className="hidden dark:flex"
              />
            </div>
            <p data-aos="fade-up" className="mt-2 dark:text-white">
              A passionate developer creating awesome web experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full lg:w-1/3 my-6 mt-[30px] lg:mb-0">
            <h3
              data-aos="fade-up"
              className="text-xl font-semibold mb-2 text-purple-600 dark:text-primary-light"
            >
              Quick Links
            </h3>
            <ul data-aos="fade-up" className=" dark:text-gray-400">
              {siteConfig.navItems.map((item) => (
                <li key={item.href} className="mb-2">
                  <Link
                    href={item.href}
                    className="hover:text-primary text-black dark:text-gray-300 dark:hover:text-primary-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full mt-[30px] lg:w-1/3">
            <h3
              data-aos="fade-up"
              className="text-xl font-semibold mb-2 text-purple-600"
            >
              Contact Me
            </h3>
            <ul data-aos="fade-up" className="text-gray-700 dark:text-gray-400">
              <li>
                Email:{" "}
                <a
                  href="mailto:your-email@example.com"
                  className="hover:text-primary dark:hover:text-primary-light"
                >
                  ole16@ukr.net
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary dark:hover:text-primary-light"
                >
                  +380 932 338176
                </a>
              </li>
            </ul>
            <div data-aos="fade-up" className="flex space-x-4 mt-4">
              <Link
                isExternal
                aria-label="Twitter"
                href={siteConfig.links.twitter}
              >
                <TwitterIcon className="text-gray-300 hover:text-primary dark:hover:text-primary-light" />
              </Link>
              <Link
                isExternal
                aria-label="Discord"
                href={siteConfig.links.discord}
              >
                <DiscordIcon className="text-gray-300 hover:text-purple-600 dark:hover:text-primary-light" />
              </Link>
              <Link
                isExternal
                aria-label="Github"
                href={siteConfig.links.github}
              >
                <GithubIcon className="text-gray-300 hover:text-black dark:hover:text-primary-light" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 dark:border-gray-600 pt-6 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; 2025 Oleh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
