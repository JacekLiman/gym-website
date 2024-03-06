import { footer } from "../data";

const Footer = () => {
  const { logo, copyrightText } = footer;
  return (
    <footer className="bg-neutral-500 py-10">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="container mx-auto flex justify-between px-5"
      >
        <div>
          <img src={logo} alt="" />
        </div>
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
