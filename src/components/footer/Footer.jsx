import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footerContainer">
      <section className="footerTop">
        <div className="left">
          <div className="EmailIcon">
            <a>
                <MdEmail />
            </a>
          </div>
          <div className="iconIno">
            <h3>GET OUR NEWSLETTER</h3>
            <p>Sign up with your email to get fresh updates.</p>
          </div>
        </div>
        <div className="middle">
          <input type="email" placeholder="Email address" />
        </div>
        <div className="right">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
        </div>
      </section>
      <section className="footerBottom">
        <div className="about">
          <h3>ABOUT US</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit <br />{" "}
            voluptatem accusantium doloremque laudantium, totam rem aperiam,{" "}
            <br /> eaque ipsa quae ab illo inventore veritatis.
          </p>
          <div className="phonEmail">
            <p>Phone: +33785433587</p>
            <p>Email: shawilayoul@gmail.com</p>
          </div>
          <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
        </div>
        <div className="links">
          <h3>Links</h3>
          <p>Blogs</p>
          <p>Recipes</p>
          <p>Shops</p>
          <p>About us</p>
          <p>Contact</p>
        </div>
        <div className="services">
          <h3>Services</h3>
          <p>Shipment</p>
          <p>Chef Talks</p>
          <p>Live support</p>
          <p>Privacy</p>
        </div>
        <div className="blog">
          <h3>From The Blog</h3>
          <div className="blog1">
            <p>blog image</p>
            <p>Snack Cake</p>
            <p>jan 01, 2016</p>
          </div>
          <div className="blog1">
            <p>blog image</p>
            <p>Snack Cake</p>
            <p>jan 01, 2016</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
