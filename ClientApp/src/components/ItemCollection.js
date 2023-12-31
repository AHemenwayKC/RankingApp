﻿import Item from './Item';

const ItemCollection = ({ items, drag, imgArr }) => {
    <div className="items-not-ranked"> {
        items.map((item) => (item.ranking === 0)
            ? <Item item={item} drag={drag} imgArr={imgArr.find(o => o.id === item.imageId)} />
            : null)
    }
    </div>
}
export default ItemCollection;