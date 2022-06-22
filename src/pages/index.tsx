import { Meta } from '@/layouts/Meta';
import Portfolio from '@/page-components/portfolio';
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
      <Portfolio></Portfolio>
    </Main>
  );
};

export default Index;
