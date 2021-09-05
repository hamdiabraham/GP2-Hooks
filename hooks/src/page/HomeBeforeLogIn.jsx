import { Link } from 'react-router-dom'

function HomeBeforeLogIn(){
    return(
        <div>
            <p>Ini Home Sebelum Log In</p>
            <p><Link className='link' to="/Home">Home</Link></p>
        </div>
    )
}

export default HomeBeforeLogIn;