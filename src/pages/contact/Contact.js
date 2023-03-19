import PageHeader from "../../components/PageHeader";
import Socials from "../../components/Socials";
import ContactInfo from "../../components/ContactInfo";

const Contact = ({ name, email, location }) => {
  return (
    <section className="contact">
      <PageHeader title="Contact" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12">
            <ContactInfo name={name} location={location} email={email} />
          </div>
        </div>
      </div>
      <Socials />
    </section>
  );
};

export default Contact;
