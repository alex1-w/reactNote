import styles from './Note.module.scss';
import { INote } from '../../types/Note.interface';
import { FC, useRef, useState } from 'react';
import cn from 'classnames';
import { editIcon, minusIcon } from '../../icons/svgIcons';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../store/reduxActions';
import { actions } from '../../store/notes/notes';
import { useOnClickOutside } from '../../hooks/useClickOutside';
import { trashActions, trashSlice } from '../../store/trash/trash';
import { formateDate } from '../../helpers/formateDate';
import { useSelector } from 'react-redux';
import { TagBlock } from './components/TagBlock/TagBlock';
import NoteDeleteBtn from './components/NoteDeleteBtn/NoteDeleteBtn';

const Note: FC<{ note: INote }> = ({ note }) => {
  const { color, id, text, title, tags } = note;

  // console.log(tags);

  return (
    <div
      className={cn(styles.main, {
        [styles.dark]: color === 'dark',
        [styles.yellow]: color === 'yellow',
        [styles.green]: color === 'green',
        [styles.blue]: color === 'blue',
      })}
    >
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
