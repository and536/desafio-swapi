import { FormControl, Grid, TextField } from "@material-ui/core";
import { Component } from "react";
import "../assets/css/Busca.css"

class InputBusca extends Component<any, any>{
  constructor(props: any){
    super(props)
  }

  async setDistancia(distancia: any){
    this.props.setDistance(distancia)
  }

  render(){
    return (
      <div className="InputBusca">
        <Grid item xs={12} spacing={1}>
          <FormControl fullWidth variant="outlined">
            <TextField 
              variant="outlined"
              label="Distância à percorrer"
              size="small"
              type="number"
              onBlur={
                (event)=>{
                  this.setDistancia(event.target.value)
                }
              }
            />
          </FormControl>
        </Grid>
      </div>
    )
  }
}

export default InputBusca