const Socials = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "50px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/hoggi90">
        <i className="fa-brands fa-github" aria-hidden="true" title="Hoger Shoresh's GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/hoggi/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Hoger Shoresh's LinkedIn Profile"></i>
      </a>
    </div>
  );
};

export default Socials;
