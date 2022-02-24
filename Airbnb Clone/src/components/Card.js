
export default function Card(props) {

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-button">{badgeText}</div>}
            <img src={process.env.PUBLIC_URL + `images/${props.item.coverImg}`} className="main-pic" />
            <div className="rating">
                <img src={process.env.PUBLIC_URL + "images/Star 1.png"} className="star" />
                <span><b>{props.item.stats.rating}</b></span>
                <span>({props.item.stats.reviewCount}).</span>
                <span>{props.item.country}</span>
            </div>
            <h4>{props.item.title}
            </h4>
            <p>
                <span><b>From {props.item.price}$</b> / person</span>
            </p>
        </div>
    )
}