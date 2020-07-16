import React, { Fragment, useState } from 'react';
import { Item } from '../App';

interface Iprops {
  items: Item[];
}
const Accordion: React.FC<Iprops> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const onTitleClicked = (index: number) => {
    setActiveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
