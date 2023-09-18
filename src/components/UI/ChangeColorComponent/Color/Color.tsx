import styles from './Color.module.scss';
import { FC } from 'react';
import cn from 'classnames';
import { ColorType } from '../ChangeColorComponent';

interface IColor {
  color: ColorType;
  setColor: (color: ColorType) => void;
}

const Color: FC<IColor> = ({ color, setColor }) => {
  return (
    <button
      type='button'
      className={cn(styles.main, styles[color])}
      onClick={() => setColor(color)}
    ></button>
  );
};

export default Color;
