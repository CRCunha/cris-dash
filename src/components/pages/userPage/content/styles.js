import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cardContainer: {
    height: 250,
    marginTop: '-130px',
  },
  gridCard: {
    backgroundColor: '#fff',
    // minHeight: 400,
    borderRadius: 10,
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.03)',

    padding: '20px 0px 40px 0px',
    marginTop: 50,
  },
  cardAvatarItemAvatar: {
    height: 220,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cardAvatarItemName: {
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    fontSize: 30,
  },
}));

export default useStyles;
