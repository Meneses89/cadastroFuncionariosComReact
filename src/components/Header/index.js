import './index.css'
import logo from '../pictures/logo.png'

function Header(){
    return(
        <section className='containerHeader'>
            <div className='logo'>
                <a className="App-link" href='https://www.linkedin.com/company/mmtechretail/' 
                target="_blank" 
                rel='nooper noreferrer'
                >
                
                <img src={logo} className='imagemLogo'/>
                </a>
                
            </div>
        </section>
    );
}

export default Header;