import styles from './TagsBlock.module.scss';
import { ITag } from '../../../types/ITag';
import { FC, useState } from 'react';
import Tag from '../../../components/Tag/Tag';
import AddTagBlock from '../../../components/AddTagBlock/AddTagBlock';
import { AddTagBlockVariant } from '../CreateNote';


interface ITagsBlock {
  currentTags?: ITag[];
  setEditedTags?: (tags: ITag[]) => void;
  editedTags?: ITag[];
  type: AddTagBlockVariant
}

const TagsBlock: FC<ITagsBlock> = ({ currentTags, setEditedTags, editedTags, type }) => {
  return (
    <div className={styles.main}>
      <div>
        <h3>Теги:</h3>

        <div className={styles.tagsBlock}>
          {currentTags?.length && (
            <>
              {[...currentTags, ...editedTags!].map((tag) => (
                <Tag name={tag.name} />
              ))}
            </>
          )}
        </div>
      </div>

      <AddTagBlock
        setEditedTags={setEditedTags!}
        editedTags={editedTags}
        currentTags={currentTags}
        type={type}
      />
    </div>
  );
};

export default TagsBlock;
