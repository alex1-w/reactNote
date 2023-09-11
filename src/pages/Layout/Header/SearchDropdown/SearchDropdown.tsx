import styles from './SearchDropdown.module.scss';
import NoteMini from '../../../../components/NoteMini/NoteMini';
import { INote } from '../../../../types/Note.interface';
import { FC, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOnClickOutside } from '../../../../hooks/useClickOutside';

const SearchDropdown: FC<{
    searchNotes: INote[];
    dropdown: boolean;
    setDropdown: (active: boolean) => void;
}> = ({ searchNotes, dropdown, setDropdown }) => {
    const dropdownRef = useRef(null);
    useOnClickOutside(dropdownRef, () => setDropdown(false));

    return (
        <AnimatePresence>
            {dropdown && (
                <motion.ul
                    ref={dropdownRef}
                    initial={{ height: 0 }}
                    animate={dropdown ? { height: 'auto' } : { height: 0 }}
                    exit={{ height: 0 }}
                    className={styles.main}
                >
                    {searchNotes.length ? (
                        <>
                            {searchNotes.map((note) => (
                                <NoteMini note={note} />
                            ))}
                        </>
                    ) : (
                        <p>ничего не найдено</p>
                    )}
                </motion.ul>
            )}
        </AnimatePresence>
    );
};

export default SearchDropdown;
