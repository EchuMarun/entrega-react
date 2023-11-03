import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Viaja sin escalas </h3>
            <div>
                <button>Aereos</button>
                <button>Hospedaje</button>
                <button>Pack´s Completos</button>
            </div>
            <CartWidget/>
        </nav>
        )
}
export default NavBar 