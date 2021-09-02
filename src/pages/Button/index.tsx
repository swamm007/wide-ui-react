import Button from "../../compontents/Button";
import './index.scss';
const TestButton = () => {
  const goConsole = (e: any) => {
      console.log('e==', e)
  }
  return (
    <div className="test-button">
      <Button type="primary" size="small" onClick={goConsole}>
        Primary Button
      </Button>

      <Button type="primary" size="small" onClick={goConsole} danger>
        Primary Button
      </Button>

      <Button type="primary" disabled size="large" onClick={goConsole}>
        Primary(disabled)
      </Button>

      <Button type="default" size="large" onClick={goConsole} shape="round">
        Default Button
      </Button>

      <Button type="default" disabled size="large" onClick={goConsole}>
        Default Button
      </Button>

      <Button type="text" onClick={goConsole}>
        Text Button
      </Button>
      
      <Button type="text" disabled onClick={goConsole}>
        Text Button
      </Button>


      <Button type="link" onClick={goConsole}>
        Link Button
      </Button>

      <Button type="link" disabled onClick={goConsole}>
        Link Button
      </Button>
    </div>
  );
};

export default TestButton;
