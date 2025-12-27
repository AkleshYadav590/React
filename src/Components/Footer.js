import SocialIcon from "./SocialIcon";
import {TwitterIcon,FacebookIcon,InstagramIcon,LinkedInIcon,GitHubIcon} from "./Icon"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        © {year} Devil's Restro . All rights reserved.
      </p>

      <div className="social-links">
        <SocialIcon
          href="https://twitter.com/yourusername"
          label="Twitter"
        >
          <TwitterIcon />
        </SocialIcon>

        <SocialIcon
          href="https://facebook.com/yourpage"
          label="Facebook"
        >
          <FacebookIcon />
        </SocialIcon>

        <SocialIcon
          href="https://instagram.com/yourusername"
          label="Instagram"
        >
          <InstagramIcon />
        </SocialIcon>

        <SocialIcon
          href="https://linkedin.com/company/yourcompany"
          label="LinkedIn"
        >
          <LinkedInIcon />
        </SocialIcon>

        <SocialIcon
          href="https://github.com/yourusername"
          label="GitHub"
        >
          <GitHubIcon />
        </SocialIcon>
      </div>
    </footer>
  );
};

export default Footer;
