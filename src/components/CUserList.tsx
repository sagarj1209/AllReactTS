import React from "react";
import { User } from "../model/User";
import Card from "./Card";

interface PropType
{
    usersss:User[]
}

class CUserList extends React.Component<PropType>
{
    render(){
        return(
            <Card title={<h1>CUserList</h1>}>
                 <span>Total users : {this.props.usersss.length}</span>
                 {
                    this.props.usersss.map(u =>{
                        return(
                            <div>
                                <span>UserName : {u.username}</span><br/>
                                <span>Password : {u.password}</span><hr/>
                            </div>
                        )
                    })
                 }
            </Card>
        )
    }
}

export default CUserList;