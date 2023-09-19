import { ITag } from '../../../../types/ITag';
import Tag from '../../../Tag/Tag';
import styles from './TagBlock.module.scss';
import { FC } from 'react';

export const TagBlock: FC<{ tags: ITag[] }> = ({ tags }) => {
  return (
    <div className={styles.main}>
      <div>
        {tags?.map((tag) => (
          <Tag name={tag.name} key={tag.name} />
        ))}
      </div>
    </div>
  );
};
