type StacksTypes = {
  id: number;
  name: string;
};

export type ProjectsTypes = {
  id: number;
  title: string;
  desc: string;
  img: string;
  date: string;
  liveUrl?: string;
  gitUrl?: string;
  stacks?: StacksTypes[];
};
