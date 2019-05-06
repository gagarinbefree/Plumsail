export interface IInputElement {    
    id: string;
    title: string;        
    placeholder?: string;
    required?: boolean;
    values?: string[];
    handleChange(e: any): void;    
}