import styles from './TagSwiper.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ITag } from '../../../../types/ITag';
import { FC } from 'react'
import Tag from '../../../Tag/Tag';


export const TagSwiper: FC<{ tags: ITag[] }> = ({ tags }) => {

    return (
        <Swiper
            className={styles.main}
            spaceBetween={10}
            slidesPerView={'auto'}
        >
            {tags.map(tag => (
                <SwiperSlide key={tag.name}>
                    <Tag name={tag.name} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
