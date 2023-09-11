import styles from './ChangeColorComponent.module.scss';
import { FC, useState } from 'react';
import Color from './Color/Color';

export type ColorType = 'yellow' | 'green' | 'blue' | 'dark';

const colors: ColorType[] = ['yellow', 'green', 'blue', 'dark'];

const ChangeColorComponent: FC<{ setColor: (color: ColorType) => void }> = ({ setColor }) => {
  return (
    <div className={styles.main}>
      {colors.map((item) => (
        <Color color={item} key={item} setColor={setColor} />
      ))}
    </div>
  );
};

export default ChangeColorComponent;
