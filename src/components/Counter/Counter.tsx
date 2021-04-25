import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { CounterState } from '../../types';
import { inc, dec } from '../../store';
import { Grid, makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    centerItem: {
      padding: '32px',
      boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
      borderRadius: '5px',
    },
    container: {
      height: '100%'
    }
  }),
);

// props: any - неправильно
const CounterView = (props: any) => {
  const s = useStyles();

  return (
    <Grid
      container
      alignItems={'center'}
      spacing={3}
      justify={'space-between'}
      className={s.container}
    >
      <Grid item>
        <Button variant="contained" color="primary" onClick={props.dec}>-</Button>
      </Grid>
      <Grid item>
        <h1 className={s.centerItem}>{props.counter}</h1>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={props.inc}>+</Button>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: CounterState) => ({
  counter: state.counter
});

const mapDispatchToProps = {
  dec,
  inc
};

export const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterView);
