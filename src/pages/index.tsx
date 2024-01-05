import React from 'react';

import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { getAllPosts } from '../utils/Content';
import { Content } from '../content/Content';

const Index = (props: IBlogGalleryProps) => (
  <Main
    meta={
      <Meta
        title="The Ultimate Platform for Goal Setting and Tracking"
        description={AppConfig.description}
      />
    }
  >
    <Content>
      <div className="text-xl py-5">Goaloto is a website and app that provide information, tools, and templates for goal setting and tracking. Whether you want to improve your health, career, finances, or personal life, Goaloto can help you create and follow a plan that works for you.</div>

      <div className="text-xl py-5">With Goaloto, you can: - Learn the best practices and tips for effective goal setting and achievement - Track your progress and milestones with interactive charts and graphs - Access a marketplace of free and paid goal templates created by experts and other users - Join a community of like-minded people who support and inspire each other</div>
    </Content>
    <BlogGallery posts={props.posts} pagination={props.pagination} />
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(['title', 'date', 'slug']);
  const pagination: IPaginationProps = {};

  if (posts.length > AppConfig.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default Index;
