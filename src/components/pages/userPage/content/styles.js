import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cardContainer: {
    height: 250,
    marginTop: '-130px',
  },
  gridCard: {
    backgroundColor: '#fff',
    minHeight: 400,
    borderRadius: 10,
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.03)',

    marginTop: 50,
  },
}));

export default useStyles;
