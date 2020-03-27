import React from "react";
import { Col, Collapse, Typography } from "antd";
import Message from "../Message/Message";

const {Title, Text} = Typography;
const {Panel} = Collapse;

const QAPanel = () => {
    return (
        <Col xs={{span: 24, offset: 0}} sm={{span: 9, offset: 1}} md={{span: 22}}
             lg={{span: 22}} xl={{span: 9, offset: 1}}>
            <Title>Q&A on coronaviruses (COVID-19)</Title>
            <Collapse defaultActiveKey={[""]}>
                <Panel header="What is a coronavirus?" key="1">
                    <p>Coronaviruses are a large family of viruses which may cause illness in animals or
                        humans. In humans, several coronaviruses are known to cause respiratory
                        infections
                        ranging from the common cold to more severe diseases such as Middle East
                        Respiratory
                        Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently
                        discovered coronavirus causes coronavirus disease COVID-19.</p>
                </Panel>
                <Panel header="What are the symptoms of COVID-19?" key="2">
                    <p>The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some
                        patients may have aches and pains, nasal congestion, runny nose, sore throat or
                        diarrhea. These symptoms are usually mild and begin gradually. Some people
                        become
                        infected but don’t develop any symptoms and don't feel unwell. Most people
                        (about
                        80%) recover from the disease without needing special treatment. Around 1 out of
                        every 6 people who gets COVID-19 becomes seriously ill and develops difficulty
                        breathing. Older people, and those with underlying medical problems like high
                        blood
                        pressure, heart problems or diabetes, are more likely to develop serious
                        illness.
                        People with fever, cough and difficulty breathing should seek medical
                        attention.</p>
                </Panel>
                <Panel header="How does COVID-19 spread?" key="3">
                    <p>People can catch COVID-19 from others who have the virus. The disease can spread
                        from
                        person to person through small droplets from the nose or mouth which are spread
                        when
                        a person with COVID-19 coughs or exhales. These droplets land on objects and
                        surfaces around the person. Other people then catch COVID-19 by touching these
                        objects or surfaces, then touching their eyes, nose or mouth. People can also
                        catch
                        COVID-19 if they breathe in droplets from a person with COVID-19 who coughs out
                        or
                        exhales droplets. This is why it is important to stay more than 1 meter (3 feet)
                        away from a person who is sick.

                        WHO is assessing ongoing research on the ways COVID-19 is spread and will
                        continue
                        to share updated findings. </p>
                </Panel>
                <Panel header="Can the virus that causes COVID-19 be transmitted through the air?"
                       key="4">
                    <p>Studies to date suggest that the virus that causes COVID-19 is mainly transmitted
                        through contact with respiratory droplets rather than through the air. See
                        previous
                        answer on “How does COVID-19 spread?”</p>
                </Panel>
                <Panel header="Can CoVID-19 be caught from a person who has no symptoms?" key="5">
                    <p>The main way the disease spreads is through respiratory droplets expelled by
                        someone
                        who is coughing. The risk of catching COVID-19 from someone with no symptoms at
                        all
                        is very low. However, many people with COVID-19 experience only mild symptoms.
                        This
                        is particularly true at the early stages of the disease. It is therefore
                        possible to
                        catch COVID-19 from someone who has, for example, just a mild cough and does not
                        feel ill. WHO is assessing ongoing research on the period of transmission of
                        COVID-19 and will continue to share updated findings. </p>
                </Panel>
                <Panel header="Can I catch COVID-19 from the feces of someone with the disease?"
                       key="6">
                    <p>The risk of catching COVID-19 from the feces of an infected person appears to be
                        low.
                        While initial investigations suggest the virus may be present in feces in some
                        cases, spread through this route is not a main feature of the outbreak. WHO is
                        assessing ongoing research on the ways COVID-19 is spread and will continue to
                        share
                        new findings. Because this is a risk, however, it is another reason to clean
                        hands
                        regularly, after using the bathroom and before eating. </p>
                </Panel>
                <Panel header="Is there a vaccine, drug or treatment for COVID-19?" key="7">
                    <p>Not yet. To date, there is no vaccine and no specific antiviral medicine to
                        prevent
                        or treat COVID-2019. However, those affected should receive care to relieve
                        symptoms. People with serious illness should be hospitalized. Most patients
                        recover
                        thanks to supportive care.

                        Possible vaccines and some specific drug treatments are under investigation.
                        They
                        are being tested through clinical trials. WHO is coordinating efforts to develop
                        vaccines and medicines to prevent and treat COVID-19.

                        The most effective ways to protect yourself and others against COVID-19 are to
                        frequently clean your hands, cover your cough with the bend of elbow or tissue,
                        and
                        maintain a distance of at least 1 meter (3 feet) from people who are coughing or
                        sneezing. (See Basic protective measures against the new coronavirus). </p>
                </Panel>
                <Panel header="Is COVID-19 the same as SARS?" key="8">
                    <p>No. The virus that causes COVID-19 and the one that caused the outbreak of Severe
                        Acute Respiratory Syndrome (SARS) in 2003 are related to each other genetically,
                        but
                        the diseases they cause are quite different.

                        SARS was more deadly but much less infectious than COVID-19. There have been no
                        outbreaks of SARS anywhere in the world since 2003.</p>
                </Panel>
                <Panel header="How long does the virus survive on surfaces?" key="9">
                    <p>It is not certain how long the virus that causes COVID-19 survives on surfaces,
                        but
                        it seems to behave like other coronaviruses. Studies suggest that coronaviruses
                        (including preliminary information on the COVID-19 virus) may persist on
                        surfaces
                        for a few hours or up to several days. This may vary under different conditions
                        (e.g. type of surface, temperature or humidity of the environment).

                        If you think a surface may be infected, clean it with simple disinfectant to
                        kill
                        the virus and protect yourself and others. Clean your hands with an
                        alcohol-based
                        hand rub or wash them with soap and water. Avoid touching your eyes, mouth, or
                        nose.</p>
                </Panel>
            </Collapse>
            <div style={{marginTop: "10px"}}><Text>For more details check <a
                href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">this link.</a></Text>
            </div>
            <div style={{marginTop: "20px"}}>
                <Message display={true}
                         icon={true}
                         type="light"
                         message={"An outbreak of pneumonia of unknown reason was first reported on 31st December 2019 from Wuhan City in Hubei Province of China. On 7 th Jan 2020, it was diagnosed as “Novel Corona Virus”. On 30th Jan 2020, World Health Organization has declared it as a Public Health Emergency of International Concern (PHEIC). On 11/02/2020 the WHO has introduced a short form for the diseases as COVID-19 and on 11/03/2020 declared as pandemic. The incubation period is reported as 2-14 days."}/>
            </div>
        </Col>
    )
};

export default QAPanel;
