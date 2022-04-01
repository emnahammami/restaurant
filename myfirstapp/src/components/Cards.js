import { Button,Card } from "react-bootstrap"
import Data from "../Data"
function Cards(props){
  const [formValue, setFormValue] = useState({
    fname: 'Mark',
    lname: 'Otto',
    email: '',
    city: '',
    state: '',
    zip: '',
  });

  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
return (
    <div>
<h1>{props.image}</h1>
{ 
        Data.map(x=><Card style={{ width: '18rem' ,gap:'0'}}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> )

        }

        
    </div>
)








}
export default Cards;