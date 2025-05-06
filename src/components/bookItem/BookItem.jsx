import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const BookItem = ({libroTitle,libroAuthor,libroRating,libroPageCount,libroImgUrl}) => {
  
  const [newTitle,setTitle]=useState(libroTitle);
  
const handleChangeTitle =() =>
{

setTitle("nuevoTítulo");

}

    return (
   
   <div>

<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{newTitle}</Card.Title>
        <Card.Img
        height={400}
        variant="top"
        src={libroImgUrl !== "" ? libroImgUrl : "https://bit.ly/47NylZk"}
      />
        <Card.Subtitle className="mb-2 text-muted">{libroAuthor}</Card.Subtitle>
        <Card.Text>
         {libroPageCount}
         {libroRating}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
        <Button onClick={handleChangeTitle}>Actualizar títulio</Button>
      </Card.Body>
    </Card>

    </div>
  )
}
export default BookItem