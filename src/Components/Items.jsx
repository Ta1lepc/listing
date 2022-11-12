import React from 'react'

const valute = (currency) => {
    if (currency === 'USD') return '$'
    if (currency === 'EUR') return 'ˆ'
    return 'GBP'
}

const ellipsis = (tit) => tit?.length > 50 ?  tit.slice(0, 49) + '...' :  tit;

const level = (lvl) => {
    if (lvl <= 10) return 'low'
    if (lvl <= 20) return 'medium'
    return 'high'
}

const Items = ({item}) => {   
    return (
        <div className="item-list" key={item.listing_id}>
            <div className="item">
                <div className="item-image">
                    <a href={item.url}>
                        <img src={item?.url_570xN} alt="" />
                     </a>
                </div>
                    <div className="item-details">
                    <p className="item-title">{ellipsis(item?.title)}</p>
                    <p className="item-price">{valute(item.currency_code)} {item.price}</p>
                    <p className={`item-quantity level-${level(item.quantity)}`}>{item.quantity} left</p>
                    </div>
                </div>
            </div>   
    );
}

export default Items