import styles from './Tag.module.scss';
import { hashTagIcon } from '../../icons/svgIcons';
import { ITag } from '../../types/ITag';
import { FC } from "react"


const Tag: FC<ITag> = ({ name }) => {


    return (
        <div className={styles.main}>


            {hashTagIcon}
            <p>{name}</p>

        </div>
    )
};

export default Tag;
