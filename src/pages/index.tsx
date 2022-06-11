import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Duncan Van Keulen"
          description="A personal project portfolio site."
        />
      }
    >
      <h1>Duncan Van Keulen</h1>
    </Main>
  );
};

export default Index;
