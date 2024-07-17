import React from 'react'
import { useStaticQuery, graphql, Link as GLink } from 'gatsby'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import { Box, Text, Card, Flex, Button } from 'theme-ui'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Section from '@components/Section'
import Seo from '@widgets/Seo'

/**
 * Shadow me to add your own content
 */

const styles = {
  imageWrapper: {
    borderRadius: `default`,
    overflow: `hidden`,
    position: `relative`
  },
  button: {
    display: [`none`, `block`],
    position: `absolute`,
    bottom: 4,
    right: 4
  },
  grid: {
    flexWrap: [`wrap`, null, `nowrap`],
    ' > div + div': {
      ml: [0, 0, 5]
    }
  },
  column: {
    flex: `auto`,
    flexBasis: [`full`, null, `1/2`]
  }
}

export default props => {
  const data = useStaticQuery(aboutQuery)
  const image = getImage(data.avatar)

  function onClickDownload() {
    const link = document.createElement('a');
    link.target = "_blank"
    link.href = `https://drive.google.com/file/d/1Wn4cFL9ItRYVVlajtExWOKwl0pdSk1Jw/view?usp=sharing`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <Layout {...props}>
      <Seo title='About' />
      <Divider />
      <Stack>
        <Main>
          <PageTitle
            header='About Me'
            subheader='I am a Front-End Software Engineer with more than 3 years of experience in both Web & Desktop Application. With my knowledge and passionate for a good UI / UX design, I enjoy solving front-end problems and creating the best user experience for users. I also spend time learning new technologies and best practices to become a better engineer.'
          />
          <Divider />
          <Box sx={styles.imageWrapper}>
            <Img image={image} />
            <Button sx={styles.button} onClick={onClickDownload}>Download CV</Button>
          </Box>
          <Divider />
          <Flex sx={styles.grid}>
            <Box sx={styles.column}>
              <Section title='Thermal Analysis System – (C#, WPF)'>
                <Card variant='paper'>
                  <Text variant='p'>
                    KIC provides customized solutions for Electronics Assembly
                    Manufacturing (circuit boards) and Semiconductor packaging /
                    manufacturing. KIC supplies the expertise with patented sensor
                    hardware and software to monitor the product temperature
                    profile during production
                  </Text>
                  <Text variant='p'>
                    Technologies: WPF, C#, SQL Server
                  </Text>
                  <Text variant='p'>Responsibilities:</Text>
                  <Text variant='p'>
                    <ul>
                      <li>Making design decisions</li>
                      <li>Define the Front-end architecture and coding convention</li>
                      <li>Implement all UI design</li>
                      <li>Reading and analyze requirements, implement interfaces and fix bugs</li>
                      <li>Working with back-end engineer to design data stream.</li>
                    </ul>
                  </Text>
                </Card>

              </Section>
              <Divider />
              <Section title='PV Coating (C#, ReactJS)'>
                <Card variant='paper'>
                  Developing software to manage employees, analyze pipe data
                  and pipe parameters for Vietnam Oil and Gas Pipe Coating
                  Company. <br />
                  • Technologies: ReactJS, Ant Design, Net Core, SQL Server.{' '}
                  <br />• Responsibilities: Implement all UI, Redesign layout
                  improve user experience. Making design decisions, renovate the
                  layout to suit reality, come up with practical UI design ideas
                  and. Working with customer to design new flow for new
                  functions, fix bugs.
                </Card>
              </Section>
            </Box>
            <Box sx={styles.column}>
              <Section title='Automation Test – (Selenium, Python, ReactJS, C#)'>
                <Card variant='paper'>

                  <Text variant='p'>
                    Software testing system consists of 2 parts. Automation for
                    desktop application using (Appium - Python). Running test
                    script in Web application using (ReactJS - .Net Core).
                  </Text>
                  <Text variant='p'>Technologies:</Text>
                  <Text variant='p'>
                    <ul>
                      <li>
                        Front-end project: Javascript, ReactJS, MaterialUl,
                        Tailwind CSS.
                      </li>
                      <li>Back-end: C#, .Net Core.</li>
                      <li>
                        Automation test script: Appium, Robot Framework, Python.
                      </li>
                    </ul>
                  </Text>
                  <Text variant='p'>Responsibilities:</Text>
                  <Text variant='p'>
                    <ul>
                      <li>Implement all UI design.</li>
                      <li>
                        Making design decisions, define the Front-end
                        architecture, coding convention.
                      </li>
                      <li>
                        Leading the effort to migrate legacy front-end projects
                        into newer and more popular technologies.
                      </li>
                      <li>
                        Working directly with the Product Owner to design UI flow.
                        Working with testers to collect information for design UI
                        friendly with user.
                      </li>
                      <li>
                        Working with back-end engineer to design data stream.
                        Implement several functions together according to customer
                        requirements.
                      </li>
                      <li>
                        Implement some full functions: manage user (add, update,
                        delete, login, logout), report (create, download).
                      </li>
                      <li>
                        Design Automation architecture system, create automation
                        script, finding the way to connect web and Automation
                        script for how they work effectively.
                      </li>
                      <li>
                        Training for 2 junior members about testing system and how
                        to write test script, support to fixing their issues.
                      </li>
                    </ul>
                  </Text>
                </Card>
              </Section>
            </Box>
          </Flex>
        </Main>
      </Stack>
    </Layout>
  )
}

const aboutQuery = graphql`
  query AboutQuery {
    avatar: file(absolutePath: { regex: "/about.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1140
          height: 500
          transformOptions: { cropFocus: NORTH }
        )
      }
    }
  }
`
