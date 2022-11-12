import React from 'react'
import Items from './Items'
import data  from './etsy.js'

const Listing = () => {
    //const items = JSON.parse(Etsy)
    //console.log(items)
    return (
        <div>       
            {data.map((item) => {
                return <Items item={item} key={item.listing_id} />
            })}
        </div>
    );
}

export default Listing