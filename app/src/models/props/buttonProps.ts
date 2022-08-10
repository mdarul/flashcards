export default interface ButtonProps {
    text: string;
    onPressed: () => void;
    icon?: JSX.Element;
    style?: object; 
}