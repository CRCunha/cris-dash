import { makeStyles } from '@material-ui/core/styles';
import image from '../../assets/users.svg';

const useStyles = makeStyles(() => ({
  card: {
    marginTop: '-80px',
    backgroundColor: '#fff',
    borderRadius: 10,
    minHeight: 280,
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.03)',
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'space-between',
  },
  cardText: {
    display: 'flex',
    alignItems: 'center',
    padding: '60px',
    color: '#505050',
    fontSize: 20,
    '& p': {
      width: '100%',
    },
  },
  cardImage: {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
}));

export default useStyles;
