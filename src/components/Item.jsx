import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Divider,
  Button,
  ButtonGroup,
  Image,
  Text
} from "@chakra-ui/react";
import { Stack } from "react-bootstrap";

const Item = ({ producto }) => {
  const { name, description, precio,stock } = producto;

  return (
    <>
      <div className="itemresponsive cardstyles">
          <div>
          <h2 className="itemNameDiv">Nombre articulo</h2>
          </div>
          <img className="itemresponsive" src="../src/assets/shopping-bag.png" alt="FOTULi ALT" />
          <div>
          <p className="itemDescriptDiv">Lorem ipsum dolor sit amet,  Atque, saepe eos inventore necessitatibus aliquid architecto? Debitis voluptas provident expedita.</p>
          </div>

      </div>
    </>
  );
};

export default Item;





// <Card className="item_margins itemresponsive" maxW="sm">
//   <CardBody>
//     <Image
//       src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//       alt={name}
//       borderRadius="lg"
//     />
//     <Stack mt="6" spacing="3">
//       <Heading size="md">{name}</Heading>
//       <Text>{description}</Text>
//       <Text color="blue.600" fontSize="2xl">
//         {`$${precio}`}
//       </Text>
//     </Stack>
//   </CardBody>
//   <Divider />
//   <CardFooter>
//     <ButtonGroup className="buttongroup" spacing="2">
//       <Button variant="solid" colorScheme="blue">
//         Comprar Ahora
//       </Button>
//       <Button variant="ghost" colorScheme="blue">
//         Agregar al carrito
//       </Button>
//     </ButtonGroup>
//   </CardFooter>
// </Card>;