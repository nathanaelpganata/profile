type StacksTypes = {
  id: number;
  name: string;
};

export type ProjectsTypes = {
  id: number;
  title: string;
  desc: string;
  url: string;
  img: string;
  date: string;
  stacks?: StacksTypes[];
};
