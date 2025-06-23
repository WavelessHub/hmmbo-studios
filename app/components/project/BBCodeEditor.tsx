// components/BBCodeRenderer.tsx
'use client';
import React from 'react';
import BBCode from '@bbob/react';
import presetReact from '@bbob/preset-react';

const plugins = [presetReact()];

interface BBCodeRendererProps {
  bbcode: string;
}

export default function BBCodeRenderer({ bbcode }: BBCodeRendererProps) {
  return (
   
      <BBCode plugins={plugins}>{bbcode}</BBCode>

  );
}
