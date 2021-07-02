export interface Plan{
  id: string;
  name:string;
  time: Date;
  rating: number;
  description?: string;
}
export interface VotedOn {
  vote: boolean,
  plan: Plan,
}