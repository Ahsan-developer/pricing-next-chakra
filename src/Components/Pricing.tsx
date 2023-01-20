import { Box, Button, Heading, Text } from "@chakra-ui/react";
import List from "./list";

function Pricing() {
  return (
    <Box
      m={"-128px auto 56px "}
      width="994px"
      backgroundColor="white"
      borderRadius="12px"
      display="flex"
      boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
    >
      <Box width="378px" pb="60px" backgroundColor="rgba(101,44,211,0.1)">
        <Text
          fontSize={24}
          fontWeight={800}
          mr={110}
          ml={106}
          pt={57}
          align="center"
          lineHeight={"32px"}
        >
          Premium PRO
        </Text>
        <Heading
          mr={112}
          ml={109}
          fontWeight={800}
          fontSize={48}
          mb={"8px"}
          textAlign="center"
        >
          $329
        </Heading>
        <Text
          fontWeight={500}
          fontFamily="Inter"
          fontSize={18}
          mb={"20px"}
          textAlign="center"
          pt={0}
        >
          billed just once
        </Text>
        <Button
          display={"flex"}
          m="0px auto"
          width="282px"
          height="51px"
          borderRadius={"8px"}
          fontFamily="Inter"
          fontSize={16}
          backgroundColor={"#805AD5"}
          color="#F7FAFC"
        >
          Get Started
        </Button>
      </Box>
      <Box width="100%">
        <Text
          width="520px"
          height="56px"
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="400"
          fontSize="18px"
          lineHeight="28px"
          color="#2D3748"
          margin={"48px auto 24px auto"}
        >
          Access these features when you get this pricing package for your
          business
        </Text>
        <List icon={"symbol"} />
      </Box>
    </Box>
  );
}

export default Pricing;
