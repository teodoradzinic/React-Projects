
export default function Navbar(){
    return(
        <nav>
            <img src={process.env.PUBLIC_URL+"images/globe.png"} className="logo" />
            <span>Teodora's travel journal</span>
        </nav>
    )
}