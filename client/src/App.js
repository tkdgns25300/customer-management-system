import './App.css';
import { useState, useEffect, Component } from 'react';

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

// class App extends Component {
//   state = {
//     customers: ""
//   }

//   componentDidMount() {
//     this.callApi()
//       .then(res => this.setState({customers: res}))
//       .catch(err => console.log(err));
//   }

//   callApi = async () => {
//     const response = await fetch('/api/customers');
//     const body = await response.json();
//     return body;
//   }

//   render() {
//     const { classes } = this.props;
//     return (
//       <Paper className={classes.root}>
//         <Table className={classes.table}>
//           <TableHead>
//             <TableRow>
//               <TableCell>Number</TableCell>
//               <TableCell>Image</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Birth</TableCell>
//               <TableCell>Gender</TableCell>
//               <TableCell>Job</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {this.state.customers ? this.state.customers.map(customer => {
//               return <Customer
//                 id={customer.id}
//                 image={customer.image}
//                 name={customer.name}
//                 birthday={customer.birthday}
//                 gender={customer.gender}
//                 job={customer.job}
//               />
//             }) : ""}
//           </TableBody>
//         </Table>
//       </Paper>
//     )
//   }
// }


function App({ classes }) {
  const [customers, setCustomers] = useState("");

  useEffect(async () => {
    const response = await fetch('http://localhost:5000/api/customers');
    const body = await response.json();
    console.log(body);
    setCustomers(body);
  }, [])

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
          {customers ?? customers.map(customer => {
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
