import React from "react";

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(DATA => setAllMemes(DATA.data.memes))
    }, [])

    function handleChange(event) {
        const {value, name} = event.target;
        setMeme(prevMemeData => {
            return {
                ...prevMemeData,
                [name]: value,
            }
        })
    }

    function getMemeImage() {
        const randNum = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randNum].url;
        setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: url,
            }));

        console.log(meme.randomImage)
    }
  return (
    <main>
      <div className="inputs">
        <input
          type="text"
          className="text-input1"
          placeholder="Top Text"
          name="topText"
          onChange={handleChange}
        ></input>

        <input
          type="text"
          className="text-input2"
          placeholder="Bottom Text"
          name="bottomText"
          onChange={handleChange}
        ></input>

        <button className="generate" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>

      <div className="meme">
        <img alt="" src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
