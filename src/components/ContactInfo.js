const ContactInfo = ({ name, email, location }) => {
  return (
    <div className="contactInfo text-center">
      <h4 className="contentTitle">Contact Information</h4>
      <p className="infoDescription">Open for opportunities. Let's connect and build something awesome together! </p>
      <ul className="listInfo d-inline-block text-left">
        <li className="mb-3">
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-user"></i>{" "}
            </span>
            <div className="mediaWrap d-inline-block align-middle ml-2">
              <h6 className="infoType mb-0">Name</h6>
              <span className="infoValue d-block">{name}</span>
            </div>
          </div>
        </li>
        <li className="mb-3">
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-location-pin "></i>{" "}
            </span>
            <div className="mediaWrap d-inline-block align-middle ml-2">
              <h6 className="infoType mb-0">Location</h6>
              <span className="infoValue d-block">{location}</span>
            </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-envelope "></i>{" "}
            </span>
            <div className="mediaWrap d-inline-block align-middle ml-2">
              <h6 className="infoType mb-0">Email</h6>
              <span className="infoValue d-block">
                <a href={`mailto:${email}`}>{email}</a>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
