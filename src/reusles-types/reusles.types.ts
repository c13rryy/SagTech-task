// TODO: что такое reusles types?

export interface InfoFromInput {
  title: string;
  info: string;
}

export interface TasksInfo {
  id: string;
  title: string;
  info: string;
}

export interface AuthData {
  email: string;
  password: string | number;
}

export interface InformationSlice {
  id: string;
  date: string;
  correctDate: string;
  info: string;
  title: string;
}
