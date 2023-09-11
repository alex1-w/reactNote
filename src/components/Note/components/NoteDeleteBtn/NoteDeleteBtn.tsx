import styles from './NoteDeleteBtn.module.scss';
import { FC, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { minusIcon } from '../../../../icons/svgIcons';
import { useOnClickOutside } from '../../../../hooks/useClickOutside';
import { useAppDispatch } from '../../../../store/reduxActions';
import { trashActions } from '../../../../store/trash/trash';
import { actions } from '../../../../store/notes/notes';
import { INote } from '../../../../types/Note.interface';

const NoteDeleteBtn: FC<{ note: INote }> = ({ note }) => {
  const [isDeleteBtn, setIsDeleteBtn] = useState(false);
  const deleteBtnRef = useRef<HTMLDivElement>(null);
  const showDeleteBtn = () => setIsDeleteBtn(!isDeleteBtn);
  useOnClickOutside(deleteBtnRef, () => setIsDeleteBtn(false));

  const dispatch = useAppDispatch();

  const deleteNote = () => {
    dispatch(trashActions.addToTrash(note));
    dispatch(actions.deleteNote(note.id));
  };

  return (
    <div className={styles.deleteBlock} onClick={showDeleteBtn}>
      {minusIcon}

      <AnimatePresence>
        {isDeleteBtn && (
          <motion.div
            className={styles.deleteBtn}
            ref={deleteBtnRef}
            initial={{ width: 0, border: 0 }}
            animate={{ width: 150, border: '2.4px solid black' }}
            exit={{ width: 0, border: 0 }}
            transition={{ type: 'spring', damping: 40, bounce: 70, stiffness: 400 }}
          >
            <button type='submit' onClick={deleteNote}>
              <p>are&#160;you&#160;sure&#160;?</p>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NoteDeleteBtn;
