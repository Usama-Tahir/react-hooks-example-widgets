import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import { DropdownOption } from '../App';

const dropdownOptions: DropdownOption[] = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
];
const Translate: React.FC = () => {
  const [language, setLanguage] = useState<DropdownOption>(dropdownOptions[0]);
  const [text, setText] = useState<string>('');
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
      </div>
      <Dropdown
        label="Select a language"
        selected={language}
        options={dropdownOptions}
        onSelectedChange={setLanguage}
      ></Dropdown>
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language}></Convert>
    </div>
  );
};

export default Translate;
