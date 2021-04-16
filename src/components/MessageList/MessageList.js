import Message from "../Message";
import { Col } from "antd";
import React from "react";

const MessageList = () => {
  return <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24 }} md={{ span: 12 }}
              lg={{ span: 12 }} xl={{ span: 12 }} style={{ marginTop: '20px' }}>
    <Message display={true}
             icon={true}
             type=""
             message={"An outbreak of pneumonia of unknown reason was first reported on 31st December 2019 from Wuhan City in Hubei Province of China. On 7 th Jan 2020, it was diagnosed as “Novel Corona Virus”. On 30th Jan 2020, World Health Organization has declared it as a Public Health Emergency of International Concern (PHEIC). On 11/02/2020 the WHO has introduced a short form for the diseases as COVID-19 and on 11/03/2020 declared as pandemic. The incubation period is reported as 2-14 days."}/>
    <Message
      display={true}
      icon={true}
      type="light"
      message={"Although it is still unknown exactly where the first case originated from, the first outbreak started in Wuhan, Hubei, China in late 2019. Many early cases of COVID-19 have been attributed to people who had visited the Huanan Seafood Wholesale Market in Wuhan. On 11 February 2020, the World Health Organization (WHO) named the disease \"COVID-19\", which is short for coronavirus disease 2019. The virus that caused the outbreak is known as severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2), a newly discovered virus closely related to bat coronaviruses, pangolin coronaviruses, and SARS-CoV. Scientific consensus is that COVID-19 is a zoonotic virus that arose from bats in a natural setting."}/>
    <Message
      display={true}
      icon={true}
      type="light"
      message={"Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment."}/>
  </Col>
}

export default MessageList;
