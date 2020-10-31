import React from 'react'
import CardHeader, { CardHeaderProps } from '@material-ui/core/CardHeader'

export const StringExample: React.FC = () => {
  return (
    <CardHeader title="String Title" />
  );
}

export const ElementExample: React.FC = () => {
  return (
    <CardHeader title={<div>Element Title</div>} />
  );
}

export const StringExampleProps: CardHeaderProps = {
  title: "String Title",
};

// ==== This breaks when compiling =====
export const ElementExampleProps: CardHeaderProps = {
  title: <div>Element Title</div>,
}
