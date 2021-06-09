import React from "react"
import Column from "../../../../../components/containers/Column"
import Container from "../../../../../components/containers/Container"
import Font from "../../../../../utils/fonts/Font"
import Spacer from "../../../../../utils/spacer/Spacer"


const DashboardProcess: React.FC = () => {
  return (
    <Container>
      <Spacer height={64} />
      <Font type='h4'>Design process</Font>
      <Column spacer="third">
        <Font type='text'>
          As a tiny team, we do not have the resources to facilitate customer
          interviews within the design process.
        </Font>
        <Font type='text'>
          Therefore, I’m adapting design thinking processes to what’s feasible.
          I extensively draft sketches and concepts to challenge our
          assumptions. I unfold the iterative and testings loops internally,
          among all company stakeholders.
        </Font>
        <Font type='text'>
          When finally satisfied, I use video recording tools like Hotjar,
          Google Analytics data, and customer feedback from forms and emails. It
          serves to track problems, misunderstandings and to gather new
          hypotheses and suggestions.
        </Font>
      </Column>
    </Container>
  )
}

export default DashboardProcess
