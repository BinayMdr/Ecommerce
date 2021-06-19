import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      textDecoration:'none',
      color:'black'
    },
    app:{
        backgroundColor:'#FF9671'
    }
  }));

  export default useStyles