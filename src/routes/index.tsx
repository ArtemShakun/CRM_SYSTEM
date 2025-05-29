import { createFileRoute } from '@tanstack/react-router';

import { UILinkTag } from '@/ui/components/atoms/LinkTag';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <title>Home</title>
      <div>Hello "/"!</div>
      <UILinkTag link="./" title="Link" position="end" />
    </>
  );
}
