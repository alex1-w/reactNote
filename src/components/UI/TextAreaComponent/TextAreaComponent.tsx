import styles from './TextAreaComponent.module.scss';
import { FormControl } from '@mui/material';
import { FC, useState } from "react"
import Textarea from '@mui/joy/Textarea';
import Box from '@mui/material/Box/Box';
import { IconButton } from '@mui/joy';
import Button from '@mui/joy/Button';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Check from '@mui/icons-material/Check';
import { FormatBold, FormatItalic, KeyboardArrowDown } from '@mui/icons-material';
// import Check from '@mui/icons-material/Check';

const TextAreaComponent: FC = () => {

    const [italic, setItalic] = useState(false);
    const [fontWeight, setFontWeight] = useState('normal');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    return (

        <>
            <FormControl>
                <Textarea
                    placeholder="Type something here…"
                    minRows={3}
                    endDecorator={
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 'var(--Textarea-paddingBlock)',
                                pt: 'var(--Textarea-paddingBlock)',
                                borderTop: '1px solid',
                                borderColor: 'divider',
                                flex: 'auto',
                            }}
                        >
                            <IconButton
                                variant="plain"
                                color="neutral"
                                onClick={(event) => setAnchorEl(event.currentTarget)}
                            >
                                <FormatBold />
                                <KeyboardArrowDown />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={() => setAnchorEl(null)}
                                size="sm"
                                placement="bottom-start"
                                sx={{ '--ListItemDecorator-size': '24px' }}
                            >
                                {['200', 'normal', 'bold'].map((weight) => (
                                    <MenuItem
                                        key={weight}
                                        selected={fontWeight === weight}
                                        onClick={() => {
                                            setFontWeight(weight);
                                            setAnchorEl(null);
                                        }}
                                        sx={{ fontWeight: weight }}
                                    >
                                        <ListItemDecorator>
                                            {fontWeight === weight && <Check />}
                                        </ListItemDecorator>
                                        {weight === '200' ? 'lighter' : weight}
                                    </MenuItem>
                                ))}
                            </Menu>
                            <IconButton
                                variant={italic ? 'soft' : 'plain'}
                                color={italic ? 'primary' : 'neutral'}
                                aria-pressed={italic}
                                onClick={() => setItalic((bool) => !bool)}
                            >
                                <FormatItalic />
                            </IconButton>
                            <Button sx={{ ml: 'auto' }}>Send</Button>
                        </Box>
                    }
                    sx={{
                        minWidth: 300,
                        fontWeight,
                        fontStyle: italic ? 'italic' : 'initial',
                    }}
                />
            </FormControl>

        </>
    )
};

export default TextAreaComponent;
