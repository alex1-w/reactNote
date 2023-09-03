import styles from './Trash.module.scss';
import { useSelector } from 'react-redux';
import { FC } from "react"
import TrashNote from './TrashNote/TrashNote';
import { INote } from '../../types/Note.interface';

const Trash: FC = () => {

    const trash = useSelector((state: any) => state.trash)

    // console.log(trash);


    return (
        <main className={styles.main}>

            <section className={styles.main__section}>

                <div className={styles.head}>
                    <h1>TRASH</h1>
                </div>

                <div>
                    {trash.map((note: INote) => (
                        <TrashNote note={note} key={note.id} />
                    ))}
                </div>

            </section>

        </main>
    )
};

export default Trash;
