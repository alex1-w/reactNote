import styles from './Trash.module.scss';
import { useSelector } from 'react-redux';
import { FC } from 'react';
import TrashNote from './TrashNote/TrashNote';
import { INote } from '../../types/Note.interface';
import { trashIcon } from '../../icons/svgIcons';
import { useAppDispatch } from '../../store/reduxActions';
import { trashActions } from '../../store/trash/trash';

const Trash: FC = () => {
  const trash = useSelector((state: any) => state.trash);
  const dispatch = useAppDispatch();

  const clean = () => dispatch(trashActions.cleanTrash());

  return (
    <main className={styles.main}>
      <section className={styles.main__section}>
        <div className={styles.head}>
          <h1>TRASH</h1>
          <div>
            <button onClick={clean}>{trashIcon}</button>
          </div>
        </div>
        <>
          {trash.length ? (
            <div className={styles.notesBlock}>
              {trash?.map((note: INote) => (
                <TrashNote note={note} key={note.id} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <p>пусто</p>
            </div>
          )}
        </>
      </section>
    </main>
  );
};

export default Trash;
