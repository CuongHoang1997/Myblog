import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostInfo from "./PostInfo";
import PostTitle from "./PostTitle";
const PostNewestItemStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }
  .post {
    &-image {
      display: block;
      flex-shrink: 0;
      width: 180px;
      height: 130px;
      border-radius: 12px;
    }
    &-category {
      background-color: white;
    }

    &-title {
      color: black;
      font-size: 16px;
    }
  }
`;
const PostNewestItem = ({ data }) => {
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  if (!data) return null;
  return (
    <PostNewestItemStyles>
      <div className="post-image">
        <PostImage url={data.image}></PostImage>
      </div>
      <div className="post-content">
        <PostCategory
          to={`/category/${data.category?.name}`}
          className="post-category"
        >
          {data.category?.name}
        </PostCategory>
        <PostTitle to={`/${data.slug}`} className="post-title">
          {data.title}
        </PostTitle>
        <PostInfo
          author={data.user?.fullname}
          to={`/user/${data.user?.username}`}
          date={formatDate}
        ></PostInfo>
      </div>
    </PostNewestItemStyles>
  );
};

export default PostNewestItem;
