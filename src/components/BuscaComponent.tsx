import { Button, CircularProgress } from "@material-ui/core";
import { Component } from "react";

class Busca extends Component<any, any>{
  constructor(props: any){
    super(props)

    this.state = {
      onClick: props.onClick,
      id: props.id
    }
  }

  render(){
    return (
      <div className="Busca">
        <Button
          id={this.state.id}
          variant="contained" 
          color="primary"
          size="medium"
          onClick={this.state.onClick}
        >
          Buscar
        </Button>
      </div>
    )
  }
}

export default Busca