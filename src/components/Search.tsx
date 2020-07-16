import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('programming');
  const [debounceTerm, setDebounceTerm] = useState<string>(searchTerm);
  const [results, setResults] = useState<any[]>([]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    const searchApi = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debounceTerm,
        },
      });
      if (!data.error) {
        setResults(data.query.search);
      } else {
        setResults([]);
      }
    };
    searchApi();
  }, [debounceTerm]);

  const renderResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* {result.snippet} */}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{renderResults}</div>
    </div>
  );
};
export default Search;
