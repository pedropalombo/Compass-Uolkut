import './Header.css'
const Header = () => {
  return (
    <header className='nav-bar'>
        <a href="#"><img src="\assets\logo-orkut.svg" alt="LOGO" /></a>
        <div className="container-pags">
            <a className='anchor' href="#">Sobre o Orkut</a>
            <a className='anchor' href="#">Centro de segurança</a>
        </div>
    </header>
  )
}

export default Header;