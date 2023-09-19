import { useParams } from 'react-router-dom';
import styles from './EditPage.module.scss';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom'
import ChangeColorComponent, {
  ColorType,
} from '../../components/UI/ChangeColorComponent/ChangeColorComponent';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputBlock } from '../../components/UI/InputBlock/InputBlock';
import { actions } from '../../store/notes/notes';
import { useAppDispatch, useAppSelector } from '../../store/reduxActions';
import { useState, useMemo } from 'react';
import { INoteForm } from '../../types/Note.interface';
import TextAreaBlock from '../../components/UI/TextAreaBlock/TextAreaBlock';
import { Form } from '../../components/Form/Form';
import { ITag } from '../../types/ITag';
import TagsBlock from '../CreateNote/TagsBlock/TagsBlock';

const EditPage: FC = () => {
  const navigation = useNavigate()
  const { id } = useParams();
  const [color, setColor] = useState<ColorType>('yellow');
  const [editedTags, setEditedTags] = useState<ITag[]>([]);

  const notes = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();

  const currenNote = useMemo(
    () => notes.notes.find((note) => Number(note.id) === Number(id)),
    [notes.notes, id],
  );

  // console.log(currenNote);

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
      tags: currenNote?.tags,
    },
  });

  const submit: SubmitHandler<INoteForm> = (data) => {
    const changedNote = {
      title: data.title,
      text: data.text,
      id: Number(id),
      createdAt: data.createdAt,
      color: color,
      tags: [...data.tags, ...editedTags],
    };
    dispatch(actions.editNote(changedNote));
    navigation('/')
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

            <TagsBlock
              type='editPage'
              currentTags={currenNote!.tags}
              setEditedTags={setEditedTags}
              editedTags={editedTags}
            />
          </div>
        </Form>
      </div>
    </main>
  );
};

export default EditPage;
