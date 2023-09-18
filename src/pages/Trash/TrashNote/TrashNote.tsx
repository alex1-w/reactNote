import { INote } from '../../../types/Note.interface';
import styles from './TrashNote.module.scss';
import { FC, useState } from 'react';
import { regainIcon } from '../../../icons/svgIcons';
import { useAppDispatch } from '../../../store/reduxActions';
import { trashActions } from '../../../store/trash/trash';
import { actions } from '../../../store/notes/notes';

const TrashNote: FC<{ note: INote }> = ({ note }) => {
  const { createdAt, id, tags, text, title, color } = note;

  const dispatch = useAppDispatch();

  const recover = () => {
    dispatch(actions.addToNotes(note))
    dispatch(trashActions.deleteFromTrash(id));
  };

  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <h5>{title}</h5>
        <button onClick={recover}> {regainIcon}</button>
      </div>

      <div>{text}</div>
    </div>
  );
};

export default TrashNote;
