export type TAuth = {
    email: string
    password: string
    username: string
}

export type TErrorMessage = {
    message: string
}

export type TVerificationCode = {
    code: string
}

export interface Profile {
    id: string;
    username: string;
    email: string;
    image: string
    info: string
}

export interface ProfilesState {
    profiles: Profile[];
    loading: boolean;
    error: string | null;
}

export interface BackendError {
    message: string;
}
