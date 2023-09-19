import styles from './CreateNote.module.scss';
import { useNavigate } from 'react-router-dom';
import ChangeColorComponent, {
  ColorType,
} from '../../components/UI/ChangeColorComponent/ChangeColorComponent';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputBlock } from '../../components/UI/InputBlock/InputBlock';
import { actions } from '../../store/notes/notes';
import { useAppDispatch } from '../../store/reduxActions';
import { useState } from 'react';
import { INoteForm } from '../../types/Note.interface';
import TextAreaBlock from '../../components/UI/TextAreaBlock/TextAreaBlock';
import { Form } from '../../components/Form/Form';
import TagsBlock from './TagsBlock/TagsBlock';
import { ITag } from '../../types/ITag';
export type AddTagBlockVariant = 'createPage' | 'editPage';


const CreateNote = () => {
  const [color, setColor] = useState<ColorType>('yellow');
  const [tags, setTags] = useState<ITag[]>([]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
    setError,
  } = useForm<INoteForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      title: '',
      text: '',
      color: '',
    },
  });
  const title = watch('title');

  const submit: SubmitHandler<INoteForm> = (data) => {
    const note: INoteForm = {
      title: data.title,
      text: data.text,
      color,
      createdAt: String(new Date()),
      tags,
    };
    dispatch(actions.addToNotes(note));
    navigate('/');
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1>Создание заметки</h1>

        <Form handleSubmit={handleSubmit} isValid={isValid} submit={submit}>
          <div className={styles.createNoteWrapper}>
            <div className={styles.createNoteWrapper__note}>
              <div>
                <InputBlock
                  error={errors?.title?.message}
                  name='title'
                  register={register}
                  rules={{ required: { message: 'пропущен заголовок', value: true } }}
                  type='text'
                  placeholder='Заголовок заметки'
                />

                <ChangeColorComponent setColor={setColor} />
              </div>

              <TextAreaBlock
                disabled={Boolean(!title)}
                errors={errors?.title?.message}
                name='title'
                placeholder='Текст заметки...'
                register={register}
                rules={{}}
                setError={setError}
              />
            </div>

            <TagsBlock type='createPage' />
          </div>
        </Form>
      </div>
    </main>
  );
};

export default CreateNote;