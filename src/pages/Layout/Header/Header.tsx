import styles from './Header.module.scss';
import { FC, MouseEvent, useState } from "react"
import { AppBar } from '@mui/material'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './headerIconsStyles';

const Header: FC = () => {

    return (


        // <Box sx={{ flexGrow: 1 }} className={styles.main}>
        <AppBar position="static">
            <Toolbar>

                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
                >
                    React Note
                </Typography>

                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>

            </Toolbar>
        </AppBar>
        // </Box>
    )
};

export default Header;
