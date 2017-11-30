export interface Advance {
  amount: number;
  amountPercentage: number;
  cancelledDate?: Date;
  creationDate?: Date;
  currency: {
    code: string;
    id: number;
    name: string;
  };
  description: string;
  employee: {
    company: {
      id: number
      name: string
    }
    firstName: string
    id: number
    name: string
    registery: string
    surname: string
  };
  id: number;
  isActive: boolean;
  localAmount: number;
  ownerEmployee: {
    company?: {
      id: number
      name: string
    }
    firstName?: string;
    id: number;
    name?: string;
    registery?: string;
    surname?: string;
  };
  registery: string;
  requestDate: Date;
  sapMessage?: string;
  sapSendDate?: Date;
  status: {
    id: number;
    name: string;
  };
}
