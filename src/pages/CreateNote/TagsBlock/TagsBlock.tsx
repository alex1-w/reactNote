import styles from './TagsBlock.module.scss';
import { ITag } from '../../../types/ITag';
import { FC, useState } from "react"
import Tag from '../../../components/Tag/Tag';
import AddTagBlock from '../../../components/AddTagBlock/AddTagBlock';

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

                <h3>Теги:</h3>

                <div className={styles.tagsBlock}>
                    {tags.map(tag => (
                        <Tag name={tag.name} key={tag.name} />
                    ))}
                </div>

            </div>


            <AddTagBlock setTags={setTags} tags={tags} showNewTag={showNewTag} />

        </div>
    )
};

export default TagsBlock;
