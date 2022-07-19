import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toggleFavorite, deleteCard } from '../../redux/cardRedux';

const Card = (props) => {


  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const cardId = props.id;

  const dispatch = useDispatch();

  const changeFavorite = (e) => {
    e.preventDefault();
     setIsFavorite(!isFavorite);
   dispatch(toggleFavorite(cardId));
  };

  const deleteOneCard = (e) => {
    e.preventDefault();
    dispatch(deleteCard(cardId));
    console.log(cardId)
  };

  return <li className={styles.card}><div>{props.title}</div><div><span className={clsx('fa fa-star-o', isFavorite && styles.active)} onClick={changeFavorite}/><span className='fa fa-trash' onClick={deleteOneCard}/></div></li>;
};

export default Card;
