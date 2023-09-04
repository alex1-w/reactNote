import { ITag } from '../../../types/ITag'
import Tag from '../../Tag/Tag'
import styles from './TagBlock.module.scss'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


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
                    <Swiper
                        className={styles.swiperBlock}
                        // spaceBetween={50}
                        slidesPerView={'auto'}
                    >
                        {tags.map(tag => (
                            <SwiperSlide key={tag.name}>
                                <Tag name={tag.name} />
                            </SwiperSlide>
                        ))}
                    </Swiper>}

        </div>
    )
}
