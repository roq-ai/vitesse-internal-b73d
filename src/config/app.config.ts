interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Employee'],
  tenantRoles: ['Owner'],
  tenantName: 'Team',
  applicationName: 'vitesse-internal',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage user data', 'Manage team data', 'Manage candidate data', 'Manage job data'],
  ownerAbilities: [
    'Manage users',
    'Manage teams',
    'Manage candidates',
    'Manage jobs',
    'Manage interviews',
    'Manage feedback',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/184a568c-6a3e-4177-b35c-4c423eddb199',
};
