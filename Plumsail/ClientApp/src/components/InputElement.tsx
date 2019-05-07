﻿export interface IInputElement {    
    id: string;
    title: string;     
    name?: string;
    placeholder?: string;
    required?: boolean;
    values?: string[];
    invalidFeedBack?: string;
    handleChange(e: any): void;    
}