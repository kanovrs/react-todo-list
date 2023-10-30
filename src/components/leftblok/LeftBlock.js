import '../leftblok/leftBlock.css'

function LeftBlock() {
    return (
        <>
             <div className='side-navigation'>
      <ul>
        <li><a href='/'>Главная</a></li>
        <li><a href='/about'>О нас</a></li>
        <li><a href='/services'>Услуги</a></li>
        <li><a href='/contact'>Контакты</a></li>
      </ul>
    </div>
        </>
    )
} 

export default LeftBlock;
