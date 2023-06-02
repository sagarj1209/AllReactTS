import { Navigate, Route, Routes } from "react-router-dom";
import Card from "../components/Card";
import FriendsComponent from "./FriendsComponent";
import NavigationLinks from "./NavigationLinks";
import * as components from "./RoutingComponents"

const friendList = ["sagar" , "abhishek", "aditya", "manik"];

function RoutingShell1(){
    return(
        <Card title="RoutingShell 1">
            <NavigationLinks/>
            <hr/>

            {/* Define the routes */}
            <Routes>

                <Route path="/" element={<Navigate to="/home"/>} ></Route>
                <Route path="/home" element={<components.HomeComponent/>} ></Route>
                <Route path="/about" element={<components.AboutComponent/>} ></Route>
                <Route path="/search" element={<components.SearchComponent/>} ></Route>
                <Route path="/friends/*" element={<FriendsComponent friends={friendList}/>} ></Route>

                <Route path="*" element={<components.ErrorComponent/>} ></Route>
            </Routes>
        </Card>
    )
}

export default RoutingShell1;