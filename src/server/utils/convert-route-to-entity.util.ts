const mapping: Record<string, string> = {
  candidates: 'candidate',
  feedbacks: 'feedback',
  interviews: 'interview',
  jobs: 'job',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
