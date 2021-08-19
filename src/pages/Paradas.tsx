import Busca from "../components/BuscaComponent";
import Cards from "../components/CardsComponent";
import InputBusca from "../components/InputBuscaComponent";
import { findAll } from "../services";
import "../assets/css/Paradas.css"
import { CircularProgress } from "@material-ui/core";
import React from "react";

class Paradas extends React.Component<any, any>{
  constructor(props: any){
    super(props)
    this.state={
      starships: [],
      distancia: 0,
      mostra: false
    }
  }

  setDistance = (distance: any) => {
    this.setState({distancia: distance})
  }

  mostra(){
    
  }

  render(){
    return(
      <div className="Paradas">
        <h2>Calculo de paradas Starshift</h2>
        <br />
        <div className="BuscaInput">
          <InputBusca setDistance={this.setDistance}></InputBusca>
          &nbsp;&nbsp;
          <Busca id="busca" onClick={
            () =>{
              if(this.state.distancia > 0) {
                this.setState({mostra: true})
                findAll(1).then(
                  (data)=>{ 
                    this.setState({starships: data}) 
                    this.setState({mostra: false})
                  }
                )
              } else {
                alert("A distância a ser percorrida deve ser maior e diferente de 0")
              }
            }
          }/>
          {
            this.state.mostra && (
              <div id="progresso">
                <CircularProgress id="progress"/>
              </div>
            )
          }
        </div>
        <br />
        {this.state.starships.map((item: any)=>{
          if (item["MGLT"] != "unknown") {
            return(<Cards distancia={this.state.distancia} items={item} />)
          }
        })}
      </div>
    )
  }
}

export default Paradas