import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  export default function SelectB3() {
    const classes = useStyles();
    const [state, setState ] = React.useState({
      age: '',
      name: 'hai',
    });
  
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };


    return (
        <div>
       <FormControl variant="outlined" className={classes.formControl} style={{backgroundColor:'#2D2D2D',width:'450px',height:'60px',color:'white'}}>
        <InputLabel htmlFor="outlined-age-native-simple" style={{color:'white', width:378,height:48 }}>Select Page</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        > 
              <option aria-label="None" value="" style={{backgroundColor:'#2D2D2D'}}/>
              <option value={10} style={{backgroundColor:'#2D2D2D', color:'white'}}>Home Page</option>
              <option value={20} style={{backgroundColor:'#2D2D2D', color:'white'}}>Services Page</option> 

        </Select>
      </FormControl>
      </div>
  );
}