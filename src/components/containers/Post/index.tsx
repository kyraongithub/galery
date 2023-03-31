/* eslint-disable jsx-a11y/alt-text */
import moment from "moment";
import { Col, Image, Row } from "react-bootstrap";
import styles from "./Container.module.scss";

const Post = (props: any) => {
  const { item } = props;
  return (
    <>
      {item?.link[1]["$"].href.includes(".jpg") ||
      item?.link[1]["$"].href.includes(".png") ? (
        <div className={styles.content}>
          <Row
            className={styles.header}
            onClick={() => window.open(item?.author[0].uri[0])}
            role={"button"}
          >
            <Col xl={3} xs={3} md={3} lg={3} sm={3}>
              <Image
                thumbnail
                roundedCircle
                src={item?.author[0]["flickr:buddyicon"]}
              />
            </Col>
            <Col>
              <p>
                <b>{item?.author[0].name}</b>
              </p>
              <p>{moment(item?.published[0]).fromNow()}</p>
            </Col>
          </Row>
          <Row>
            {/* <Image
              className={styles.post}
              width="400px"
              src={item?.link[1]["$"].href}
            /> */}
            <div
              className={styles.post}
              dangerouslySetInnerHTML={{
                __html: item?.content[0]["_"].replace(
                  /^(.*?)(posted a (photo|video):)/,
                  ""
                ),
              }}
            ></div>
          </Row>
          <Row>
            {item?.category.map((category: any, index: number) => {
              return category["$"].term !== "" ? (
                <p key={index}>#{category["$"].term} </p>
              ) : null;
            })}
          </Row>
        </div>
      ) : null}
    </>
  );
};

export default Post;
