export enum ButtonType {
    WHITE,
    BLUE,
}

export interface ButtonProps {
    text: string;
    onPress: () => void;
    type?: ButtonType;
    style?: object;
}