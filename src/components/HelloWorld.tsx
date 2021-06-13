import React from 'react';

export interface HelloWorldProps {
  readonly text?: string;
}

export const HelloWorld = ({ text = 'Hello World!' }: HelloWorldProps) => (
  <p>{text}</p>
);
