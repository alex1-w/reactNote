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
import { useSelector } from 'react-redux';
import { TagBlock } from './components/TagBlock/TagBlock';

const Note: FC<{ note: INote }> = ({ note }) => {
    const { color, id, text, title, tags } = note
    const [isDeleteBtn, setIsDeleteBtn] = useState(false)
    const deleteBtnRef = useRef<HTMLDivElement>(null)

    console.log(tags);

    useOnClickOutside(deleteBtnRef, () => setIsDeleteBtn(false))
    const showDeleteBtn = () => setIsDeleteBtn(!isDeleteBtn)

    const dispatch = useAppDispatch()

    const deleteNote = () => {
        dispatch(trashActions.addToTrash(note))
        dispatch(actions.deleteNote(id))
    }

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

            <div className={cn(styles.textBlock, { [styles.darkText]: color === 'dark', })}>
                <p>{text}</p>
            </div>

            <div className={styles.footer}>
                <div className={styles.footer__interface}>

                    <Link to={`/edit/${id}`}>
                        {editIcon}
                    </Link>

                    <div className={styles.footer__interface__deleteBlock} onClick={showDeleteBtn}>

                        {minusIcon}

                        <AnimatePresence>
                            {isDeleteBtn
                                &&
                                <motion.div
                                    className={styles.footer__interface__deleteBtn}
                                    ref={deleteBtnRef}
                                    initial={{ width: 0, border: 0 }}
                                    animate={{ width: 150, border: '2.4px solid black' }}
                                    exit={{ width: 0, border:0 }}
                                    transition={{ type: 'spring', damping: 40, bounce: 70, stiffness:400 }}
                                >
                                    <button type="submit" onClick={deleteNote}>
                                        <p>are&#160;you&#160;sure&#160;?</p>
                                    </button>

                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>
                </div>

                <TagBlock tags={tags} />
            </div>
        </div >
    )
};

export default Note;
