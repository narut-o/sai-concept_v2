import { Link } from "react-router-dom";
import { slugify } from "../utils/helpers";
import "./CategoryCard.css";

export default function CategoryCard({ name, data }) {
  return (
    <Link
      to={`/category/${slugify(name)}`}
      className="category-modern-card"
    >
      {/* Image */}
      <div className="category-image-wrap">
       
        <img
          src={data.img}
          alt={name}
        />
      </div>

      {/* Text */}
      <div className="category-text">
        <h3>{name}</h3>
        <p></p>
      </div>
    </Link>
  );
}
