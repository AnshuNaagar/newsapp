import React, { useState, useEffect } from "react";
import "./style/All.css";
import axios from "axios";
import { Card, Text, Row, Button } from "@nextui-org/react";
const Business = () => {
  const [business, setBusiness] = useState([]);
  useEffect(() => {
    const loadNewsBusiness = async () => {
      const responseBusiness = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=391b845c95b64b0ea4a5c67fe7d31a41"
      );
      setBusiness(responseBusiness.data.articles);
      console.log(responseBusiness.data);
    };
    loadNewsBusiness();
  }, []);
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <h1>Business Posts</h1>
          {business &&
            business.map((items, index) => {
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

export default Business;
