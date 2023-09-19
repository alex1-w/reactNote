import styles from './AddTagBlock.module.scss';
import { hashTagIcon, plusIcon } from '../../../icons/svgIcons';
import { ITag } from '../../../types/ITag';
import { FC, useState, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
// import { AddTagBlockVariant } from '../../../pages/CreateNote/CreateNote';

interface IAddTagBlock {
  setTags?: (tags: ITag[]) => void;
  setNewTags?: (tags: ITag[]) => void;
  tags?: ITag[];
  newTags?: ITag[];
}

const AddTagBlock: FC<IAddTagBlock> = ({ tags, setTags, setNewTags, newTags }) => {
  const [value, setValue] = useState<string>('');
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const location = useLocation();

  const str =
    location.pathname.indexOf('edit') === 1
      ? 'edit'
      : location.pathname.indexOf('create') === 1
      ? 'create'
      : '';

  const addInTags = (value: string) => {
    switch (str) {
      case 'edit':
        setNewTags && newTags && setNewTags([...newTags, { name: value }]);
        break;
      case 'create': {
        setTags && tags && setTags([...tags, { name: value }]);
        break;
      }
    }
    setValue('');
  };

  return (
    <div className={styles.main}>
      <div className={styles.tagWrapper}>
        {hashTagIcon}
        <input
          type='text'
          maxLength={10}
          value={value}
          onChange={changeHandler}
          // disabled={!accessAddingTag}
        />
      </div>

      <button
        //  disabled={type === 'editPage' ? !accessAddingTag : true}
        onClick={() => addInTags(value)}
        type='button'
      >
        {plusIcon}
      </button>
    </div>
  );
};

export default AddTagBlock;
