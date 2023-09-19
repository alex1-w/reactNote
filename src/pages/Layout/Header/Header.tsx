import styles from './Header.module.scss';
import { FC, useState, ChangeEvent, useEffect } from 'react';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './headerIconsStyles';
import { useAppSelector } from '../../../store/reduxActions';
import { INote } from '../../../types/Note.interface';
import SearchDropdown from './SearchDropdown/SearchDropdown';

const Header: FC = () => {
  const notes = useAppSelector((state) => state.notes.notes);
  const [searchValue, setSearch] = useState<string>('');
  const [searchNotes, setSearchNotes] = useState<INote[]>([]);
  const [dropdown, setDropdown] = useState<boolean>(false);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => setSearch(e.target.value);

  const getNotes = (): void => {
    setSearchNotes(notes.filter((n) => n.title.toLowerCase().indexOf(searchValue) !== -1));
  };

  useEffect(() => {
    if (searchValue.length > 1) {
      setDropdown(true);
      getNotes();
    }
    if (searchValue === '') setDropdown(false);
  }, [searchValue]);

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
        >
          React Note
        </Typography>
        <div className={styles.searchBlock}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Поиск по названию'
              inputProps={{ 'aria-label': 'search' }}
              value={searchValue}
              onChange={changeHandler}
            />
          </Search>

          {dropdown && (
            <SearchDropdown
              setDropdown={setDropdown}
              searchNotes={searchNotes}
              dropdown={dropdown}
            />
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
