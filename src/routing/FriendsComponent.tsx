import { Link, Route, Routes } from "react-router-dom";
import Card from "../components/Card";
import FriendDetail from "./FriendDetail";
import { ErrorComponent } from "./RoutingComponents";

function FriendsComponent(props:any){
    return(
        <Card title="FriendsComponent">

        {/* <p>{JSON.stringify(props)}</p> */}
            {
                props.friends.map((f:string)=>{
                    return (
                        <>
                    <Link to={`friend/${f}`}>{f}</Link> 
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    </>
                    
                    )
                })
            }
            <Routes>
                <Route path="/" element={<h6>No friend detail to show</h6>}></Route>
                <Route path="friend/:friendname" element={<FriendDetail/>}></Route>
                <Route path="*" element={<ErrorComponent/>}></Route>
            </Routes>
        </Card>
    )
}

export default FriendsComponent;