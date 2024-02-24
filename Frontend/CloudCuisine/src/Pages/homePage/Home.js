import homeImg from "../../images/bgimg2.jpg"
import "./home.css"
import { useNavigate } from "react-router-dom"
const Home = () => {

    const navigate = useNavigate()
    const loginUser = () => {
        navigate('/signin')
    }
    const SignupUser = () => {
        navigate('/signup')
    }
    const RegisterRest = () => {
        navigate('/registerRestaurant')
    }
    return (
        <div className="container-fluid"
            style={{
                backgroundImage: `url(${homeImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}>

            <div class="nav">
                <nav className="navbar navbar-expand-lg">
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item '>
                            <button className="btn" onClick={loginUser} >
                                Login
                            </button>
                        </li>
                        <li className='nav-item' class="d">
                            <button className="btn" onClick={SignupUser} >
                                Sign Up
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="p">
                <div className="row">
                    <div className="col col-6" >
                        <div className="foodi">Welcome to</div>
                        <div className="logo1"><b>CloudCuisine</b></div>
                        <div className="text1">
                            <p>This platform facilitates ordering a variety of cuisine from cloud kitchens located in your vicinity. Users can explore an array of dishes through a user-friendly interface and place orders effortlessly. Managed by the admin, cloud kitchens can showcase their menu offerings, while users can add items to their carts for convenient ordering. Delivery personnel can access assigned orders along with their delivery addresses for efficient service.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="link1">
            <a href="/contactUs" className="nav-link">
                Contact Us
              </a>
        </div>
        </div>
        
    );
}

export default Home;