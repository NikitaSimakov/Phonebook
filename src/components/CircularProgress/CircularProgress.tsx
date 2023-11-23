import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { FC } from 'react';
import css from './CircularProgress.module.scss';

interface CircularProps {
  conditions: boolean;
}

const CircularIndeterminate: FC<CircularProps> = ({ conditions }) => {
  return conditions ? (
    <div className={css.circleIndent}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress size="15px" />
      </Box>
    </div>
  ) : (
    <></>
  );
};
export default CircularIndeterminate;
