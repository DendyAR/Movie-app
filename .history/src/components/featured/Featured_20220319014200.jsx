import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <img
        src="https://images.pexels.com/photos/11129005/pexels-photo-11129005.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRKrgH8goki6B50_fsipiwG8-efCu0w57iY4KsMiMOkV_xpwmCR1bwdO-qexN7jGsMEEVHu_udqNGVab2eGM-RxjYidvNBjuWkAE.png?r=df1"
          alt=""
          srcset=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          repudiandae, illum reprehenderit consequuntur, vero sunt mollitia
          ullam accusamus autem veniam quasi nam libero aperiam vel esse
          corporis laboriosam earum? Voluptates!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
