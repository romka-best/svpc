export type PlanYourTourStepId =
  | 'select-days'
  | 'select-participants'
  | 'select-attractions'
  | 'car-choice'
  | 'contact-information';

export type GroupType =
  | 'solo'
  | 'partners'
  | 'family'
  | 'group';

export type CarId =
  | 'model-3'
  | 'model-y'
  | 'cybertruck'
  | 'id-buzz';

export type ContactMethod =
  | 'email'
  | 'phone'
  | 'telegram';

export interface SelectDaysAnswer {
  endDate: string | null;
  startDate: string | null;
}

export interface SelectParticipantsAnswer {
  adults: number;
  groupType: GroupType;
  participants: number;
}

export interface SelectAttractionsAnswer {
  autoChoice: boolean;
  selectedIds: string[];
}

export interface CarChoiceAnswer {
  carId: CarId | null;
}

export interface ContactInformationAnswer {
  agreedToPrivacy: boolean;
  contactValue: string;
  method: ContactMethod;
}

export interface PlanYourTourAnswers {
  'select-days': SelectDaysAnswer;
  'select-participants': SelectParticipantsAnswer;
  'select-attractions': SelectAttractionsAnswer;
  'car-choice': CarChoiceAnswer;
  'contact-information': ContactInformationAnswer;
}

export interface PlanYourTourStepDefinition {
  id: PlanYourTourStepId;
  isComplete: (answers: PlanYourTourAnswers) => boolean;
  label: string;
  title: string;
}

export type SubmissionStatus =
  | 'idle'
  | 'loading'
  | 'success';

export interface PlanYourTourState {
  answers: PlanYourTourAnswers;
  stepId: PlanYourTourStepId;
  submissionStatus: SubmissionStatus;
}
