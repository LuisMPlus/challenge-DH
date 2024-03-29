import { Link } from "react-router-dom";

function Company(props){
    return(
        <Link to={"/empresas/"+ props.id} className="card mb-3 "  style={{ maxWidth: '600px', textDecoration: 'none' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.logo} className="img-fluid rounded-start" alt={props.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className="text-body-secondary">{props.location}</small></p>
                    </div>
                </div>
            </div>
        </Link>
)
}

export default Company;