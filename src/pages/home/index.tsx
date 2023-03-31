import Post from "components/containers/Post";
import Loader from "components/elements/Loader";
import { store } from "context/redux";
import { handleKeyword } from "context/redux/action";
import { useEffect, useState } from "react";
import { Container, Form, Button, InputGroup, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { getGalery, getGaleryByTag } from "services/Galery/http";
import styles from "./Home.module.scss";

const Home = () => {
  const { isLoading, galery, keyword } = store.getState();
  const [tag, settag] = useState<string>("");
  useEffect(() => {
    if (keyword !== "") {
      getGaleryByTag(keyword);
    } else {
      getGalery();
    }
  }, [keyword]);

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Flickr Galery</Navbar.Brand>
          <Navbar.Brand className="justify-content-end">
            <InputGroup className={`${styles.input} mb-3`}>
              <Form.Control
                placeholder="Searh by tag"
                aria-label="Searh by tag"
                aria-describedby="basic-addon2"
                onChange={(e: any) => settag(e.target.value)}
                value={tag}
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                onClick={() => handleKeyword(tag)}
              >
                Search
              </Button>
            </InputGroup>
          </Navbar.Brand>
        </Container>
      </Navbar>

      {galery.map((item: any, index: number) => {
        return <Post item={item} key={index} />;
      })}
    </Container>
  );
};

const galeryStateToProps = (state: any) => {
  return {
    isLoading: state.isLoading,
    galery: state.galery,
  };
};

export default connect(galeryStateToProps)(Home);
