function Card(props:any){
    return(
        <div className="container">
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header headerbg">
                        {props.title}
                    </div>
                        <div className="card-body">
                            {props.children}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Card;