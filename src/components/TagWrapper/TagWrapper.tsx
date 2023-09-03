import styles from './TagWrapper.module.scss';
import { hashTagIcon, plusIcon } from '../../icons/svgIcons';
import { ITag } from '../../types/ITag';
import { FC, useState, ChangeEvent } from "react"

interface ITagWrapper {
    tags: ITag[]
    setTags: (tag: ITag[]) => void;
}

const TagWrapper: FC<ITagWrapper> = ({ setTags, tags }) => {
    const [value, setValue] = useState<string>('')

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
    const addInTags = (value: string) => {
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

export default TagWrapper;
