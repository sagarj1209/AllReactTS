import { useParams } from "react-router-dom";
import Card from "../components/Card";

function FriendDetail(props:any){

    const params = useParams();
    return(
        <Card title="FriendDetail">
            Dispalying details of {params.friendname}
        </Card>
    )
}

export default FriendDetail;