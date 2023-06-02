import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

function NavigationLinks(){
    return(
        <>
        <Link to="/home">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/about">About Us</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/search">Search</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/friends">All Friends</Link> &nbsp;&nbsp;&nbsp;&nbsp;

        <Link to="/xyz">Invalid</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        </>
    )
}
export default NavigationLinks;