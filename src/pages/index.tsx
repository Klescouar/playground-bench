import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';

const Shader = dynamic(() => import('../components/canvas/ShaderExample/Blob'), {
  ssr: false,
});

// DOM elements here
const DOM = () => {
  return <></>;
};

// Canvas/R3F components here
const R3F = () => {
  return (
    <>
      <Shader />
    </>
  );
};

export default function Page() {
  return (
    <>
      <DOM />
      <R3F />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Kevin Le Scouarnec | Portfolio!',
    },
  };
}
