import { FC } from 'react';
import css from './ContactListItemCard.module.scss';
import img from './contact_default.jpeg';
import { BsFillTelephoneFill } from 'react-icons/bs';

interface ContactCardProp {
  name: string;
  number: string;
}

const ContaListItemCard: FC<ContactCardProp> = ({ name, number }) => {
  return (
    <>
      <img className={css.image} src={img} alt="contact default pic" />
      <div className={css.textBox}>
        <p className={css.name}>{name}</p>
        <div className={css.phoneBox}>
          <BsFillTelephoneFill
            className={css.phoneIcon}
            fill="#97c784"
            height={15}
          />
          <a className={css.number} href={`tel:${number}`}>
            {number}
          </a>
        </div>
      </div>
    </>
  );
};

export default ContaListItemCard;
