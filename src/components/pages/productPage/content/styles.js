import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  gridCardOk: {
    padding: '20px 20px !important',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.03)',
    borderLeft: 'solid 8px #ad7',
    color: '#707070',
  },
  gridCardWarning: {
    padding: '20px 20px !important',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.03)',
    borderLeft: 'solid 8px #F9E071',
    color: '#707070',
  },
  gridCardError: {
    padding: '20px 20px !important',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.03)',
    borderLeft: 'solid 8px #F97171',
    color: '#707070',
  },
  divider: {
    width: '100%',
    marginBottom: 30,
  },
}));

export default useStyles;
