import { createFileRoute } from '@tanstack/react-router';

import { UITag } from '@/ui/components/atoms/Tag';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <title>Home</title>
      <div>Hello "/"!</div>
      <UITag variant="primary">Tag</UITag>
      <UITag variant="secondary">Tag</UITag>
      <UITag variant="success">Tag</UITag>
      <UITag variant="info">Tag</UITag>
      <UITag variant="error">Tag</UITag>
      <UITag variant="warning">Tag</UITag>
    </>
  );
}
