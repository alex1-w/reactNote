import styles from './NoteMini.module.scss';
import { INote } from '../../types/Note.interface';
import { FC } from "react"
import { noteIcon } from '../../icons/svgIcons';

const NoteMini: FC<{ note: INote }> = ({ note }) => {
    return (
        <li className={styles.main}>
            {note.title}
            {noteIcon}
        </li>
    )
};

export default NoteMini;
