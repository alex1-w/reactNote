import { INote } from '../../../types/Note.interface';
import styles from './TrashNote.module.scss';
import { FC, useState } from "react"
import { motion } from 'framer-motion'
import { regainIcon } from '../../../icons/svgIcons';

const TrashNote: FC<{ note: INote }> = ({ note }) => {
    const { createdAt, id, tags, text, title, color } = note
    const [isTextShowed, setIsTextShowed] = useState<boolean>(false)

    const showText = () => setIsTextShowed(!isTextShowed)

    return (

        <div className={styles.main} onClick={showText}>

            <div className={styles.head}>
                <h5>{title}</h5>
                {/* {regainIcon} */}
            </div>

            <motion.div
                initial={{ height: '30px' }}
                animate={isTextShowed ? { height: 'fit-content' } : { height: '30px' }}
            >
                <p>{text}</p>
            </motion.div>



        </div>


    )
};

export default TrashNote