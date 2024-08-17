import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/syachrilRamadhan" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/syachril-ramadhan-9a300b26a/" },
  { icon: <FaTwitter />, path: "https://twitter.com/syachril_bls" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
