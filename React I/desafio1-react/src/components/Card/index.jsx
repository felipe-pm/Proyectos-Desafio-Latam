import {Button,Card} from 'react-bootstrap';

const CardImage = props => {

    const {title,comment,src} = props

    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {comment}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default CardImage