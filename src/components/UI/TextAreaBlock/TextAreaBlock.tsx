import styles from './TextAreaBlock.module.scss';
import { FC } from 'react';
import { motion } from 'framer-motion';
import Textarea from '@mui/joy/Textarea';
import { ITextAreaBlock } from './TextAreaBlock.intrface';
import { stylesForTextArea } from './stylesForTextArea';

const TextAreaBlock: FC<ITextAreaBlock> = ({
  disabled,
  errors,
  name,
  placeholder,
  register,
  rules,
  setError,
}) => {
  const checkTitleValue = () => setError('text', { message: 'сначала заполните заголовок' });

  return (
    <div onClick={checkTitleValue} className={styles.main}>
      <Textarea
        disabled={disabled}
        placeholder='Текст заметки...'
        minRows={8}
        maxRows={10}
        sx={stylesForTextArea}
        {...register('text', {
          required: {
            value: true,
            message: 'поле обязательно',
          },
        })}
      />
    </div>
  );
};

export default TextAreaBlock;
