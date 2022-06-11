import { CustomBackgroundImage } from 'src/components/custom-background-image';

import { FlatButton } from '@/components/Buttons/flat-button';
import { Card } from '@/components/Card';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { Repeat } from '../components/repeat';

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
      <hr />
      <Card hoverable={true}>
        <FlatButton
          label="TestButton"
          center={true}
          className="my-2"
        ></FlatButton>
      </Card>
      <Card>
        <CustomBackgroundImage
          className="m-3 rounded-lg"
          imageLink="/assets/ripple.gif"
        ></CustomBackgroundImage>
      </Card>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Repeat times={100}>
            <Card hoverable={true}>
              <p>Test</p>
            </Card>
          </Repeat>
        </div>
      </div>
    </Main>
  );
};

export default Sandbox;
