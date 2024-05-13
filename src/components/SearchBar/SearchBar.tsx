import { useState, FormEvent, ChangeEvent, FC } from 'react'
import css from './SearchBar.module.css'
import { BsSearch } from "react-icons/bs";
import {toast} from 'react-hot-toast';

interface SearchBarProps {
    onSearch: (query: string) => void;
}
const SearchBar: FC<SearchBarProps> = ({onSearch}) => {
  const [query, setQuery] = useState('');

  const inputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const inputValue = evt.target.value;
    setQuery(inputValue);
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // Викликаем функцію пропс і записуємо в form

    if (!query.trim()) {
      toast("Please enter search images and photos!");
      return;  
    } onSearch(query);
      setQuery("");
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={inputChange}
          value={query}
        />
        <button className={css.button} type="submit"><BsSearch size="20px"/></button>
      </form>
    </header>
  );
};

export default SearchBar;