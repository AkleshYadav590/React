const SocialIcon = ({ href, label, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="social-icon"
    >
      {children}
    </a>
  );
};

export default SocialIcon;
