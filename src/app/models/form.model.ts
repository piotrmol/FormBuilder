export interface FormModel {
  type: string;
  question: string;
  userAnswer: string;
  id: string;
  subInput: Array<FormModel>;
  condition?: string;
  answer?: string;
}
