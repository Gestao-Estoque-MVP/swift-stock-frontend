export interface IInputProps {
    label: string;
    id: string;
    type: string;
    placeholder?: string;
    register?: any;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }