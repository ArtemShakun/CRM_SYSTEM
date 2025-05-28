import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <title>Home</title>
      <div>Hello "/"!</div>
    </>
  );
}
