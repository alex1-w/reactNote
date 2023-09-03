import styles from './Color.module.scss';
import { FC } from "react"
import cn from 'classnames'
import { ColorType } from '../ChangeColorComponent';

interface IColor {
    color: ColorType
    setColor: (color: ColorType) => void
}

const Color: FC<IColor> = ({ color, setColor }) => {

    return (

        <button className={cn(styles.main, {
            [styles.blue]: color === 'blue',
            [styles.dark]: color === 'dark',
            [styles.green]: color === 'green',
            [styles.yellow]: color === 'yellow',
        })}
            onClick={() => setColor(color)}
        >
        </button>
    )
};

export default Color;
