import styles from './AddTagBlock.module.scss';
import { hashTagIcon, plusIcon } from '../../icons/svgIcons';
import { ITag } from '../../types/ITag';
import { FC, useState, ChangeEvent } from 'react';
import { AddTagBlockVariant } from '../../pages/CreateNote/CreateNote';

interface IAddTagBlock {
  setEditedTags: (tags: ITag[]) => void;
  editedTags?: ITag[];
  currentTags?: ITag[];
  type: AddTagBlockVariant
}

const AddTagBlock: FC<IAddTagBlock> = ({ setEditedTags, editedTags, currentTags, type }) => {
  const [value, setValue] = useState<string>('');
  const accessAddingTag = type === 'editPage' && Boolean([...editedTags!, ...currentTags!].length < 5);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const addInTags = (value: string) => {
    editedTags && setEditedTags([...editedTags!, { name: value }]);
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
          disabled={!accessAddingTag}
        />
      </div>

      <button disabled={type === 'editPage' ? !accessAddingTag : true} onClick={() => addInTags(value)} type='button'>
        {plusIcon}
      </button>
    </div>
  );
};

export default AddTagBlock;
