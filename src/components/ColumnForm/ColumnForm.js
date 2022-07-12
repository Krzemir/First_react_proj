import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';


const ColumnForm = (props) => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon }));
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleChange} className={styles.columnForm}>
      <div>
        <label>Title: </label> <TextInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Icon:</label> <TextInput type="text" value={icon} onChange={(e) => setIcon(e.target.value)} />
      </div>
      <div>
        <Button>Add column</Button>
      </div>
    </form>
  );
};

export default ColumnForm;
