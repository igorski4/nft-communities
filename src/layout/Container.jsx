import { Flex, Spinner } from "@chakra-ui/react";
import React, { Children } from "react";
import { Sidebar } from "./Sidebar";
import { Title5 } from "../components/text/Title5";

export const Container = ({ loading, error, children }) => {
  return (
    <Flex h="100%">
      <Sidebar />
      <Flex flexDirection="column" flexGrow={1}>
        {!!loading && (
          <Flex h="100%" justifyContent="center" alignItems="center">
            <Spinner color="primary.100" size="lg" />
          </Flex>
        )}
        {!!error && (
          <Title5 textAlign="center" pt="100px">
            Error! Try again later
          </Title5>
        )}
        {children}
      </Flex>
    </Flex>
  );
};
