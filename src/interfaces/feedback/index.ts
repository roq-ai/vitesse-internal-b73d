import { UserInterface } from 'interfaces/user';
import { InterviewInterface } from 'interfaces/interview';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  content: string;
  rating: number;
  user_id: string;
  interview_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  interview?: InterviewInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  interview_id?: string;
}
