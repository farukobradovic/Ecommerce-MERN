import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((c) => (
          <LinkContainer
            key={c + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${c + 1}`
                  : `/page/${c + 1}`
                : `/admin/productlist/${c + 1}`
            }
          >
            <Pagination.Item active={c + 1 === page}>{c + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
