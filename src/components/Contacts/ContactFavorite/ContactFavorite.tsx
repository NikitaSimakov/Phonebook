import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BsPersonHeart } from 'react-icons/bs';
import Button from '../../Button/Button';
import { useAppDispatch } from '../../../redux/hooks';
import { favoriteContact } from '../../../redux/contact/thunks';
import { selectFavoriteIds } from '../../../redux/selectors';

interface IContactFavProps {
  id: string;
}

const ContactFavorite: FC<IContactFavProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const favoritesIds = useSelector(selectFavoriteIds);

  const isFavorite = useMemo(
    () => Boolean(favoritesIds.includes(id)),
    [favoritesIds, id]
  );
  const isFavoriteChoice = () => {
    if (favoritesIds.includes(id)) {
      return dispatch(favoriteContact(id, 'remove'));
    }
    return dispatch(favoriteContact(id, 'add'));
  };
  return (
    <>
      <Button event={() => isFavoriteChoice()}>
        <BsPersonHeart fill={isFavorite ? '#fde11b' : 'black'} />
      </Button>
    </>
  );
};

export default ContactFavorite;
