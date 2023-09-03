import styles from './Note.module.scss';
import { INote } from '../../types/Note.interface';
import { FC, useRef, useState } from "react"
import cn from 'classnames'
import { editIcon, minusIcon } from '../../icons/svgIcons';
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '../../store/reduxActions';
import { actions } from '../../store/notes/notes';
import { useOnClickOutside } from '../../hooks/useClickOutside';
import { trashActions, trashSlice } from '../../store/trash/trash';
import { formateDate } from '../../helpers/formateDate';

const Note: FC<{ note: INote }> = ({ note }) => {
    const { color, id, text, title } = note
    const [isDeleteBtn, setIsDeleteBtn] = useState(false)
    const deleteBtnRef = useRef<HTMLButtonElement>(null)


    useOnClickOutside(deleteBtnRef, () => setIsDeleteBtn(false))
    const showDeleteBtn = () => setIsDeleteBtn(!isDeleteBtn)

    const dispatch = useAppDispatch()

    const deleteNote = () => {
        dispatch(trashActions.addToTrash(note))
        dispatch(actions.deleteNote(id))
    }

    // console.log(note.createdAt);
    

    return (
        <div className={cn(styles.main,
            {
                [styles.dark]: note.color === 'dark',
                [styles.yellow]: color === 'yellow',
                [styles.green]: color === 'green',
                [styles.blue]: color === 'blue',
            })}
        >
            <div className={cn(styles.titleBlock, { [styles.darkTitle]: color === 'dark' })}>

                <h5>{title}</h5>

                <div>
                    <p>создано:</p>
                    <p>{formateDate(note.createdAt)}</p>
                </div>

            </div>

            <div className={cn(styles.textBlock, {
                [styles.darkText]: color === 'dark',
            })}>
                <p>{text}</p>
            </div>

            <div className={styles.footer}>

                <Link to={`/edit/${id}`}>
                    {editIcon}
                </Link>

                <div
                    className={styles.footer__deleteBlock}
                    onClick={showDeleteBtn}
                >

                    {minusIcon}

                    <AnimatePresence>
                        {isDeleteBtn
                            &&
                            <motion.button
                                type="submit"
                                initial={{ width: 0 }}
                                animate={{ width: 150 }}
                                exit={{ width: 0 }} onClick={deleteNote}
                                ref={deleteBtnRef}
                            >
                                <p>are&#160;you&#160;sure&#160;?</p>
                            </motion.button>
                        }
                    </AnimatePresence>

                </div>
            </div>
        </div >
    )
};

export default Note;
