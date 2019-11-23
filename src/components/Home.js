import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";


const styles = theme =>({
    root: {
      width: '100%',
      overflowX: 'auto',
      marginTop: '20%',
      [theme.breakpoints.up('sm')]: {
        marginTop: '6%',
      },
    },
    table: {
      minWidth: 650,
    }
  });
  

class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            datas:[{
                id:1,name:"vijay"
            },{
                id:2,name:"none"
            }]
        }
    } 
    render(){
        let body = this.state.datas.map(data => <TableRow>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.name}</TableCell>
        </TableRow>);
        
        const { classes } = this.props;

        return(   
            <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <tr>
                    <th>Id</th>
                    <th>name</th>
                    </tr>
                </TableHead>
                <TableBody>
                    {body}
                </TableBody>
            </Table>
            </Paper>

        )
    }
}

export default withStyles(styles)(Home);