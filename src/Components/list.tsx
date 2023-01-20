import {
  HassleFreeIcon,
  MoneyBackIcon,
  PricingIcon,
  SubscriptionIcon,
} from "@/Icons/Icons";
import {
  Box,
  HStack,
  VStack,
  Icon,
  Image,
  StackProps,
  Text,
} from "@chakra-ui/react";
import React, { ElementType } from "react";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

export default function List(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  const data = [
    "Internation calling and messaging API",
    "Additional phone numbers",
    "Automated messages via Zapier",
    "24/7 support and consulting",
  ];
  return (
    <VStack {...rest} spacing="16px">
      {data.map((text) => {
        return (
          <HStack width="532px" height="28px">
            <Icon as={PricingIcon} boxSize="22px" />
            <Text fontSize={"18px"} fontWeight="400" fontFamily={"Inter"}>
              {text}
            </Text>
          </HStack>
        );
      })}
    </VStack>
  );
}
