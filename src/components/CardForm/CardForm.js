import styles from './CardForm.modules.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const CardForm = (props) => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ title, columnId:props.columnId }));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.CardForm}>
      <div>
        <TextInput type="text" value={title}  onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <Button>Add card</Button>
      </div>
    </form>
  );
};

export default CardForm;
