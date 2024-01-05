import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="About" description="About Goaloto" />}>
    <Content>
      <p>
      Goaloto is more than just a website and app. Its a vision, a mission, and a passion. We believe that everyone deserves to live a fulfilling and meaningful life, and that goal setting is the key to unlocking ones true potential.</p>

      <p>We created Goaloto to provide a platform where people can learn, create, and share their goals with ease and confidence. We combine the latest research, technology, and creativity to offer information, tools, and templates for goal setting and tracking. We also foster a community of like-minded people who support and inspire each other.</p>

      <p>Our team consists of experts, coaches, and enthusiasts who have years of experience and knowledge in the field of goal setting and achievement. We are always looking for new ways to improve our product and service, and to deliver value to our users. We welcome your feedback, suggestions, and questions. Contact us today and let us know how we can help you reach your goals.</p>
    </Content>
  </Main>
);

export default About;
