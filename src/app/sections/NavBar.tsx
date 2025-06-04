import Link from "next/link";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto flex w-full items-center justify-center gap-2 rounded-lg bg-[#07070a]/60 px-1 py-1 text-[#e4ded7] backdrop-blur-md sm:w-[500px] md:p-2">
      <Link
        href="https://drive.google.com/file/d/133x7U-89zBaRGAoXOEXyGA6-ptIlx5to/view?usp=drive_link"
        target="_blank"
        className="flex"
        aria-label="Open Comp. Returns"
        data-blobity-tooltip="View Comp. Returns"
        data-blobity-magnetic="false"
      >
        <FontAwesomeIcon
          icon={faFilePdf}
          className="py-2 px-2 text-[16px] sm:px-4 md:py-1"
        />
      </Link>

      <Link
        href="#home"
        onClick={handleScroll}
        aria-label="Scroll to Home Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
          Home
        </h4>
      </Link>
      
      <Link
        href="#offerings"
        onClick={handleScroll}
        aria-label="Scroll to Offerings Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
          Offerings
        </h4>
      </Link>

      <Link
        href="#whitepaper"
        onClick={handleScroll}
        aria-label="Scroll to Whitepaper Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
          Whitepaper
        </h4>
      </Link>

      <Link
        href="#blog"
        onClick={handleScroll}
        aria-label="Scroll to Blog Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
          Blog
        </h4>
      </Link>

      <Link
        href="#contact"
        onClick={handleScroll}
        aria-label="Scroll to Contact Section"
      >
        <h4 className="rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4">
          Contact
        </h4>
      </Link>
    </nav>
  );
};

export default NavBar;
