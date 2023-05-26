import trollPic from './Troll-Face.png'
function Header() {
    return(
        <header>
            <div className="logo">
                <img src={trollPic} alt="Troll Face" className="troll-face"></img>
                <span className="title">Meme Generator</span>
            </div>
        </header>
    )
}

export default Header