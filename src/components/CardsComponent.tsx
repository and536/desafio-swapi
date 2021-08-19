import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core"
import "../assets/css/Cards.css"
import {calculateStopsByDistance} from "../services"

function Cards(props: any){
  return(
    <div className="cards">
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.items["name"]}
          </Typography>
          <Typography color="textSecondary">
            <span>Consumiveis: </span>{props.items["consumables"]}
          </Typography>
          <Typography variant="body2" component="p">
            <span>Velocidade: </span>{props.items["MGLT"]} MGLT/h
          </Typography>
        </CardContent>
        <CardActions>
          <span>Paradas: </span>{calculateStopsByDistance(props.distancia, props.items["MGLT"], props.items["consumables"])}
        </CardActions>
      </Card>
    </div>
  )
}

export default Cards