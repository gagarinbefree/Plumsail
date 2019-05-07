export interface IInputElement {    
    id: string;
    title: string;     
    name?: string;
    placeholder?: string;
    required?: boolean;
    value?: any;
    values?: string[];
    invalidFeedBack?: string;
    handleChange(e: any): void;    
}