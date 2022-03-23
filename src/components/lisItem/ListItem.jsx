import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

import { useState } from "react";
import { img_300, unavailable } from "../config/config";
import "./listitem.scss";

const Listitem = ({
  id,
  poster,
  title,
  date,
  media_type,
  overview,
  genre,
  index,
}) => {
  const [isHoverd, setIsHovered] = useState(false);

  return (
    <div
      className="listitem"
      style={{ left: isHoverd && index * 250 - 50 + index * 2.0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      {isHoverd && (
        <>
          <video media_type={media_type} id={id} />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>{date}</span>
            </div>
            <div className="desc">{overview}</div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Listitem;
