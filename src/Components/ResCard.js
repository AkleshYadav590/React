import { IMAGE_uRl, CLOUDINARY_BASE_URL } from "../utils/linkUrl";

const ResCard = ({ resData }) => {
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla,
    cloudinaryImageId
  } = resData;

  return (
    <div className="Res-Card">
      <img
        className="res-logo"
        src={CLOUDINARY_BASE_URL+cloudinaryImageId}
        alt={name}
      />

      <div className="restroName">{name}</div>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{sla?.deliveryTime} Minutes</h4>
    </div>
  );
};

export default ResCard;
