import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  content: {
    maxHeight: '75vh',
    overflow: 'auto',
    zIndex: 20,
  },

  cardContainer: {
    paddingTop: 50,
    marginTop: '0px',
  },

  cardContainerContent: {
    zIndex: 20,
  },

  cadUser: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 40,
  },
}));

export default useStyles;
