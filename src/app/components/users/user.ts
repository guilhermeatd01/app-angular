import { Profile } from '../profiles/profile';

export interface User {
  id: number;
  name: string;
  profiles: Profile[];
}
