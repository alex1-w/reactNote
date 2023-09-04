import { ITag } from '../../../../types/ITag'
import Tag from '../../../Tag/Tag'
import { TagSwiper } from '../TagSwiper/TagSwiper'
import styles from './TagBlock.module.scss'
import { FC } from 'react'



export const TagBlock: FC<{ tags: ITag[] }> = ({ tags }) => {

    return (
        <div className={styles.main}>

            {
                tags.length < 3
                    ?
                    <div className={styles.tagsBlock}>
                        {tags.map(tag => (
                            <Tag name={tag.name} key={tag.name} />
                        ))}
                    </div>
                    :
                    <TagSwiper tags={tags} />
            }
        </div>
    )
}
