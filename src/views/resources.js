import React from "react";
import { Button, Container, Row } from "react-bootstrap";

import Navigation from "../components/navigation";
import DataTable from "../components/react-table";
import Footer from "../components/footer";
import DropDownBtn from "../components/dropdownbtn";
import RowComponent from "../components/rowComponent";

import WEBDEV from "../assets/images/additional-resources/webdev.jpg";
import BACKEND from "../assets/images/additional-resources/backend.jfif";
import DATABASE from "../assets/images/additional-resources/database.jpg";

const ResourcesApp = () => {
  return (
    <div>
      <Navigation />
      <section className="resources">
        <Container>
          <div className="text-center pt-5">
            <h1>Resources</h1>
            <p>Provided by Mr. Campos</p>
            <p className="scroll-txt mt-3 mb-2">Scroll Right to View More</p>
          </div>
          <Row className="justify-content-around mt-5">
            <div>
              <p>Grade 11</p>
              <DataTable
                node="gr11_lessons"
                c1Title="Lesson Number"
                c1Width={200}
                c2Title="Lesson"
                c2Width={300}
                pageSize={5}
              />
            </div>
            <div>
              {" "}
              <p>Grade 12</p>
              <DataTable
                node="gr12_lessons"
                c1Title="Lesson Number"
                c1Width={200}
                c2Title="Lesson"
                c2Width={300}
                pageSize={5}
              />{" "}
            </div>
          </Row>
        </Container>
      </section>
      <section className="additional-resources">
        <Container>
          <div className="text-center pt-5">
            <h1>Additional Resources</h1>
          </div>
          <Row className="justify-content-around mt-5 pb-5">
            <DropDownBtn
              variant="outline-dark"
              btnName="Text Editors"
              url1="https://code.visualstudio.com/"
              name1="Visual Studio Code"
              url2="https://atom.io/"
              name2="Atom"
              url3="https://www.sublimetext.com/"
              name3="Sublime Text"
            />
            <DropDownBtn
              variant="outline-dark"
              btnName="Code Tutorials"
              url1="https://www.khanacademy.org/computing/computer-programming"
              name1="Khan Academy"
              url2="https://code.org/"
              name2="Code.org"
              url3="https://www.codecademy.com/"
              name3="Code Academy"
            />
          </Row>
          <hr id="underline" />
          <div className="pt-5">
            <h1 className="text-center">Common Tech Jobs</h1>
            <RowComponent
              heading="Web/Frontend Engineer"
              pText="Web Development is the development and maintenance of websites. It is what happens behind the scenes to make websites visually appealing and efficient. It involves the integration of backend and frontend services to create a seamless user experience. Web developers use a variety of languages such as Python, JavaScript, Java, HTML, SASS, etc."
              variant="outline-dark"
              btnText="Read more"
              url="https://www.w3schools.com/whatis/"
              image={WEBDEV}
            />
            <hr id="underline" />
            <RowComponent
              heading="Backend Engineer"
              pText="Backend engineers typically spend time developing business logic components, server scripts, and Application Programming Interfaces (APIs) that are used by front-end developers. Backend engineers work with languages such as PHP, Ruby, Python, JavaScript, .NET, and technologies like MySQL, Java Spring, Unix servers, etc."
              variant="outline-dark"
              btnText="Read more"
              url="https://www.careerexplorer.com/careers/back-end-developer/"
              image={BACKEND}
            />
            <hr id="underline" />
            <RowComponent
              heading="Database Engineer"
              pText="Database engineers are responsible for ensuring that current programs can handle the flow of traffic along with making sure their server(s) can be scaled up easily.  They must have a solid understanding of dynamic programming to ensure that they can design new database models based on company needs. "
              variant="outline-dark"
              btnText="Read more"
              url="https://www.jobhero.com/job-description/examples/data-systems-administration/database-engineer"
              image={DATABASE}
            />
            <hr id="underline" />
            <div className="text-center mb-5 pb-5">
              <Button
                variant="outline-dark"
                href="https://www.investopedia.com/articles/investing/101315/10-best-tech-jobs.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-50 text-center d-center"
              >
                Learn More
              </Button>
              <hr className="mb-5" id="underline" />
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};
export default ResourcesApp;
