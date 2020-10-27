export interface ICovidUpdates {
  id?: number;
  title?: string;
  content?: string;
  source?: string;
  domain?: string;
}

export class CovidUpdates implements ICovidUpdates {
  constructor(public id?: number, public title?: string, public content?: string, public source?: string, public domain?: string) {}
}
