import { initSunmaoUI, SunmaoLib } from '@sunmao-ui/runtime';
import { type Application, type RuntimeModule } from '@sunmao-ui/core';
import libs from '@/libs';

type Props = {
  application: Application;
  modules?: RuntimeModule[];
};

export default function SunmaoEditor(props: Props) {
  const { application } = props;
  const { App } = initSunmaoUI({libs});
  return <App options={application} />;
}
