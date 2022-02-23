import pic from "../images/pic.jpg"
import email from "../images/email.png"
import linkedin from "../images/linkedin.png"

export default function Info(){
    return(
        <div className="info">
            <img className="profile--pic" src={pic} />
            <h1>Teodora</h1>
            <h4>Frontend Developer</h4>
            <div className="button--div">
                <button><img src={email} /> Email</button>
                <button><img src = {linkedin} /> LinkedIn</button>
            </div>
        </div>
    )
}