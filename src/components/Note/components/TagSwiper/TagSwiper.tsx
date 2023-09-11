import styles from './TagSwiper.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ITag } from '../../../../types/ITag';
import Tag from '../../../Tag/Tag';
import { FC } from 'react';

export const TagSwiper: FC<{ tags: ITag[] }> = ({ tags }) => {
  return (
    <Swiper
      className={styles.main}
      // spaceBetween={10}
      slidesPerView={2.6}
    >
      {tags.map((tag) => (
        <SwiperSlide key={tag.name}>
          <Tag name={tag.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
