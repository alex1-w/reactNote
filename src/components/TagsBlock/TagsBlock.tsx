import styles from './TagsBlock.module.scss';
import { ITag } from '../../types/ITag';
import { FC } from 'react';
import Tag from '../Tag/Tag';
import AddTagBlock from './AddTagBlock/AddTagBlock';
import { AddTagBlockVariant } from '../../pages/CreateNote/CreateNote';

interface ITagsBlock {
  tags?: ITag[];
  setTags?: (tags: ITag[]) => void;
  setNewTags?: (tags: ITag[]) => void;
  newTags?: ITag[];
}

const TagsBlock: FC<ITagsBlock> = ({ tags, setTags , setNewTags, newTags }) => {

  return (
    <div className={styles.main}>
      <div>
        <h3>Теги:</h3>

        <div className={styles.tagsBlock}>
          {tags?.map((tag) => (
            <Tag name={tag.name} />
          ))}
        </div>
      </div>

      <AddTagBlock tags={tags} setTags={setTags} setNewTags={setNewTags} newTags={newTags}/>
    </div>
  );
};

export default TagsBlock;
