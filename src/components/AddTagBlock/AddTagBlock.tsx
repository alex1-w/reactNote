import styles from './AddTagBlock.module.scss';
import { hashTagIcon, plusIcon } from '../../icons/svgIcons';
import { ITag } from '../../types/ITag';
import { FC, useState, ChangeEvent } from "react"

interface AddTagBlock {
    tags: ITag[]
    setTags: (tag: ITag[]) => void;
    showNewTag: () => void
}

const AddTagBlock: FC<AddTagBlock> = ({ setTags, tags, showNewTag }) => {
    const [value, setValue] = useState<string>('')

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    const addInTags = (value: string) => {
        if (value.length === 0) return alert('тег не указан')
        if (tags.length > 4) return alert('не больше 4х тегов')
        setTags([...tags, { name: value }])
        setValue('')
    }

    return (
        <div className={styles.main}>

            <div className={styles.tagWrapper}>
                {hashTagIcon}

                <input
                    type="text"
                    maxLength={10}
                    value={value}
                    onChange={changeHandler}
                />

            </div>

            <button onClick={() => addInTags(value)}>{plusIcon}</button>

        </div>
    )
};

export default AddTagBlock;
