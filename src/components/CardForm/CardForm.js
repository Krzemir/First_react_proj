import styles from './CardForm.modules.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const CardForm = (props) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addCard({ title: title }, props.columnId);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.CardForm}>
      <div>
        <TextInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <Button>Add card</Button>
      </div>
    </form>
  );
};

export default CardForm;
