import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';

export interface Item {
  title: string;
  content: string;
}
export interface DropdownOption {
  label: string;
  value: string;
}
const items: Item[] = [
  {
    title: 'What is React?',
    content: 'React is a frontend library.',
  },
  {
    title: 'Why use React?',
    content: 'React is surprisingly popular among developers.',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components.',
  },
];
const dropdownOptions: DropdownOption[] = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];
export default function App() {
  const [selected, setSelected] = useState<DropdownOption>(dropdownOptions[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selected}
          label="Select from list"
          options={dropdownOptions}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}
