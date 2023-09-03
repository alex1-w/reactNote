import styles from './TagsBlock.module.scss';
import { ITag } from '../../../types/ITag';
import { FC, useState } from "react"
import Tag from '../../../components/Tag/Tag';
import TagWrapper from '../../../components/TagWrapper/TagWrapper';

interface ITagsBlock {
    tags: ITag[];
    setTags: (newTag: ITag[]) => void
}

const TagsBlock: FC<ITagsBlock> = ({ setTags, tags }) => {
    const [newTag, setNewTag] = useState<boolean>(false)
    const showNewTag = () => setNewTag(true)

    return (
        <div className={styles.main}>

            <div>
                {tags.map(tag => (
                    <Tag name={tag.name} key={tag.name} />
                ))}
            </div>

            <div>
                {
                    newTag && <TagWrapper setTags={setTags} tags={tags}/>
                }
                <button onClick={showNewTag}>добавить тег</button>
            </div>

        </div>
    )
};

export default TagsBlock;
