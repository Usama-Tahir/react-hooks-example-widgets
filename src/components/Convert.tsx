import React, { useEffect, useState } from 'react';
import axios from 'axios';
interface Iprops {
  language: {
    label: string;
    value: string;
  };
  text: string;
}

const Convert: React.FC<Iprops> = ({ language, text }) => {
  const [translated, setTranslated] = useState<string>('');
  const [debouncedValue, setDebouncedValue] = useState<string>(translated);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedValue,
            target: language?.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedValue]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
