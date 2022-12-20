import { Outlet } from "react-router-dom";

const Cars = () => {
    return ( 
        <>
            <h1>Liste des voitures</h1>
            <Outlet/>
            {/* outlet va charger le composant car si j'ai une sous-route */}
        </>
     );
}
 
export default Cars;