
export default function Card(props) {

    return (
        <div className="card">
            <img src={process.env.PUBLIC_URL + `images/${props.item.coverImg}`} 
            className="main-pic" />
           <div className="text">
            <div className="location">
                <img src={process.env.PUBLIC_URL + "images/placeholder.png"} 
                className="pin" />
                <span className="country">{props.item.location}</span>
                <a href="#">View on Google Maps</a>
            </div>
            <h4>{props.item.title}</h4> 
            <span><b>{props.item.date.from}{props.item.date.to}</b></span>
            <p>
               {props.item.description}
            </p>
            </div>
        </div>
    )
}