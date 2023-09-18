import styles from './Note.module.scss';
import { INote } from '../../types/Note.interface';
import { FC } from 'react';
import cn from 'classnames';
import { editIcon, minusIcon } from '../../icons/svgIcons';
import { Link } from 'react-router-dom';
import { formateDate } from '../../helpers/formateDate';
import { TagBlock } from './components/TagBlock/TagBlock';
import NoteDeleteBtn from './components/NoteDeleteBtn/NoteDeleteBtn';

const Note: FC<{ note: INote }> = ({ note }) => {
  const { color, id, text, title, tags } = note;

  return (
    <div className={cn(styles.main, styles[color])}>
      <div className={styles.titleBlock}>
        <h5>{title}</h5>

        <div>
          <p>создано:</p>
          <p>{formateDate(note.createdAt)}</p>
        </div>
      </div>

      <div className={styles.textBlock}>
        <p>{text}</p>
      </div>

      <div className={styles.footer}>
        <div className={styles.footer__interface}>
          <Link to={`/edit/${id}`}>{editIcon}</Link>
          <NoteDeleteBtn note={note} />
        </div>

        <TagBlock tags={tags} />
      </div>
    </div>
  );
};

export default Note;
