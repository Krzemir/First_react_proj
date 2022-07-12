import styles from './SearchForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {

const dispatch = useDispatch();

const [search, setSearch] = useState('');


const handleSubmit = e => {
  
  e.preventDefault();
  
dispatch({type: 'ADD_SEARCH', payload: search});  
}


  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search..." />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
