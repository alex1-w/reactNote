import styles from './HomePage.module.scss';
// import { useAppSelector } from '../../store/reduxActions';
import { FC } from "react"
// import { Note } from '@mui/icons-material';
import Note from '../../components/Note/Note'
import { useAppSelector } from '../../store/reduxActions';
import { INote } from '../../types/Note.interface';

const HomePage: FC = () => {

    const notes = useAppSelector(state => state.notes)
    const trash = useAppSelector(state => state.trash)
    console.log(notes, trash);

    return (
        <main className={styles.main}>
            <section>

                {notes?.map((note: INote) => (

                    <Note
                        note={note}
                    />
                ))}

            </section>
        </main>
    )
};

export default HomePage;
