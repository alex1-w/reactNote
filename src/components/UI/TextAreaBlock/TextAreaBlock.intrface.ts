import { RegisterOptions, UseFormRegister, UseFormSetError } from "react-hook-form";
import { INoteForm } from "../../../types/Note.interface";

export interface ITextAreaBlock {
    disabled: boolean;
    name: string
    register: UseFormRegister<any>;
    placeholder: string
    errors: string | undefined;
    setError: UseFormSetError<INoteForm>
    rules: RegisterOptions;
}
