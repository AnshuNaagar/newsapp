import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Card, Text, Row, Button } from "@nextui-org/react";
import axios from "axios";

const UsHead = (props) => {
  const [usHeadlines, setUsHeadlines] = useState([]);
  useEffect(() => {
    const newsHeadLines = async () => {
      const resPonseHeadlines = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=391b845c95b64b0ea4a5c67fe7d31a41"
      );
      setUsHeadlines(resPonseHeadlines.data.articles);
      console.log(resPonseHeadlines.data);
    };
    newsHeadLines();
  }, []);
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <h1>{props.heading}</h1>
          {usHeadlines &&
            usHeadlines.map((items, index) => {
              return (
                <>
                  <div className="col-md-6 d-flex my-3" key={index}>
                    <Card hoverable clickable>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          objectFit="cover"
                          src={items.urlToImage}
                          width={900}
                          height={700}
                          alt={items.title}
                        />
                      </Card.Body>
                      <Card.Footer justify="flex-start">
                        <Row wrap="wrap" justify="space-between">
                          <Text b size={25}>
                            {items.title}
                          </Text>
                          <Text
                            css={{
                              color: "black",
                              fontWeight: "$semibold",
                            }}
                          >
                            {items.author}
                          </Text>
                          <Text>{items.description}</Text>
                          <a
                            href={items.url}
                            style={{ textDecoration: "none" }}
                          >
                            <Button
                              className="my-4"
                              color="secondary"
                              hoverable
                              clickable
                            >
                              Click to view
                            </Button>
                          </a>
                        </Row>
                      </Card.Footer>
                    </Card>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

UsHead.propTypes = {
  heading: PropTypes.string,
};

export default UsHead;
