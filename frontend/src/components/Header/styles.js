import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  palette: {
      backgroundColor: "#3bb19b",
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between',
  },
  whitebtn: {
    border: "none",
    outline: "none",
    padding: "12px 0",
    backgroundColor: "white",
    borderRadius: "20px",
    width: "120px",
    fontWeight: "bold",
    fontSize:" 14px",
    cursor: "pointer",
    marginRight:" 20px"
  }
}));
