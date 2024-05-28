import {Link, useNavigate} from 'react-router-dom'
import logo from '../assets/react.svg'
import '.../App.css'

const Home = () => {

    return (
        <div>
            <p> Outra tela inicial</p>
                <img className= 'img-fluid' src={logo}
                  alt='logo'> </img>
        </div>
    )
}

export default Home