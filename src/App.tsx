import React from "react";
import SimpleProjectForm from "./components/SimpleProjectForm";
import styled from 'styled-components';
import SimpleProjectFormStyled from "./components/SimpleProjectFormStyled";
import NestedProjectForm from "./components/NestedProjectForm";
import FormWithFormikContext from "./components/FormWithFormikContext";

const Container = styled.div`
  margin: 0 auto;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function App(): React.ReactElement {
  return (
    <Container>
      <SimpleProjectForm />
      <SimpleProjectFormStyled />
      <NestedProjectForm />
      <FormWithFormikContext />
    </Container>
  );
}

export default App;
