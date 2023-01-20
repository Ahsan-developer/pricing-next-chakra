"use client";
import Features from "@/Components/Features";
import Header from "@/Components/Header";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import Pricing from "@/Components/Pricing";

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Pricing />
      <Features />
    </ChakraProvider>
  );
}
