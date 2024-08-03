import {Box, Button} from '@mui/material';

export const Point = () => {
    return (
        <Box sx={{width: 0,
            height: 0,
            borderLeft: "50px solid transparent",
            borderRight: "50px solid transparent",
            borderBottom:" 100px solid #3f51b5"}} />
    );
};

export const ClickablePoint = () => {
    return <Button sx={{
        width: 0,
        height: 0,
        padding: 0,
        minWidth: 0,
        borderLeft: '50px solid transparent',
        borderRight: '50px solid transparent',
        borderBottom: '100px solid #3f51b5',
        background: 'transparent',
        '&:hover': {
            borderBottomColor: '#303f9f',
        },
    }}/>
}