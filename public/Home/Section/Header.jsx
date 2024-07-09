import '../../css/Header.css'
import headerLogo from '../assets/headerLogo.svg'
import headerIconMenu from '../assets/header_icon.svg'

export function Header(){

    return(
        <>
            <div id="header_language">
                <a href="#Fr">
                    <h5 id='header_languageFr'>
                        FR
                    </h5>
                </a>
                <a href="#En">
                    <h5 id='header_languageEn'>
                        EN
                    </h5>
                </a>
            </div>
            <div id="header_logo">
                <img src={headerLogo} alt="Logo du Château Kirwan" />
            </div>
            <div id="header_iconMenu">
                <img src={headerIconMenu} alt="Icon Menu du Château Kirwan" />
            </div>
        </>
    )
}