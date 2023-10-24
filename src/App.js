

function App() {
  return (
    <div className="wrapper clear">

      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>
        </div>
      </div>
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" />
          <div className="headerInfo">
            <h3 className='site-title'>React sneakers</h3>
            <p>Магазин кроссовок</p>
          </div>
        </div>
        <div className="">
          <ul className="headerRigth">
            <li>
              <img width={18} height={18} src="/img/cart.svg" />
              <span>1200 p.</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/heart.svg" />
              <span>Избранное</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/profile.svg" />
              <span>Профиль</span>
            </li>
          </ul>
        </div>
      </header>
      <div className='content'>
        <div className="content__header">
          <h1>All sneakers</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="no search img" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className='cards'>
          <div className='card'>
            <div className="favorite">
              <img src="/img/heart-unl.svg" alt="no heart"/>
            </div>
            <img width={133} height={112} src='img/5.jpg'></img>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className='cardBody'>
              <div className='cardPrice'>
                <span>Цена:</span>
                <b>12 999p.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='img/plus.svg'></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
