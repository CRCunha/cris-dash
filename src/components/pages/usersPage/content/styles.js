import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cardContainer: {
    height: '80vh',
    marginTop: '-80px',
    overflow: 'auto',
  },
  cards: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  card: {
    width: 480,
    backgroundColor: '#fff',
    minHeight: 350,
    borderRadius: 10,
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.03)',
  },
  gridCard: {
    backgroundColor: '#fff',
    minHeight: 350,
    borderRadius: 10,
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.03)',
    padding: '0px 0px',
    marginBottom: 50,
    '& .MuiPaper-root': {
      padding: '10px 0px 0px 0px',
      boxShadow: '0 20px 30px -16px rgba(9,9,16,0.03)',
    },
    '& .MuiGrid-grid-xs-12': {
      padding: '8px 5px',
      // marginLeft: '-px',
    },
  },
  gridCardChart: {
    backgroundColor: '#fff',
    height: 400,
    borderRadius: 10,
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.03)',

    marginBottom: 50,
  },
  cardAvatarItemAvatar: {
    minHeight: 350,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    fontSize: 30,
  },
  userCardTitle: {
    padding: '20px 0px',
    fontWeight: 'bold',
  },
  cardImage: {
    backgroundImage: 'url(https://pbs.twimg.com/media/DtLfZEjWoAE8gfB.jpg)',
    backgroundSize: 970,
    borderRadius: 10,
  },
  tagItem: {
    backgroundColor: '#efeefe',
    padding: '0px 10px',
    borderRadius: 6,
    marginBottom: 10,
  },
}));

export default useStyles;
