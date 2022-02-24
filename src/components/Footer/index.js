import './index.css'
import logoIn from '../pictures/logoIn.png'
import logoGit from '../pictures/logoGit.png'


function Footer() {
    return(
        <section className="containerFooter">
            <div className="txtFooter">
                <p>Desenvolvido e criado</p>
                <p><strong>Filipe Meneses Vieira</strong></p>
                <p>2022</p>
            </div>
            <div className="iconFooter">
                <a className="App-link" href='https://www.linkedin.com/in/filipemvieira/' 
                target="_blank" 
                rel='nooper noreferrer'
                >
                
                    <img src={logoIn} alt='logo linkedin'/>
                </a>
                <a
                className="App-link" href='https://github.com/Meneses89' 
                target="_blank" 
                rel='nooper noreferrer'
                >
                <img src={logoGit} alt='logo github'/>
                </a>
            </div>

        </section>
    );
}

export default Footer;