import facebook from "./images/facebook.png"
import instagram from "./images/instagram (1).png"
import twitter from "./images/twitter (1).png"
import github from "./images/github.png"

export default function Footer(){
    return(
    <footer>
        <img src= {facebook} />
        <img src= {instagram} />
        <img src= {twitter} />
        <img src= {github} />
    </footer>
    )
}