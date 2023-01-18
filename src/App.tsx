import React, {useState} from 'react';
import { card, ICard } from './state';

function App() {
    const [ cards, setCards ] = useState(card);

    const handlerSelect = (event: React.MouseEvent< HTMLDivElement | HTMLAnchorElement>) => {
        if ( event.currentTarget.dataset.disable === 'true' ) return;
        const newCard: Array<ICard> = cards.map((el, index) => {
            if ( Number( event.currentTarget.dataset.index ) === index ) {
                return {...el, isSelect: !el.isSelect}
            } else {
                return {...el}
            }
        })
        setCards(newCard);
    }

  return (
    <>
        <header>
        <h1 className='logo'>
            Ты сегодня покормил кота?
        </h1>
        </header>
        <main className='cards'>
            {cards.map(( el, index) =>
                <div
                    className='card'
                    data-select={ el.isSelect }
                    data-disable={ el.isDisable }
                    data-index={ index }
                    onClick={ handlerSelect }
                    key={ index }
                >
                    <p className='card__subtitle'>
                        Сказочное заморское яство
                    </p>
                    <p className='card__subtitle card__subtitle--select'>
                        Котэ не одобряет?
                    </p>
                    <h3 className='card__title'>
                        Нямушка
                    </h3>
                    <div className='card__suptitle'>
                        { el.yummy }
                    </div>
                    <div className='card__supsuptitle'>
                        <p>
                            { el.portions } порций
                        </p>
                        <p>
                            { el.extra }
                        </p>
                    </div>
                    <div className='card__oval'>
                        { el.weight }
                        <span>кг</span>
                    </div>
                    <p className='card__footer' onClick={(event:React.MouseEvent<HTMLParagraphElement>) => event.stopPropagation()}>
                        Чего сидишь? Порадуй котэ, <a href='#' onClick={ handlerSelect } data-index={ index }>купи</a>.
                    </p>
                </div>
            )}
        </main>
    </>
  );
}

export default App;
