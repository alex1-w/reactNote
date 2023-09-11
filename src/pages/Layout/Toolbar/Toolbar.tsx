import styles from './Toolbar.module.scss';
import { createNoteIcon, homeIcon, trashIcon } from '../../../icons/svgIcons';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Toolbar: FC = () => {
  const [isToolBarShowed, setIsToolBarShowed] = useState<boolean>(false);

  const showToolBar = () => setIsToolBarShowed(true);
  const hideToolBar = () => setIsToolBarShowed(false);

  return (
    <motion.div
      onMouseEnter={showToolBar}
      onMouseLeave={hideToolBar}
      initial={{ x: -60 }}
      animate={isToolBarShowed ? { x: 0 } : { x: -60 }}
      className={styles.main}
      transition={{ type: 'spring', stiffness: 130, bounce: 0, damping: 20 }}
    >
      <Link to='/'>{homeIcon}</Link>

      <Link to='/create-note'>{createNoteIcon}</Link>

      <Link to='/trash'>{trashIcon}</Link>
    </motion.div>
  );
};

export default Toolbar;
