import backgroundImage from "../../img/DSC_5125.jpeg";
import "./Landing.css";

const Landing = () => {
  return (
    <div
      className="landing_page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <a href="/shop" className="centered_buy">
          <button className="buy_now_button">Buy Now</button>
        </a>
      </div>
    </div>
  );
};

export default Landing;
