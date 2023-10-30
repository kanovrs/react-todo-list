import logo from '../../img/template-monster-character.png';
import '../header/header.css'

function Header() {
    return (
        <>
            <header className='header__block'>
                <div className='header__logo'>
                    <a href='https://example.com'><img src={logo} alt='logo'></img></a>
                </div>
                <ul className='header__menu'>
                    <li><a className='header__link' href='/'>Главная</a></li>
                    <li><a className='header__link' href='/services'>Услуги</a></li>
                    <li><a className='header__link' href='/contac'>Контакты</a></li>
                </ul>
            </header>
        </>
    )
}

export default Header;