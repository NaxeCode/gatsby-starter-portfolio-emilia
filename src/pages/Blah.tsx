import React from 'react';

interface Props {
  title: string;
  message: string;
}

const Blah: React.FC<Props> = ({ title, message }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default Blah;