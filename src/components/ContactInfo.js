const ContactInfo = ({ name, email, location }) => (
  <div className="contactInfo text-center">
    <h4 className="contentTitle">Contact Information</h4>
    <p className="infoDescription">Get in touch and we can create something amazing together! </p>
    <ul className="listInfo d-inline-block text-left">
      <li className="mb-3">
        <div className="personalContactInfo">
          <i className="icon fa-solid fa-user infoIcon"></i>
          <div className="infoWrap d-inline-block align-middle ml-2">
            <h6 className="infoType mb-0">Name</h6>
            <span className="infoValue d-block">{name}</span>
          </div>
        </div>
      </li>
      <li className="mb-3">
        <div className="personalContactInfo">
          <i className="icon fa-solid fa-location-pin infoIcon"></i>
          <div className="infoWrap d-inline-block align-middle ml-2">
            <h6 className="infoType mb-0">Location</h6>
            <span className="infoValue d-block">{location}</span>
          </div>
        </div>
      </li>
      <li>
        <div className="personalContactInfo">
          <i className="icon fa-solid fa-envelope infoIcon"></i>
          <div className="infoWrap d-inline-block align-middle ml-2">
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

export default ContactInfo;
