import { Zoom } from "react-reveal";
import { useNavigate } from "react-router-dom";
import { useMeme } from "./ImageContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { meme } = useMeme();

  const handleEdit = (memeList) => {
    navigate(
      `/editMeme?url=${memeList.url}&box_count=${memeList.box_count}&id=${memeList.id}`
    );
  };

  return meme ? (
    <main className="main">
      <div className="centerBtn">
        <button className="btn" onClick={() => navigate("/uploadMeme")}>
          Create Your Own meme
        </button>
      </div>

      <div className="meme">
        {meme.map((memeList) => (
          <Zoom key={memeList.id}>
            <figure className="figure">
              <img src={memeList.url} className="meme-image" alt="meme pic" />

              <button
                className="btn-create"
                onClick={() => handleEdit(memeList)}
              >
                Edit Meme
              </button>
            </figure>
          </Zoom>
        ))}
      </div>
    </main>
  ) : (
    <div className="lds-hourglass"></div>
  );
};

export default HomePage;
