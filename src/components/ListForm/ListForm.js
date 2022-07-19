import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';


const ListForm = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleChange} className={styles.listForm}>
      <div>
        <label>Title: </label> <TextInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description:</label> <TextInput type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <Button>Add list</Button>
      </div>
    </form>
  );
};

export default ListForm;
