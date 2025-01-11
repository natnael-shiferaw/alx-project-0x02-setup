import React from 'react';
import Button from '@/components/common/Button';

const About = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">About Page</h1>
      <div className="flex flex-col items-center gap-4">
        <Button size="small" shape="rounded-sm" onClick={() => alert('Small Button')}>
          Small Button
        </Button>
        <Button size="medium" shape="rounded-md" onClick={() => alert('Medium Button')}>
          Medium Button
        </Button>
        <Button size="large" shape="rounded-full" onClick={() => alert('Large Button')}>
          Large Button
        </Button>
      </div>
    </div>
  );
};

export default About;
