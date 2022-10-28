import "./navBar.css"

export default function NavBar (){
    return(
        <div className="navigation">
            <ul>
                <li><a href="#Home">Home </a></li>
                <li><a href="Map">Map</a></li>
                <li><a href="Activities">Activities</a></li>
                <li><a href="Random">Random</a></li>
            </ul>
        </div>
    )
}