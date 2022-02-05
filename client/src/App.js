import './App.css';

// components
import Customer from './components/Customer';

// material
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: 'Sang',
    birthday: '000729',
    gender: 'Male',
    job: 'Web-Developer'
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: 'Jang',
    birthday: '990427',
    gender: 'Male',
    job: 'Student'
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/4',
    name: 'Jae',
    birthday: '961225',
    gender: 'Female',
    job: 'Student'
  }
]


function App({ classes }) {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Birth</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(customer => {
            return <Customer
              id={customer.id}
              image={customer.image}
              name={customer.name}
              birthday={customer.birthday}
              gender={customer.gender}
              job={customer.job}
            />
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default withStyles(styles)(App);
