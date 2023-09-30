import { FeedbackInterface } from 'interfaces/feedback';
import { UserInterface } from 'interfaces/user';
import { CandidateInterface } from 'interfaces/candidate';
import { GetQueryInterface } from 'interfaces';

export interface InterviewInterface {
  id?: string;
  date: any;
  location: string;
  status: string;
  user_id: string;
  candidate_id: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  user?: UserInterface;
  candidate?: CandidateInterface;
  _count?: {
    feedback?: number;
  };
}

export interface InterviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  status?: string;
  user_id?: string;
  candidate_id?: string;
}
