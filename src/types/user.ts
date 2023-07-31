export interface ICompany {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: ICompany;
  address: any;
}
