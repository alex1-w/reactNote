import { useParams } from 'react-router-dom';
import styles from './EditPage.module.scss';
import { FC } from 'react';
import ChangeColorComponent, {
  ColorType,
} from '../../components/UI/ChangeColorComponent/ChangeColorComponent';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputBlock } from '../../components/UI/InputBlock/InputBlock';
import { actions } from '../../store/notes/notes';
import { useAppDispatch, useAppSelector } from '../../store/reduxActions';
import { useState } from 'react';
import { INoteForm } from '../../types/Note.interface';
import TextAreaBlock from '../../components/UI/TextAreaBlock/TextAreaBlock';
import { Form } from '../../components/Form/Form';
import { ITag } from '../../types/ITag';
import { useDispatch } from 'react-redux';
import TagsBlock from '../CreateNote/TagsBlock/TagsBlock';

const EditPage: FC = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState<ColorType>('yellow');
  const [tags, setTags] = useState<ITag[]>([]);
  const { id } = useParams();
  const notes = useAppSelector((state) => state.notes);

  const currenNote = notes.find((note) => Number(note.id) === Number(id));

  console.log(currenNote);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm<INoteForm>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      title: currenNote?.title,
      text: currenNote?.text,
      color: currenNote?.color,
    },
  });

  const submit: SubmitHandler<INoteForm> = (data) => {
    const changedNote = {
      title: data.title,
      text: data.text,
      color: data.color,
      id: id,
      createdAt: data.createdAt,
      tags: data.tags,
    };
    dispatch(actions.editNote(changedNote));
  };

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1>Редактирование заметки</h1>

        <Form handleSubmit={handleSubmit} isValid={isValid} submit={submit}>
          <div className={styles.createNoteWrapper}>
            <div className={styles.createNoteWrapper__note}>
              <div>
                <div>
                  <InputBlock
                    error={errors?.title?.message}
                    name='title'
                    register={register}
                    rules={{ required: { message: 'пропущен заголовок', value: true } }}
                    type='text'
                    placeholder='Заголовок заметки'
                  />
                </div>

                <ChangeColorComponent setColor={setColor} />
              </div>

              <TextAreaBlock
                errors={errors?.title?.message}
                name='title'
                placeholder='Текст заметки...'
                register={register}
                rules={{}}
                setError={setError}
              />
            </div>

            <TagsBlock tags={currenNote?.tags} setTags={setTags} />
          </div>
        </Form>
      </div>
    </main>
  );
};

export default EditPage;
