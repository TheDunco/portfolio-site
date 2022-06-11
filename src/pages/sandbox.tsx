import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Sandbox = () => {
  return (
    <Main
      meta={
        <Meta
          title="Duncan/Sandbox"
          description="A sandbox for personal project development."
        />
      }
    >
      <h1>Sandbox Page!</h1>
    </Main>
  );
};

export default Sandbox;
