import { useParams } from "react-router-dom";

const Marque = () => {
    let {name} = useParams();
    // recherche dans les param un paramètre qui s'appelle name et crée une variable dans les hook qui s'appelle name
    return <h1>Marque {name} </h1>;
}
 
export default Marque;